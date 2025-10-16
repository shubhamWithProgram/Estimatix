// Firebase configuration and initialization
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getAnalytics, isSupported } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvxEHXO_sat6tnBSsMHqM3a2KVW01VklU",
  authDomain: "venkateshaluminiumcalc.firebaseapp.com",
  projectId: "venkateshaluminiumcalc",
  storageBucket: "venkateshaluminiumcalc.firebasestorage.app",
  messagingSenderId: "383864958193",
  appId: "1:383864958193:web:9ea57f9d944cd537f20d50",
  measurementId: "G-LLHR3CH0WE"
}

console.log('🔥 Firebase initializing...')

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Test Firebase connection
console.log('🔥 Firebase app initialized successfully')

// Initialize services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)

console.log('✅ Firebase services ready')

// Initialize Analytics (only in browser environment)
let analytics = null
if (typeof window !== 'undefined') {
  isSupported().then(yes => {
    if (yes) {
      analytics = getAnalytics(app)
      console.log('📊 Firebase Analytics initialized')
    }
  }).catch(err => {
    console.log('Analytics not supported:', err)
  })
}

export { analytics }

console.log('✅ Firebase services initialized successfully')

export default app