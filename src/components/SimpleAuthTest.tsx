import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'

export const SimpleAuthTest: React.FC = () => {
  const [email, setEmail] = useState('test@example.com')
  const [password, setPassword] = useState('password123')
  const [result, setResult] = useState('')

  const testSignUp = async () => {
    try {
      setResult('Testing signup...')
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      setResult(`✅ SUCCESS: User created - ${userCredential.user.email}\n\nFirebase Authentication is working correctly!`)
    } catch (error: any) {
      if (error.code === 'auth/operation-not-allowed') {
        setResult(`❌ EMAIL/PASSWORD NOT ENABLED\n\nError: ${error.code}\n\nSOLUTION:\n1. Go to Firebase Console\n2. Authentication → Sign-in method\n3. Enable Email/Password provider\n4. Save settings and wait 2-3 minutes`)
      } else if (error.code === 'auth/weak-password') {
        setResult(`⚠️ WEAK PASSWORD: ${error.message}\n\nTry a stronger password (6+ characters)`)
      } else if (error.code === 'auth/email-already-in-use') {
        setResult(`✅ EMAIL EXISTS: ${error.message}\n\nFirebase Auth is working! Try signing in instead.`)
      } else {
        setResult(`❌ ERROR: ${error.code}\n${error.message}`)
      }
      console.error('Signup error:', error)
    }
  }

  const testSignIn = async () => {
    try {
      setResult('Testing signin...')
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setResult(`✅ SUCCESS: User signed in - ${userCredential.user.email}\n\nFirebase Authentication is working correctly!`)
    } catch (error: any) {
      if (error.code === 'auth/operation-not-allowed') {
        setResult(`❌ EMAIL/PASSWORD NOT ENABLED\n\nError: ${error.code}\n\nSOLUTION:\n1. Go to Firebase Console\n2. Authentication → Sign-in method\n3. Enable Email/Password provider\n4. Save settings and wait 2-3 minutes`)
      } else if (error.code === 'auth/user-not-found') {
        setResult(`⚠️ USER NOT FOUND: ${error.message}\n\nTry creating an account first with 'Test Sign Up'`)
      } else if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setResult(`⚠️ INVALID CREDENTIALS: ${error.message}\n\nCheck email/password or create account first`)
      } else {
        setResult(`❌ ERROR: ${error.code}\n${error.message}`)
      }
      console.error('Signin error:', error)
    }
  }

  return (
    <div className="card mt-3 border-info">
      <div className="card-header bg-info text-white">
        <h5 className="mb-0">🧪 Firebase Auth Test</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Test Email:</label>
              <input 
                type="email" 
                className="form-control" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Test Password:</label>
              <input 
                type="password" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" onClick={testSignUp}>
                Test Sign Up
              </button>
              <button className="btn btn-secondary" onClick={testSignIn}>
                Test Sign In
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <h6>Test Result:</h6>
            <div className="p-3 bg-light border rounded">
              <pre className="mb-0 small">{result || 'Click a button to test...'}</pre>
            </div>
            <small className="text-muted mt-2 d-block">
              This will show the exact Firebase error if authentication is not configured properly.
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}