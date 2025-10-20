# 🔐 Authentication Error Resolution Guide

## ❌ Current Error

```
auth/invalid-credential
POST https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=... 400 (Bad Request)
```

---

## 🎯 What This Means

The error `auth/invalid-credential` occurs when:

1. **Email doesn't exist** in Firebase Authentication
2. **Password is incorrect** for the given email
3. **Email format is invalid**
4. **Account was deleted** from Firebase Console

---

## ✅ Solution Steps

### **Step 1: Create a New Account**

Since you're trying to log in but don't have an account yet, you need to **sign up first**:

1. **On Login Page**, look for "Don't have an account? **Sign up**" at the bottom
2. Or directly navigate to: `http://localhost:5174/#/signup`
3. Fill in:
   - **Name**: Your name
   - **Email**: A valid email (e.g., `test@example.com`)
   - **Password**: At least 6 characters
   - **Confirm Password**: Same as password
   - Check "I agree to Terms & Conditions"
4. Click **"Sign Up"**

---

### **Step 2: Verify Firebase Email/Password Authentication is Enabled**

1. Go to **Firebase Console**: https://console.firebase.google.com/
2. Select project: **venkateshaluminiumcalc**
3. Go to **Authentication** → **Sign-in method**
4. Check if **Email/Password** provider is **ENABLED**
   - If disabled, click on it and toggle **Enable**
   - Save changes

---

### **Step 3: Test Account (For Quick Testing)**

If you want to test without creating an account, you can create one directly in Firebase Console:

**Firebase Console Method:**
1. Go to: https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/users
2. Click **"Add user"**
3. Enter:
   - Email: `test@estimatix.com`
   - Password: `Test123456`
4. Click **"Add user"**
5. Now you can log in with these credentials

---

### **Step 4: Alternative - Use Google Sign In**

Instead of email/password, you can use Google authentication:

1. On the login page, click **"Sign in with Google"**
2. This requires:
   - Google OAuth to be enabled in Firebase
   - Your domain (`shubhamwithprogram.github.io`) to be authorized (which we already added)

---

## 🔍 Checking Your Firebase Configuration

### **Current Firebase Setup:**
```javascript
Project ID: venkateshaluminiumcalc
Auth Domain: venkateshaluminiumcalc.firebaseapp.com
API Key: AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU
```

### **Verify Authentication Methods:**

Run this in Firebase Console:
1. **Email/Password**: Should be ✅ Enabled
2. **Google**: Should be ✅ Enabled (for OAuth)

---

## 🧪 Testing Locally

### **Quick Test Account Creation:**

1. **Navigate to signup:**
   ```
   http://localhost:5174/#/signup
   ```

2. **Fill the form:**
   ```
   Name: Test User
   Email: testuser@example.com
   Password: Test123456
   Confirm Password: Test123456
   ✅ Agree to Terms
   ```

3. **Click "Sign Up"**

4. **If successful**, you'll be redirected to `/dashboard`

5. **Then you can use these credentials** to log in:
   ```
   Email: testuser@example.com
   Password: Test123456
   ```

---

## 🐛 Common Issues & Fixes

### **Issue 1: "Email already in use"**
**Solution:** Use a different email or reset the password for existing email

### **Issue 2: "Weak password"**
**Solution:** Use at least 6 characters

### **Issue 3: "Invalid email"**
**Solution:** Use proper email format (e.g., `user@example.com`)

### **Issue 4: "Network error"**
**Solution:** 
- Check internet connection
- Verify Firebase API key is correct
- Check browser console for CORS errors

### **Issue 5: Google Sign-In shows domain error**
**Solution:** We already fixed this! Domain is authorized. Wait 2 minutes after adding domain to Firebase.

---

## 📝 Summary

**Current Problem:**
- You're trying to log in without having an account

**Quick Fix:**
1. Go to signup page: `http://localhost:5174/#/signup`
2. Create an account
3. Then log in with those credentials

**Or:**
- Create user directly in Firebase Console
- Use Google Sign-In instead

---

## 🔗 Quick Links

- **Signup Page**: http://localhost:5174/#/signup
- **Login Page**: http://localhost:5174/#/login
- **Firebase Auth Users**: https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/users
- **Firebase Auth Methods**: https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/providers

---

**Need Help?**
1. Make sure Email/Password authentication is enabled in Firebase Console
2. Create an account through the signup page
3. Then try logging in again

The error will disappear once you have valid credentials! 🎉
