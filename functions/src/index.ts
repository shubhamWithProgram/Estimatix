// functions/src/index.ts

import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import type { Request, Response } from "express";
import Stripe from "stripe";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

// Use Firebase Secret for Stripe (set it with CLI: firebase functions:secrets:set STRIPE_SECRET_KEY)
const STRIPE_SECRET_KEY = defineSecret("STRIPE_SECRET_KEY");

// ---------- HTTP: Create Checkout Session ----------
export const createCheckoutSession = onRequest(
  { cors: true, secrets: [STRIPE_SECRET_KEY] },
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { priceId, successUrl, cancelUrl } = (req.body ?? {}) as {
        priceId?: string;
        successUrl?: string;
        cancelUrl?: string;
      };

      const userId =
        (req.headers.authorization || "").replace("Bearer ", "").trim();

      if (!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      if (!priceId || !successUrl || !cancelUrl) {
        res.status(400).json({ error: "Missing priceId/successUrl/cancelUrl" });
        return;
      }

      const userSnap = await db.collection("users").doc(userId).get();
      if (!userSnap.exists) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      const userData = (userSnap.data() ?? {}) as {
        email?: string;
        displayName?: string;
        stripeCustomerId?: string;
      };

      const stripe = new Stripe(STRIPE_SECRET_KEY.value(), {
        apiVersion: "2023-10-16",
      });

      // Ensure customer
      let customerId = userData.stripeCustomerId;
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: userData.email,
          name: userData.displayName,
          metadata: { userId },
        });
        customerId = customer.id;

        await db.collection("users").doc(userId).update({
          stripeCustomerId: customerId,
          updatedAt: Date.now(),
        });
      }

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: { userId },
      });

      res.status(200).json({ url: session.url, id: session.id });
      return;
    } catch (err: any) {
      console.error("createCheckoutSession error:", err);
      res.status(500).json({ error: err?.message ?? "Stripe error" });
      return;
    }
  }
);

// ---------- HTTP: Customer Portal ----------
export const createPortalSession = onRequest(
  { cors: true, secrets: [STRIPE_SECRET_KEY] },
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { returnUrl } = (req.body ?? {}) as { returnUrl?: string };
      const userId =
        (req.headers.authorization || "").replace("Bearer ", "").trim();

      if (!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      if (!returnUrl) {
        res.status(400).json({ error: "Missing returnUrl" });
        return;
      }

      const userSnap = await db.collection("users").doc(userId).get();
      if (!userSnap.exists) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      const userData = (userSnap.data() ?? {}) as {
        stripeCustomerId?: string;
      };
      const customerId = userData.stripeCustomerId;

      if (!customerId) {
        res.status(400).json({ error: "No subscription found" });
        return;
      }

      const stripe = new Stripe(STRIPE_SECRET_KEY.value(), {
        apiVersion: "2023-10-16",
      });

      const session = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl,
      });

      res.status(200).json({ url: session.url });
      return;
    } catch (err: any) {
      console.error("createPortalSession error:", err);
      res.status(500).json({ error: err?.message ?? "Stripe portal error" });
      return;
    }
  }
);

// ---------- Firestore Trigger: Handle Stripe Events Doc ----------
export const handleSuccessfulPayment = onDocumentCreated(
  "stripe_events/{eventId}",
  async (event): Promise<void> => {
    if (!event.data) return; // type guard
    const eventData = event.data.data() as any;

    if (eventData?.type === "checkout.session.completed") {
      const session = eventData?.data?.object;
      const userId = session?.metadata?.userId as string | undefined;

      if (userId) {
        await db.collection("users").doc(userId).update({
          subscription: {
            plan: session?.subscription ? "pro" : "free",
            status: "active",
            stripeSubscriptionId: session?.subscription ?? null,
            currentPeriodEnd:
              session?.subscription_details?.current_period_end ?? null,
          },
          updatedAt: Date.now(),
        });
      }
    }
  }
);



