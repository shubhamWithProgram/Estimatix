// Quote Sharing & Collaboration Service
import { useState, useEffect } from 'react'
import { doc, setDoc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'

export interface SharedQuote {
  id: string
  quotationId: string
  creatorId: string
  creatorEmail: string
  shareToken: string
  isPublic: boolean
  readOnly: boolean
  allowedUsers?: string[] // Email addresses
  createdAt: number
  expiresAt?: number
  quotationData: any
  collaborators?: {
    userId: string
    email: string
    joinedAt: number
    lastActive: number
  }[]
}

export interface QuotationCollaboration {
  quotationId: string
  activeUsers: {
    userId: string
    email: string
    cursor?: { x: number, y: number }
    lastSeen: number
  }[]
  changes: {
    id: string
    userId: string
    timestamp: number
    type: 'add' | 'edit' | 'delete'
    field: string
    oldValue: any
    newValue: any
  }[]
}

class QuoteShareService {
  // Generate a shareable link for a quotation
  async createShareLink(quotationId: string, options: {
    readOnly?: boolean
    expiresInDays?: number
    allowedUsers?: string[]
    isPublic?: boolean
  } = {}): Promise<string> {
    try {
      const shareToken = this.generateShareToken()
      const expiresAt = options.expiresInDays 
        ? Date.now() + (options.expiresInDays * 24 * 60 * 60 * 1000)
        : undefined

      const sharedQuote: Partial<SharedQuote> = {
        quotationId,
        shareToken,
        isPublic: options.isPublic ?? false,
        readOnly: options.readOnly ?? true,
        allowedUsers: options.allowedUsers,
        createdAt: Date.now(),
        expiresAt
      }

      await setDoc(doc(db, 'sharedQuotes', shareToken), sharedQuote)

      // Generate the shareable URL
      const baseUrl = window.location.origin
      const basePath = import.meta.env.DEV ? '' : '/estimatix'
      return `${baseUrl}${basePath}#/shared/${shareToken}`
    } catch (error) {
      console.error('Error creating share link:', error)
      throw new Error('Failed to create share link')
    }
  }

  // Get shared quotation data
  async getSharedQuote(shareToken: string): Promise<SharedQuote | null> {
    try {
      const docRef = doc(db, 'sharedQuotes', shareToken)
      const docSnap = await getDoc(docRef)
      
      if (!docSnap.exists()) {
        return null
      }

      const sharedQuote = docSnap.data() as SharedQuote
      
      // Check if link has expired
      if (sharedQuote.expiresAt && Date.now() > sharedQuote.expiresAt) {
        return null
      }

      return { ...sharedQuote, id: docSnap.id }
    } catch (error) {
      console.error('Error getting shared quote:', error)
      return null
    }
  }

  // Real-time collaboration - join quotation editing
  async joinCollaboration(quotationId: string, userId: string, userEmail: string): Promise<() => void> {
    try {
      const collabRef = doc(db, 'collaborations', quotationId)
      
      // Add user to active collaborators
      const now = Date.now()
      const userUpdate = {
        [`activeUsers.${userId}`]: {
          userId,
          email: userEmail,
          lastSeen: now
        }
      }

      await updateDoc(collabRef, userUpdate)

      // Set up real-time listener
      const unsubscribe = onSnapshot(collabRef, (doc) => {
        if (doc.exists()) {
          const collaboration = doc.data() as QuotationCollaboration
          this.handleCollaborationUpdate(collaboration)
        }
      })

      // Cleanup function
      return () => {
        unsubscribe()
        this.leaveCollaboration(quotationId, userId)
      }
    } catch (error) {
      console.error('Error joining collaboration:', error)
      throw error
    }
  }

  // Leave collaboration
  async leaveCollaboration(quotationId: string, userId: string): Promise<void> {
    try {
      const collabRef = doc(db, 'collaborations', quotationId)
      const userUpdate = {
        [`activeUsers.${userId}`]: null // Remove user
      }
      await updateDoc(collabRef, userUpdate)
    } catch (error) {
      console.error('Error leaving collaboration:', error)
    }
  }

  // Track changes for collaboration
  async trackChange(quotationId: string, change: {
    userId: string
    type: 'add' | 'edit' | 'delete'
    field: string
    oldValue: any
    newValue: any
  }): Promise<void> {
    try {
      const collabRef = doc(db, 'collaborations', quotationId)
      const changeRecord = {
        ...change,
        id: this.generateChangeId(),
        timestamp: Date.now()
      }

      await updateDoc(collabRef, {
        [`changes.${changeRecord.id}`]: changeRecord
      })
    } catch (error) {
      console.error('Error tracking change:', error)
    }
  }

  // Update user cursor position (for live collaboration)
  async updateCursor(quotationId: string, userId: string, cursor: { x: number, y: number }): Promise<void> {
    try {
      const collabRef = doc(db, 'collaborations', quotationId)
      await updateDoc(collabRef, {
        [`activeUsers.${userId}.cursor`]: cursor,
        [`activeUsers.${userId}.lastSeen`]: Date.now()
      })
    } catch (error) {
      console.error('Error updating cursor:', error)
    }
  }

  // Copy share link to clipboard
  async copyShareLink(shareLink: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(shareLink)
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = shareLink
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  }

  // Private helper methods
  private generateShareToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
  }

  private generateChangeId(): string {
    return Math.random().toString(36).substring(2)
  }

  private handleCollaborationUpdate(collaboration: QuotationCollaboration): void {
    // Emit events for collaboration updates
    window.dispatchEvent(new CustomEvent('collaborationUpdate', {
      detail: collaboration
    }))
  }
}

// Export singleton instance
export const quoteShareService = new QuoteShareService()

// React hook for collaboration
export function useCollaboration(quotationId: string, userId: string, userEmail: string) {
  const [activeUsers, setActiveUsers] = useState<any[]>([])
  const [changes, setChanges] = useState<any[]>([])

  useEffect(() => {
    if (!quotationId || !userId) return

    let cleanup: (() => void) | undefined

    const joinCollab = async () => {
      try {
        cleanup = await quoteShareService.joinCollaboration(quotationId, userId, userEmail)
      } catch (error) {
        console.error('Failed to join collaboration:', error)
      }
    }

    joinCollab()

    // Listen for collaboration updates
    const handleUpdate = (event: CustomEvent) => {
      const collaboration = event.detail as QuotationCollaboration
      setActiveUsers(Object.values(collaboration.activeUsers || {}))
      setChanges(Object.values(collaboration.changes || {}))
    }

    window.addEventListener('collaborationUpdate', handleUpdate as EventListener)

    return () => {
      cleanup?.()
      window.removeEventListener('collaborationUpdate', handleUpdate as EventListener)
    }
  }, [quotationId, userId, userEmail])

  return {
    activeUsers,
    changes,
    trackChange: (change: any) => quoteShareService.trackChange(quotationId, change),
    updateCursor: (cursor: { x: number, y: number }) => quoteShareService.updateCursor(quotationId, userId, cursor)
  }
}