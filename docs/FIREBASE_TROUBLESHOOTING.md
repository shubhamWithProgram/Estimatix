# Firebase Configuration Troubleshooting Guide

## Error: Firebase: Error (auth/configuration-not-found)

This error typically occurs when Firebase Authentication is not properly set up in your Firebase Console.

### Step-by-Step Fix:

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: `venkateshaluminiumcalc`
3. **Enable Authentication**:
   - Click "Authentication" in the left sidebar
   - Click "Get started" if Authentication is not enabled
   - Go to "Sign-in method" tab
   - Enable "Email/Password" provider
   - Click "Email/Password" and toggle "Enable"
   - Save the settings

4. **Check Authorized Domains**:
   - In Authentication → Settings → Authorized domains
   - Make sure `localhost` is in the list
   - Add your domain if deploying to production

5. **Verify API Key Permissions**:
   - Go to Google Cloud Console: https://console.cloud.google.com/
   - Select your project: `venkateshaluminiumcalc`
   - Go to "APIs & Services" → "Credentials"
   - Find your API key and click "Edit"
   - Under "API restrictions", make sure these APIs are enabled:
     - Identity and Access Management (IAM) API
     - Firebase Authentication API
     - Cloud Firestore API

6. **Check Firebase Project Settings**:
   - In Firebase Console → Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Verify the config matches exactly:

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

### Common Issues:

1. **Authentication not enabled**: Most common cause
2. **Wrong domain**: localhost not in authorized domains
3. **API key restrictions**: API key not allowed for Firebase Auth
4. **Project not found**: Wrong project ID in configuration

### Testing Steps:

1. Open the browser console when visiting http://localhost:5174/
2. Look for Firebase initialization logs
3. Try to sign in and check for detailed error messages
4. Use the Firebase Debugger component on the login page

### If Still Having Issues:

1. Delete and recreate the Firebase web app in Console
2. Generate new configuration
3. Update the config in `src/lib/firebase.ts`
4. Clear browser cache and restart dev server
