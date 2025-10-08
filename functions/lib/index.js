"use strict";
// functions/src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSuccessfulPayment = exports.createPortalSession = exports.createCheckoutSession = void 0;
const https_1 = require("firebase-functions/v2/https");
const firestore_1 = require("firebase-functions/v2/firestore");
const params_1 = require("firebase-functions/params");
const stripe_1 = require("stripe");
const app_1 = require("firebase-admin/app");
const firestore_2 = require("firebase-admin/firestore");
(0, app_1.initializeApp)();
const db = (0, firestore_2.getFirestore)();
// Use Firebase Secret for Stripe (set it with CLI: firebase functions:secrets:set STRIPE_SECRET_KEY)
const STRIPE_SECRET_KEY = (0, params_1.defineSecret)("STRIPE_SECRET_KEY");
// ---------- HTTP: Create Checkout Session ----------
exports.createCheckoutSession = (0, https_1.onRequest)({ cors: true, secrets: [STRIPE_SECRET_KEY] }, async (req, res) => {
    var _a, _b, _c;
    try {
        const { priceId, successUrl, cancelUrl } = ((_a = req.body) !== null && _a !== void 0 ? _a : {});
        const userId = (req.headers.authorization || "").replace("Bearer ", "").trim();
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
        const userData = ((_b = userSnap.data()) !== null && _b !== void 0 ? _b : {});
        const stripe = new stripe_1.default(STRIPE_SECRET_KEY.value(), {
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
    }
    catch (err) {
        console.error("createCheckoutSession error:", err);
        res.status(500).json({ error: (_c = err === null || err === void 0 ? void 0 : err.message) !== null && _c !== void 0 ? _c : "Stripe error" });
        return;
    }
});
// ---------- HTTP: Customer Portal ----------
exports.createPortalSession = (0, https_1.onRequest)({ cors: true, secrets: [STRIPE_SECRET_KEY] }, async (req, res) => {
    var _a, _b, _c;
    try {
        const { returnUrl } = ((_a = req.body) !== null && _a !== void 0 ? _a : {});
        const userId = (req.headers.authorization || "").replace("Bearer ", "").trim();
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
        const userData = ((_b = userSnap.data()) !== null && _b !== void 0 ? _b : {});
        const customerId = userData.stripeCustomerId;
        if (!customerId) {
            res.status(400).json({ error: "No subscription found" });
            return;
        }
        const stripe = new stripe_1.default(STRIPE_SECRET_KEY.value(), {
            apiVersion: "2023-10-16",
        });
        const session = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: returnUrl,
        });
        res.status(200).json({ url: session.url });
        return;
    }
    catch (err) {
        console.error("createPortalSession error:", err);
        res.status(500).json({ error: (_c = err === null || err === void 0 ? void 0 : err.message) !== null && _c !== void 0 ? _c : "Stripe portal error" });
        return;
    }
});
// ---------- Firestore Trigger: Handle Stripe Events Doc ----------
exports.handleSuccessfulPayment = (0, firestore_1.onDocumentCreated)("stripe_events/{eventId}", async (event) => {
    var _a, _b, _c, _d, _e;
    if (!event.data)
        return; // type guard
    const eventData = event.data.data();
    if ((eventData === null || eventData === void 0 ? void 0 : eventData.type) === "checkout.session.completed") {
        const session = (_a = eventData === null || eventData === void 0 ? void 0 : eventData.data) === null || _a === void 0 ? void 0 : _a.object;
        const userId = (_b = session === null || session === void 0 ? void 0 : session.metadata) === null || _b === void 0 ? void 0 : _b.userId;
        if (userId) {
            await db.collection("users").doc(userId).update({
                subscription: {
                    plan: (session === null || session === void 0 ? void 0 : session.subscription) ? "pro" : "free",
                    status: "active",
                    stripeSubscriptionId: (_c = session === null || session === void 0 ? void 0 : session.subscription) !== null && _c !== void 0 ? _c : null,
                    currentPeriodEnd: (_e = (_d = session === null || session === void 0 ? void 0 : session.subscription_details) === null || _d === void 0 ? void 0 : _d.current_period_end) !== null && _e !== void 0 ? _e : null,
                },
                updatedAt: Date.now(),
            });
        }
    }
});
//# sourceMappingURL=index.js.map