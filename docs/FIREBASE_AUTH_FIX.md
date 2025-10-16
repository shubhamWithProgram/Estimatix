# 🚨 Firebase Authentication Troubleshooting - Step by Step

## Current Issue: Still getting `auth/configuration-not-found`

This means Firebase Authentication is **not properly enabled** in your Firebase Console. Let's fix this step-by-step:

## ✅ Step 1: Verify Firebase Project Setup

1. Go to: https://console.firebase.google.com/
2. Click on your project: **venkateshaluminiumcalc**
3. Make sure you're in the correct project

## ✅ Step 2: Enable Authentication (CRITICAL)

1. In the left sidebar, click **"Authentication"**
2. If you see **"Get started"** button, click it
3. If Authentication is already enabled, proceed to Step 3

## ✅ Step 3: Enable Email/Password Provider

1. Go to **Authentication** → **Sign-in method** tab
2. Look for **"Email/Password"** in the providers list
3. Click on **"Email/Password"**
4. **Toggle "Enable"** to ON
5. Click **"Save"**

## ✅ Step 4: Check Authorized Domains

1. Still in **Authentication** → **Settings** tab
2. Scroll down to **"Authorized domains"**
3. Make sure these domains are listed:
   - `localhost`
   - `venkateshaluminiumcalc.firebaseapp.com`
   - `venkateshaluminiumcalc.web.app`

## ✅ Step 5: Verify API Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to **"Your apps"** section
3. Find your web app and click the **config icon (</>) **
4. Verify the config matches exactly:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## 🔍 Debugging Steps

1. **Visit the login page**: http://localhost:5173/#/login
2. **Check the Firebase Debug component** (now visible on login page)
3. **Open browser console** (F12) and look for error messages
4. **Look for specific error codes**:
   - `auth/configuration-not-found` = Authentication not enabled
   - `auth/api-key-not-valid` = Wrong API key
   - `auth/invalid-api-key` = API key issues

## 🛠️ Common Fixes

### If you still see `auth/configuration-not-found`:

1. **Double-check Email/Password is enabled** in Firebase Console
2. **Wait 5-10 minutes** after enabling (Firebase needs time to propagate)
3. **Clear browser cache** and restart dev server
4. **Try creating a test user** directly in Firebase Console first

### If you see `auth/api-key-not-valid`:

1. **Regenerate the API key** in Firebase Console
2. **Update the config** in `src/lib/firebase.ts`
3. **Restart the dev server**

## 🚨 Emergency Fix

If nothing works, try this:

1. **Delete the current web app** in Firebase Console
2. **Create a new web app** with same name
3. **Copy the new config** to `src/lib/firebase.ts`
4. **Re-enable Authentication** and Email/Password provider
5. **Restart dev server**

## 🔗 Direct Links

- [Your Firebase Console](https://console.firebase.google.com/project/venkateshaluminiumcalc)
- [Authentication Settings](https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/users)
- [Sign-in Methods](https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/providers)

---

**After following these steps, your authentication should work!** If you're still having issues, check the browser console for the exact error message and let me know what you see.