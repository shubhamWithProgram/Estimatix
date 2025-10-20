# 🔒 Firebase OAuth Domain Authorization Fix

## ❌ The Problem

When trying to sign in with Google on your GitHub Pages site, you see this error:

```
Google sign in error: FirebaseError: Firebase: Error (auth/unauthorized-domain)
Info: The current domain is not authorized for OAuth operations.
```

**Root Cause:** Your GitHub Pages domain `shubhamwithprogram.github.io` is not in Firebase's authorized domains list.

---

## ✅ The Solution

### **Step 1: Open Firebase Console**

1. Go to: **https://console.firebase.google.com/**
2. Sign in with your Google account
3. Select your project: **venkateshaluminiumcalc**

### **Step 2: Navigate to Authentication Settings**

1. Click **Authentication** in the left sidebar
2. Click the **Settings** tab at the top
3. Scroll down to the **Authorized domains** section

### **Step 3: Add Your GitHub Pages Domain**

1. Click the **Add domain** button
2. Enter: `shubhamwithprogram.github.io`
3. Click **Add**

### **Step 4: Verify Existing Domains**

Make sure you have these domains authorized:

- ✅ `localhost` (for local development)
- ✅ `venkateshaluminiumcalc.firebaseapp.com` (default Firebase domain)
- ✅ `shubhamwithprogram.github.io` (your GitHub Pages site)

---

## 🎯 Quick Access Links

- **Firebase Console:** https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/settings
- **Your Live Site:** https://shubhamwithprogram.github.io/Estimatix/
- **Your Project:** venkateshaluminiumcalc

---

## 📸 Visual Guide

### Where to Find It:

```
Firebase Console
  └─ 🔥 venkateshaluminiumcalc
      └─ 🔐 Authentication
          └─ ⚙️ Settings
              └─ 🌐 Authorized domains
                  └─ ➕ Add domain
```

---

## ⏱️ Important Notes

1. **Propagation Time:** After adding the domain, wait 1-2 minutes for changes to take effect
2. **Case Sensitive:** Domain names are case-sensitive, use lowercase
3. **No Protocol:** Don't include `https://` or `http://` - just the domain
4. **Wildcards:** Wildcards are not supported, add each subdomain explicitly

---

## 🧪 Testing

After adding the domain:

1. **Clear browser cache** (or open incognito/private window)
2. Go to: https://shubhamwithprogram.github.io/Estimatix/#/login
3. Click **"Sign in with Google"**
4. Should work without errors ✅

---

## 🔍 Troubleshooting

### Still Getting the Error?

1. **Wait 2-3 minutes** - Changes take time to propagate
2. **Hard refresh** - Press `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
3. **Clear cookies** - Clear site data for your domain
4. **Try incognito mode** - Open a fresh private browsing window
5. **Check spelling** - Verify domain is exactly `shubhamwithprogram.github.io`

### Other Common Errors

| Error Code | Meaning | Solution |
|------------|---------|----------|
| `auth/popup-blocked` | Browser blocked popup | Allow popups for your site |
| `auth/popup-closed-by-user` | User closed popup | Try again |
| `auth/network-request-failed` | Network issue | Check internet connection |
| `auth/invalid-api-key` | Wrong API key | Verify Firebase config |

---

## 📋 Current Firebase Configuration

Your app is configured with:

```javascript
Project ID: venkateshaluminiumcalc
Auth Domain: venkateshaluminiumcalc.firebaseapp.com
API Key: AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU
```

---

## 🎓 Why This Happens

Firebase requires **explicit authorization** of domains for security reasons. This prevents:

- ❌ Unauthorized websites from using your Firebase project
- ❌ Phishing attacks using your authentication
- ❌ API key misuse from unknown domains

By adding your domain to the authorized list, you're telling Firebase:
> "Yes, this is my legitimate website, allow OAuth operations"

---

## ✨ After Fix

Once the domain is authorized, your users will be able to:

- ✅ Sign in with Google
- ✅ Sign in with Email/Password  
- ✅ Reset passwords
- ✅ Use all Firebase Authentication features

---

## 📞 Need Help?

If you're still having issues after following these steps:

1. Check Firebase Console for any error messages
2. Verify your Firebase project is on the Spark (free) or Blaze (paid) plan
3. Ensure Firebase Authentication is enabled in your project
4. Check browser console for additional error details

---

**Last Updated:** October 20, 2025  
**Issue:** OAuth Domain Authorization  
**Status:** ⏳ Awaiting Firebase Console Configuration
