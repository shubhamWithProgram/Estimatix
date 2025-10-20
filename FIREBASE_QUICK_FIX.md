# 🚀 QUICK FIX - 2 Minutes

## The Error You're Seeing:
```
❌ Google sign in error: FirebaseError: Firebase: Error (auth/unauthorized-domain)
```

## The Fix (Follow These Steps):

### 1️⃣ Open This Link:
👉 **https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/settings**

### 2️⃣ Scroll to "Authorized domains"

### 3️⃣ Click "Add domain" button

### 4️⃣ Enter exactly:
```
shubhamwithprogram.github.io
```

### 5️⃣ Click "Add" or "Save"

### 6️⃣ Wait 2 minutes, then test your site

---

## ✅ After Adding the Domain:

Your authorized domains should include:

- ✅ `localhost`
- ✅ `venkateshaluminiumcalc.firebaseapp.com`
- ✅ `shubhamwithprogram.github.io` ← **ADD THIS**

---

## 🧪 Test It:

1. Go to: https://shubhamwithprogram.github.io/Estimatix/#/login
2. Click "Sign in with Google"
3. Should work! 🎉

---

**Need more details?** See `FIREBASE_DOMAIN_FIX.md`
