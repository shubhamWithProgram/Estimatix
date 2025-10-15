// Quotations Service - Firebase Integration
import { db } from './firebase'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  serverTimestamp 
} from 'firebase/firestore'

export interface QuotationItem {
  id: string
  name: string
  type: 'window' | 'door'
  width: number
  height: number
  quantity: number
  glassType: string
  frameType: string
  accessories: string[]
  notes: string
  areaInSqFt: number
  areaInM2: number
  rate: number
  itemTotal: number
}

export interface SavedQuotation {
  id?: string // Firestore document ID
  quotationId: string // Human-readable ID like VEN2025-003
  userId: string
  customerName: string
  customerPhone: string
  customerEmail: string
  customerAddress?: string
  items: QuotationItem[]
  totalGlassArea: number
  totalFrameWeight: number
  subtotal: number
  laborCharges: number
  gst: number
  grandTotal: number
  status: 'draft' | 'sent' | 'approved' | 'rejected' | 'completed'
  notes?: string
  createdAt: Date | Timestamp
  updatedAt: Date | Timestamp
  pdfUrl?: string
  shareLink?: string
}

export interface QuotationStats {
  totalQuotations: number
  totalValue: number
  pendingQuotations: number
  approvedQuotations: number
  thisMonthQuotations: number
  thisMonthValue: number
}

class QuotationsService {
  private quotationsCollection = 'quotations'

  // Save a new quotation
  async saveQuotation(quotation: Omit<SavedQuotation, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const quotationData = {
        ...quotation,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }

      const docRef = await addDoc(collection(db, this.quotationsCollection), quotationData)
      console.log('Quotation saved with ID:', docRef.id)
      return docRef.id
    } catch (error) {
      console.error('Error saving quotation:', error)
      throw new Error('Failed to save quotation')
    }
  }

  // Update an existing quotation
  async updateQuotation(id: string, updates: Partial<SavedQuotation>): Promise<void> {
    try {
      const quotationRef = doc(db, this.quotationsCollection, id)
      await updateDoc(quotationRef, {
        ...updates,
        updatedAt: serverTimestamp()
      })
      console.log('Quotation updated:', id)
    } catch (error) {
      console.error('Error updating quotation:', error)
      throw new Error('Failed to update quotation')
    }
  }

  // Delete a quotation
  async deleteQuotation(id: string): Promise<void> {
    try {
      const quotationRef = doc(db, this.quotationsCollection, id)
      await deleteDoc(quotationRef)
      console.log('Quotation deleted:', id)
    } catch (error) {
      console.error('Error deleting quotation:', error)
      throw new Error('Failed to delete quotation')
    }
  }

  // Get a single quotation by ID
  async getQuotation(id: string): Promise<SavedQuotation | null> {
    try {
      const quotationRef = doc(db, this.quotationsCollection, id)
      const quotationSnap = await getDoc(quotationRef)

      if (quotationSnap.exists()) {
        return {
          id: quotationSnap.id,
          ...quotationSnap.data()
        } as SavedQuotation
      }

      return null
    } catch (error) {
      console.error('Error getting quotation:', error)
      throw new Error('Failed to get quotation')
    }
  }

  // Get all quotations for a user
  async getUserQuotations(userId: string, limitCount: number = 50): Promise<SavedQuotation[]> {
    try {
      const q = query(
        collection(db, this.quotationsCollection),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )

      const querySnapshot = await getDocs(q)
      const quotations: SavedQuotation[] = []

      querySnapshot.forEach((doc) => {
        quotations.push({
          id: doc.id,
          ...doc.data()
        } as SavedQuotation)
      })

      return quotations
    } catch (error) {
      console.error('Error getting user quotations:', error)
      throw new Error('Failed to get quotations')
    }
  }

  // Get quotations by status
  async getQuotationsByStatus(userId: string, status: SavedQuotation['status']): Promise<SavedQuotation[]> {
    try {
      const q = query(
        collection(db, this.quotationsCollection),
        where('userId', '==', userId),
        where('status', '==', status),
        orderBy('createdAt', 'desc')
      )

      const querySnapshot = await getDocs(q)
      const quotations: SavedQuotation[] = []

      querySnapshot.forEach((doc) => {
        quotations.push({
          id: doc.id,
          ...doc.data()
        } as SavedQuotation)
      })

      return quotations
    } catch (error) {
      console.error('Error getting quotations by status:', error)
      throw new Error('Failed to get quotations by status')
    }
  }

  // Search quotations by customer name or quotation ID
  async searchQuotations(userId: string, searchTerm: string): Promise<SavedQuotation[]> {
    try {
      // Get all user quotations and filter client-side
      // Note: Firestore doesn't support full-text search, so we do it client-side
      const allQuotations = await this.getUserQuotations(userId, 100)
      
      const searchLower = searchTerm.toLowerCase()
      return allQuotations.filter(q => 
        q.customerName.toLowerCase().includes(searchLower) ||
        q.quotationId.toLowerCase().includes(searchLower) ||
        q.customerPhone.includes(searchTerm) ||
        q.customerEmail.toLowerCase().includes(searchLower)
      )
    } catch (error) {
      console.error('Error searching quotations:', error)
      throw new Error('Failed to search quotations')
    }
  }

  // Get quotation statistics for dashboard
  async getQuotationStats(userId: string): Promise<QuotationStats> {
    try {
      const quotations = await this.getUserQuotations(userId, 1000)
      
      const now = new Date()
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

      const stats: QuotationStats = {
        totalQuotations: quotations.length,
        totalValue: 0,
        pendingQuotations: 0,
        approvedQuotations: 0,
        thisMonthQuotations: 0,
        thisMonthValue: 0
      }

      quotations.forEach(q => {
        stats.totalValue += q.grandTotal

        if (q.status === 'sent' || q.status === 'draft') {
          stats.pendingQuotations++
        }

        if (q.status === 'approved' || q.status === 'completed') {
          stats.approvedQuotations++
        }

        // Check if quotation is from this month
        const createdAt = q.createdAt instanceof Timestamp 
          ? q.createdAt.toDate() 
          : new Date(q.createdAt)
        
        if (createdAt >= firstDayOfMonth) {
          stats.thisMonthQuotations++
          stats.thisMonthValue += q.grandTotal
        }
      })

      return stats
    } catch (error) {
      console.error('Error getting quotation stats:', error)
      // Return empty stats instead of throwing
      return {
        totalQuotations: 0,
        totalValue: 0,
        pendingQuotations: 0,
        approvedQuotations: 0,
        thisMonthQuotations: 0,
        thisMonthValue: 0
      }
    }
  }

  // Get recent quotations (for activity feed)
  async getRecentQuotations(userId: string, limitCount: number = 10): Promise<SavedQuotation[]> {
    try {
      const q = query(
        collection(db, this.quotationsCollection),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )

      const querySnapshot = await getDocs(q)
      const quotations: SavedQuotation[] = []

      querySnapshot.forEach((doc) => {
        quotations.push({
          id: doc.id,
          ...doc.data()
        } as SavedQuotation)
      })

      return quotations
    } catch (error) {
      console.error('Error getting recent quotations:', error)
      return []
    }
  }

  // Generate next quotation ID
  async generateQuotationId(userId: string): Promise<string> {
    try {
      // Get invoice settings from localStorage
      const invoiceSettings = JSON.parse(
        localStorage.getItem('admin_invoice_settings') || 
        '{"prefix":"VEN","currentYear":2025,"currentSequence":1}'
      )

      // Get all quotations for current year
      const allQuotations = await this.getUserQuotations(userId, 1000)
      const currentYear = new Date().getFullYear()
      
      // Filter quotations from current year
      const thisYearQuotations = allQuotations.filter(q => {
        const createdAt = q.createdAt instanceof Timestamp 
          ? q.createdAt.toDate() 
          : new Date(q.createdAt)
        return createdAt.getFullYear() === currentYear
      })

      // Get highest sequence number
      let maxSequence = 0
      thisYearQuotations.forEach(q => {
        const match = q.quotationId.match(/(\d+)$/)
        if (match) {
          const seq = parseInt(match[1])
          if (seq > maxSequence) {
            maxSequence = seq
          }
        }
      })

      const nextSequence = maxSequence + 1
      const quotationId = `${invoiceSettings.prefix}${currentYear}-${nextSequence.toString().padStart(3, '0')}`

      // Update localStorage with new sequence
      invoiceSettings.currentSequence = nextSequence
      invoiceSettings.currentYear = currentYear
      localStorage.setItem('admin_invoice_settings', JSON.stringify(invoiceSettings))

      return quotationId
    } catch (error) {
      console.error('Error generating quotation ID:', error)
      // Fallback to timestamp-based ID
      return `QUOT-${Date.now()}`
    }
  }
}

export const quotationsService = new QuotationsService()
