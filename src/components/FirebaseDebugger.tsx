import React, { useEffect, useState } from 'react'
import { auth, db } from '../lib/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'

export const FirebaseDebugger: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<string>('Checking...')
  const [firestoreStatus, setFirestoreStatus] = useState<string>('Checking...')
  const [configStatus, setConfigStatus] = useState<any>({})
  const [testError, setTestError] = useState<string>('')

  useEffect(() => {
    // Test Firebase Configuration
    console.log('🔥 Firebase Config Check:', {
      hasAuth: !!auth,
      hasDb: !!db,
      authConfig: {
        apiKey: auth.config.apiKey ? 'Present ✅' : 'Missing ❌',
        authDomain: auth.config.authDomain || 'Missing ❌',
        projectId: auth.app.options.projectId || 'Missing ❌'
      }
    })

    // Check Firebase Auth
    const unsubscribe = onAuthStateChanged(
      auth, 
      (user) => {
        if (user) {
          setAuthStatus(`✅ Auth Working - User: ${user.email}`)
        } else {
          setAuthStatus('✅ Auth Working - No user signed in')
        }
      }, 
      (error: any) => {
        console.error('🚨 Auth State Error:', error)
        setAuthStatus(`❌ Auth Error: ${error.code || 'Unknown'} - ${error.message}`)
      }
    )

    // Check Firestore
    const testFirestore = async () => {
      try {
        console.log('🔍 Testing Firestore connection...')
        const testCollection = collection(db, 'test')
        await getDocs(testCollection)
        setFirestoreStatus('✅ Firestore Connected')
        console.log('✅ Firestore test successful')
      } catch (error: any) {
        console.error('🚨 Firestore Error:', error)
        setFirestoreStatus(`❌ Firestore Error: ${error.code} - ${error.message}`)
      }
    }

    // Test Auth Sign In (with dummy credentials to trigger any config errors)
    const testAuth = async () => {
      try {
        console.log('🔍 Testing Firebase Auth configuration...')
        // This will fail but should give us the real error
        await signInWithEmailAndPassword(auth, 'test@test.com', 'wrongpassword')
      } catch (error: any) {
        console.log('🔍 Auth test error (expected):', error.code, error.message)
        if (error.code === 'auth/configuration-not-found') {
          setTestError('❌ FIREBASE AUTH NOT CONFIGURED - You need to enable Authentication in Firebase Console')
        } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
          setTestError('✅ Firebase Auth is configured correctly (test credentials failed as expected)')
        } else {
          setTestError(`🚨 Unexpected error: ${error.code} - ${error.message}`)
        }
      }
    }

    // Set Config Status
    setConfigStatus({
      apiKey: auth.config.apiKey ? '✅ Present' : '❌ Missing',
      authDomain: auth.config.authDomain || '❌ Missing',
      projectId: auth.app.options.projectId || '❌ Missing'
    })

    testFirestore()
    testAuth()

    return () => unsubscribe()
  }, [])

  return (
    <div className="card mt-3 border-warning">
      <div className="card-header bg-warning">
        <h5 className="mb-0">🔧 Firebase Debug Status</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h6>🔐 Authentication Status</h6>
            <p className="small mb-2">{authStatus}</p>
            
            <h6>📊 Firestore Status</h6>
            <p className="small mb-2">{firestoreStatus}</p>
            
            <h6>🧪 Configuration Test</h6>
            <div className="small">
              <div className={testError.includes('❌') ? 'text-danger' : 'text-success'}>
                {testError || 'Testing...'}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>⚙️ Configuration Check</h6>
            <div className="small">
              <div>API Key: {configStatus.apiKey}</div>
              <div>Auth Domain: {configStatus.authDomain}</div>
              <div>Project ID: {configStatus.projectId}</div>
            </div>
            
            <h6 className="mt-3">🔗 Quick Links</h6>
            <div className="small">
              <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary me-2">
                Firebase Console
              </a>
              <a href="https://console.firebase.google.com/project/venkateshaluminiumcalc/authentication/users" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success">
                Auth Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}