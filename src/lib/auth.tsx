// Professional Authentication Context with Firebase
import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
  type User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

// User profile interface
export interface UserProfile {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
  subscription?: {
    plan: string
    status: 'active' | 'canceled' | 'past_due'
    currentPeriodEnd?: number
  }
  createdAt: number
  updatedAt: number
}

// Auth context type
interface AuthContextType {
  user: User | null
  userProfile: UserProfile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName?: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Listen to auth state changes
  useEffect(() => {
    let unsubscribe: () => void
    
    try {
      unsubscribe = onAuthStateChanged(auth, async (user) => {
        setUser(user)
        
        if (user) {
          try {
            // Fetch user profile from Firestore
            const profileDoc = await getDoc(doc(db, 'users', user.uid))
            if (profileDoc.exists()) {
              setUserProfile(profileDoc.data() as UserProfile)
            } else {
              // Create new user profile
              const newProfile: UserProfile = {
                uid: user.uid,
                email: user.email!,
                displayName: user.displayName || undefined,
                photoURL: user.photoURL || undefined,
                createdAt: Date.now(),
                updatedAt: Date.now()
              }
              await setDoc(doc(db, 'users', user.uid), newProfile)
              setUserProfile(newProfile)
            }
          } catch (error) {
            console.warn('Firestore not configured properly:', error)
            // Create a basic profile without Firestore
            setUserProfile({
              uid: user.uid,
              email: user.email!,
              displayName: user.displayName || undefined,
              photoURL: user.photoURL || undefined,
              createdAt: Date.now(),
              updatedAt: Date.now()
            })
          }
        } else {
          setUserProfile(null)
        }
        
        setLoading(false)
      })
    } catch (error) {
      console.warn('Firebase Auth not configured properly:', error)
      // Set loading to false even if auth fails to initialize
      setLoading(false)
    }

    // Set a timeout to ensure loading doesn't hang forever
    const timeoutId = setTimeout(() => {
      console.warn('Auth initialization timeout - setting loading to false')
      setLoading(false)
    }, 5000) // 5 second timeout

    return () => {
      if (unsubscribe) unsubscribe()
      clearTimeout(timeoutId)
    }
  }, [])

  // Sign in with email/password
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log('✅ User signed in successfully')
    } catch (error: any) {
      console.error('❌ Sign in failed:', error.code)
      throw error
    }
  }

  // Sign up with email/password
  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      
      // Update display name if provided
      if (displayName && user) {
        await updateProfile(user, { displayName })
      }
    } catch (error) {
      console.error('Sign up error:', error)
      throw error
    }
  }

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Google sign in error:', error)
      throw error
    }
  }

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Sign out error:', error)
      throw error
    }
  }

  // Update user profile
  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !userProfile) throw new Error('No user logged in')
    
    const updatedProfile: UserProfile = {
      ...userProfile,
      ...updates,
      updatedAt: Date.now()
    }
    
    await setDoc(doc(db, 'users', user.uid), updatedProfile)
    setUserProfile(updatedProfile)
  }

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}


