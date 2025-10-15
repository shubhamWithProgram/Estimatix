// Firebase configuration and initialization
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "venkateshaluminiumcalc.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "venkateshaluminiumcalc",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "venkateshaluminiumcalc.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "383864958193",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:383864958193:web:9ea57f9d944cd537f20d50"
}

console.log('🔥 Firebase initializing with config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  hasApiKey: !!firebaseConfig.apiKey
})

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)

console.log('✅ Firebase services initialized successfully')

export default app


