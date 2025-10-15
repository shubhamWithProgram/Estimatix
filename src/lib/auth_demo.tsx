// Simplified Authentication Context - Demo Mode
import React, { createContext, useContext, useEffect, useState } from 'react'

// User interface for demo mode
export interface DemoUser {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
}

// Auth context interface
interface AuthContextType {
  user: DemoUser | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName?: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  updateUserProfile: (updates: Partial<DemoUser>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate checking for existing user session
    const savedUser = localStorage.getItem('demo-user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.warn('Failed to parse saved user:', error)
      }
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Simulate sign in - in real app this would validate credentials
      const demoUser: DemoUser = {
        uid: 'demo-' + Date.now(),
        email,
        displayName: email.split('@')[0]
      }
      setUser(demoUser)
      localStorage.setItem('demo-user', JSON.stringify(demoUser))
      console.log('✅ Demo sign in successful:', email)
    } catch (error) {
      console.error('Demo sign in error:', error)
      throw new Error('Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, displayName?: string) => {
    setLoading(true)
    try {
      // Simulate sign up
      const demoUser: DemoUser = {
        uid: 'demo-' + Date.now(),
        email,
        displayName: displayName || email.split('@')[0]
      }
      setUser(demoUser)
      localStorage.setItem('demo-user', JSON.stringify(demoUser))
      console.log('✅ Demo sign up successful:', email)
    } catch (error) {
      console.error('Demo sign up error:', error)
      throw new Error('Sign up failed')
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setLoading(true)
    try {
      // Simulate Google sign in
      const demoUser: DemoUser = {
        uid: 'demo-google-' + Date.now(),
        email: 'demo@google.com',
        displayName: 'Demo Google User',
        photoURL: 'https://via.placeholder.com/150'
      }
      setUser(demoUser)
      localStorage.setItem('demo-user', JSON.stringify(demoUser))
      console.log('✅ Demo Google sign in successful')
    } catch (error) {
      console.error('Demo Google sign in error:', error)
      throw new Error('Google sign in failed')
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      setUser(null)
      localStorage.removeItem('demo-user')
      console.log('✅ Demo logout successful')
    } catch (error) {
      console.error('Demo logout error:', error)
      throw new Error('Logout failed')
    } finally {
      setLoading(false)
    }
  }

  const updateUserProfile = async (updates: Partial<DemoUser>) => {
    if (!user) throw new Error('No user signed in')
    
    try {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem('demo-user', JSON.stringify(updatedUser))
      console.log('✅ Demo profile update successful')
    } catch (error) {
      console.error('Demo profile update error:', error)
      throw new Error('Profile update failed')
    }
  }

  const value: AuthContextType = {
    user,
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

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Export for compatibility
export { AuthProvider as default }