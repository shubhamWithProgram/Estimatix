// Enhanced PDF Generation Service with QR Code Support
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import QRCode from 'qrcode'

// Extend jsPDF type to include autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: typeof autoTable
  }
}

export interface PDFOptions {
  watermark?: {
    text: string
    opacity: number
    color: string
  }
  digitalSignature?: {
    signerName: string
    signerTitle: string
    signatureImage?: string // Base64 image
    date?: Date
  }
  branding?: {
    logo?: string // Base64 image
    companyName: string
    address: string
    phone: string
    email: string
  }
  qrCode?: {
    url: string
    label?: string
  }
  confidential?: boolean
  draft?: boolean
}

export interface QuotationData {
  invoiceNumber: string
  date: Date
  customerName: string
  customerPhone: string
  customerEmail: string
  customerAddress?: string
  items: Array<{
    name: string
    type: 'window' | 'door'
    width: number
    height: number
    area: number
    rate: number
    total: number
  }>
  subtotal: number
  tax: number
  grandTotal: number
  notes?: string
  termsAndConditions?: string
}

class EnhancedPDFService {
  private doc: jsPDF | null = null

  // ===== TYPOGRAPHY HELPER =====
  private setFont(size: number, style: 'normal' | 'bold' = 'normal'): void {
    if (!this.doc) return
    this.doc.setFont('helvetica', style)
    this.doc.setFontSize(size)
  }

  async generateQuotationPDF(data: QuotationData, options: PDFOptions = {}): Promise<Blob> {
    this.doc = new jsPDF()
    
    try {
      // Set document properties
      this.doc.setProperties({
        title: `Quotation ${data.invoiceNumber}`,
        subject: 'Professional Quotation',
        author: options.branding?.companyName || 'Estimatix',
        creator: 'Estimatix - Professional Estimation Platform'
      })

      // ===== ADD WATERMARK TO PAGE 1 FIRST (BACKGROUND LAYER) =====
      await this.addWatermark(options)

      // ===== DYNAMIC Y-POSITION FLOW =====
      let cursorY = 45 // Start after header

      // Add header with branding
      cursorY = this.addHeader(data, options, cursorY)

      // Add customer details
      cursorY = this.addCustomerDetails(data, cursorY)

      // Add items table
      cursorY = this.addItemsTable(data, cursorY + 10)

      // ===== CHECK FOR PAGE BREAK BEFORE SUMMARY =====
      const pageHeight = this.doc.internal.pageSize.getHeight()
      const summaryHeight = 80 // Estimated height for summary section
      const footerHeight = 30
      const requiredSpace = summaryHeight + footerHeight
      
      // If not enough space, add new page
      if (cursorY + requiredSpace > pageHeight - 10) {
        this.doc.addPage()
        await this.addWatermark(options) // Add watermark to page 2 FIRST
        cursorY = 20 // Reset Y position for new page
      }

      // Add totals
      cursorY = this.addTotals(data, cursorY + 15)

      // Add notes and terms
      cursorY = this.addNotesAndTerms(data, cursorY + 10)

      // Add QR code if specified
      if (options.qrCode) {
        await this.addQRCode(options.qrCode)
      }

      // Add digital signature if specified
      if (options.digitalSignature) {
        this.addDigitalSignature(options.digitalSignature)
      }

      // Add footer to all pages
      const totalPages = this.doc.getNumberOfPages()
      for (let i = 1; i <= totalPages; i++) {
        this.doc.setPage(i)
        this.addFooter(options, i, totalPages)
      }

      // Return PDF as blob
      return this.doc.output('blob')
    } catch (error) {
      console.error('Error generating PDF:', error)
      throw new Error('Failed to generate PDF')
    }
  }

  private async addWatermark(options: PDFOptions): Promise<void> {
    if (!this.doc) return

    const pageWidth = this.doc.internal.pageSize.getWidth()
    const pageHeight = this.doc.internal.pageSize.getHeight()

    // Default watermark configuration (Estimatix branding)
    let watermarkText = 'ESTIMATIX'
    let opacity = 0.10 // More subtle - 10-12%
    let color = '#6C63FF' // Brand purple
    let showLogo = true

    // Override with custom watermark settings
    if (options.watermark) {
      watermarkText = options.watermark.text || watermarkText
      opacity = options.watermark.opacity ?? opacity
      color = options.watermark.color || color
    } else if (options.confidential) {
      watermarkText = 'CONFIDENTIAL'
      opacity = 0.15
      color = '#FF6B6B'
      showLogo = false
    } else if (options.draft) {
      watermarkText = 'DRAFT'
      opacity = 0.15
      color = '#4ECDC4'
      showLogo = false
    }
    
    // Save graphics state for opacity handling
    this.doc.saveGraphicsState()
    
    // Create transparency (opacity) - CRITICAL for background effect
    if ((this.doc as any).setGState) {
      const gState = new (this.doc as any).GState({ opacity })
      this.doc.setGState(gState)
    }

    // Center of page
    const centerX = pageWidth / 2
    const centerY = pageHeight / 2

    // === ADD LOGO.SVG AS WATERMARK (Large & Prominent) ===
    if (showLogo && !options.draft && !options.confidential) {
      try {
        // Load logo.svg from public folder
        const response = await fetch('/logo.svg')
        const svgText = await response.text()
        
        // Convert SVG to canvas, then to data URL
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const DOMURL = window.URL || window.webkitURL || window
        
        const img = new Image()
        const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
        const url = DOMURL.createObjectURL(svgBlob)
        
        await new Promise<void>((resolve, reject) => {
          img.onload = () => {
            try {
              // Set canvas size for high quality
              canvas.width = 400
              canvas.height = 400
              ctx?.drawImage(img, 0, 0, 400, 400)
              
              // Convert canvas to PNG data URL
              const pngDataUrl = canvas.toDataURL('image/png')
              
              // Add logo to PDF (scaled to 80%, bottom-right positioned)
              const logoSize = 88 // Reduced from 110 to 88 (80%)
              const logoX = pageWidth - logoSize - 40 // Bottom-right area
              const logoY = pageHeight - logoSize - 40
              
              this.doc!.addImage(
                pngDataUrl,
                'PNG',
                logoX,
                logoY,
                logoSize,
                logoSize
              )
              
              DOMURL.revokeObjectURL(url)
              resolve()
            } catch (error) {
              console.warn('Failed to convert logo:', error)
              DOMURL.revokeObjectURL(url)
              reject(error)
            }
          }
          img.onerror = () => {
            DOMURL.revokeObjectURL(url)
            reject(new Error('Failed to load logo.svg'))
          }
          img.src = url
        })
      } catch (error) {
        console.warn('Logo watermark failed, using fallback:', error)
        // Fallback: Simple circle with E
        this.doc.setDrawColor(color)
        this.doc.setFillColor(color)
        this.doc.setLineWidth(4)
        this.doc.circle(centerX, centerY - 15, 40, 'S')
        
        this.doc.setFont('helvetica', 'bold')
        this.doc.setFontSize(50)
        this.doc.setTextColor(color)
        this.doc.text('E', centerX, centerY - 5, { align: 'center' })
      }
    }

    // === ADD "ESTIMATIX" TEXT DIAGONALLY (SUBTLE ROTATION) ===
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(50) // Slightly smaller
    this.doc.setTextColor(color)
    
    if (options.draft) {
      // Show "DRAFT" for draft documents
      this.doc.text(
        'DRAFT',
        centerX,
        centerY,
        {
          align: 'center',
          angle: -15 // Subtle rotation instead of harsh -45°
        }
      )
    } else if (options.confidential) {
      // Show "CONFIDENTIAL" for confidential documents
      this.doc.text(
        'CONFIDENTIAL',
        centerX,
        centerY,
        {
          align: 'center',
          angle: -15 // Subtle rotation
        }
      )
    } else {
      // Show "ESTIMATIX" diagonally across the page
      this.doc.text(
        'ESTIMATIX',
        centerX,
        centerY + 80,
        {
          align: 'center',
          angle: -45 // Diagonal cross pattern
        }
      )
    }
    
    // Restore graphics state
    this.doc.restoreGraphicsState()
  }

  private addHeader(data: QuotationData, options: PDFOptions, startY: number): number {
    if (!this.doc) return startY

    const pageWidth = this.doc.internal.pageSize.getWidth()
    const headerHeight = 40
    const margin = 15

    // ===== SMOOTH HEADER BACKGROUND WITH ROUNDED BOTTOM =====
    this.doc.setFillColor(108, 99, 255)
    this.doc.rect(0, 0, pageWidth, headerHeight - 2, 'F')
    
    // Smooth bottom edge transition
    this.doc.setFillColor(245, 245, 255)
    this.doc.rect(0, headerHeight - 2, pageWidth, 2, 'F')

    // ===== COMPANY NAME & TAGLINE =====
    this.doc.setTextColor(255, 255, 255)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(16)
    this.doc.text(options.branding?.companyName || 'Venkatesh Aluminium & Glass', margin, 14)

    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(9)
    this.doc.text('Professional Estimation & Quotation Platform', margin, 20)

    // ===== CONTACT INFO =====
    this.doc.setFontSize(8.8)
    this.doc.setTextColor(240, 240, 240)
    const phone = options.branding?.phone || '8888889999'
    const email = options.branding?.email || 'info@example.com'
    this.doc.text(`Phone: ${phone}  |  Email: ${email}`, margin, 26)

    // ===== QUOTATION BOX (Top-Right) =====
    const boxWidth = 60
    const boxHeight = 26
    const boxX = pageWidth - boxWidth - margin
    const boxY = 6

    this.doc.setFillColor(255, 255, 255)
    this.doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 3, 3, 'F')

    // Quotation label
    this.doc.setFillColor(108, 99, 255)
    this.doc.roundedRect(boxX + 4, boxY + 2, boxWidth - 8, 7, 2, 2, 'F')
    this.doc.setTextColor(255, 255, 255)
    this.doc.setFontSize(8.5)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text('QUOTATION', boxX + boxWidth / 2, boxY + 7, { align: 'center' })

    // Quotation number & date
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(10)
    this.doc.setTextColor(33, 37, 41)
    this.doc.text(`#${data.invoiceNumber}`, boxX + boxWidth / 2, boxY + 14, { align: 'center' })

    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(8)
    this.doc.setTextColor(107, 114, 128)
    this.doc.text(`Date: ${data.date.toLocaleDateString('en-IN')}`, boxX + boxWidth / 2, boxY + 19, { align: 'center' })

    // Valid until
    const validityDate = new Date(data.date)
    validityDate.setDate(validityDate.getDate() + 30)
    this.doc.setFillColor(237, 233, 254)
    this.doc.roundedRect(boxX + 10, boxY + 21, boxWidth - 20, 4, 2, 2, 'F')
    this.doc.setTextColor(108, 99, 255)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(7)
    this.doc.text(`Valid Until: ${validityDate.toLocaleDateString('en-IN')}`, boxX + boxWidth / 2, boxY + 24, { align: 'center' })

    return headerHeight + 8
  }

  private addCustomerDetails(data: QuotationData, startY: number): number {
    if (!this.doc) return startY

    const pageWidth = this.doc.internal.pageSize.getWidth()
    const margin = 15
    let yPos = startY

    // ===== SECTION TITLE (CONSISTENT STYLE) =====
    this.doc.setFillColor(108, 99, 255)
    this.doc.roundedRect(margin, yPos, 3, 10, 1, 1, 'F')
    
    this.doc.setFontSize(11)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(31, 41, 55)
    this.doc.text('Customer Information', margin + 8, yPos + 7)
    
    yPos += 15

    // ===== CLEAN INFO BOX (INLINE STYLE) =====
    const boxY = yPos
    const boxHeight = 22
    
    // Light gray background for visual consistency
    this.doc.setFillColor(243, 244, 246) // Light gray (#F3F4F6)
    this.doc.setDrawColor(229, 231, 235)
    this.doc.setLineWidth(0.5)
    this.doc.roundedRect(margin, boxY, pageWidth - margin * 2, boxHeight, 4, 4, 'FD')
    
    // Left accent bar (subtle rounded corners like Item Details)
    this.doc.setFillColor(108, 99, 255)
    this.doc.roundedRect(margin, boxY, 3, boxHeight, 1, 1, 'F')

    // ===== INLINE LABELS & VALUES (PROFESSIONAL LAYOUT) =====
    const contentX = margin + 10
    const col2X = pageWidth / 2 + 5
    let lineY = boxY + 9

    // Row 1: Name and Email
    this.doc.setFontSize(8.5)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(100, 116, 139)
    this.doc.text('Name:', contentX, lineY)
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setTextColor(31, 41, 55)
    this.doc.text(data.customerName, contentX + 18, lineY)

    // Email (same row, right side)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(100, 116, 139)
    this.doc.text('Email:', col2X, lineY)
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setTextColor(31, 41, 55)
    this.doc.text(data.customerEmail, col2X + 18, lineY)

    // Row 2: Phone
    lineY += 7
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(100, 116, 139)
    this.doc.text('Phone:', contentX, lineY)
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setTextColor(31, 41, 55)
    this.doc.text(data.customerPhone, contentX + 18, lineY)

    return boxY + boxHeight + 12
  }

  private addItemsTable(data: QuotationData, startY: number): number {
    if (!this.doc) return startY

    let yPos = startY

    // ===== CLEAN SECTION TITLE =====
    this.doc.setFillColor(108, 99, 255)
    this.doc.roundedRect(15, yPos, 3, 10, 1, 1, 'F')
    
    this.doc.setFontSize(11)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(31, 41, 55)
    this.doc.text('Item Details', 22, yPos + 7)
    
    yPos += 14

    // ===== PREPARE TABLE DATA =====
    const tableColumn = [
      'Item',
      'Width',
      'Height',
      'Qty',
      'Glass',
      'Profile',
      'Weight (kg)',
      'Rate (Rs.)',
      'Total (Rs.)'
    ]

    const tableRows: any[][] = data.items.map((item, index) => [
      item.name || `Item ${index + 1}`,
      `${item.width}"`,
      `${item.height}"`,
      '1',
      'Clear',
      'Standard',
      (item.area * 2.5).toFixed(2),
      `Rs. ${item.rate.toFixed(2)}`,
      `Rs. ${item.total.toFixed(2)}`
    ])

    // ===== PERFECTLY FITTED TABLE - NO OVERFLOW =====
    autoTable(this.doc, {
      head: [tableColumn],
      body: tableRows,
      startY: yPos,
      theme: 'grid',
      styles: {
        font: 'helvetica',
        fontSize: 8.5, // Slightly smaller for perfect fit
        cellPadding: { top: 4, right: 3, bottom: 4, left: 3 },
        lineColor: [230, 230, 230],
        lineWidth: 0.25,
        textColor: [33, 37, 41],
        valign: 'middle',
        overflow: 'ellipsize' // Prevent line breaks
      },
      headStyles: {
        fillColor: [240, 240, 255],
        textColor: [76, 63, 255],
        fontStyle: 'bold',
        fontSize: 8.8,
        halign: 'center',
        lineWidth: 0.25,
        overflow: 'ellipsize',
        cellPadding: { top: 5, bottom: 5 }
      },
      alternateRowStyles: {
        fillColor: [250, 250, 250]
      },
      bodyStyles: {
        fillColor: [255, 255, 255]
      },
      // 🧩 Optimally narrowed columns for perfect page fit
      columnStyles: {
        0: { cellWidth: 23, halign: 'left' },   // Item
        1: { cellWidth: 16, halign: 'center' }, // Width
        2: { cellWidth: 16, halign: 'center' }, // Height
        3: { cellWidth: 12, halign: 'center' }, // Qty
        4: { cellWidth: 21, halign: 'center' }, // Glass
        5: { cellWidth: 21, halign: 'center' }, // Profile
        6: { cellWidth: 19, halign: 'right' },  // Weight
        7: { cellWidth: 26, halign: 'right' },  // Rate (increased for "Rs.")
        8: { cellWidth: 28, halign: 'right', fontStyle: 'bold', textColor: [76, 63, 255] } // Total (increased for "Rs.")
      },
      margin: { left: 15, right: 15 },
      tableWidth: 'wrap', // Forces table to fit within margins
      didDrawCell: (data: any) => {
        // Ensure header text stays vertically centered
        if (data.section === 'head') {
          data.cell.styles.valign = 'middle'
        }
      }
    })

    // Return Y position with proper spacing for next section
    const tableY = (this.doc as any).lastAutoTable.finalY
    return tableY + 10
  }

  private addTotals(data: QuotationData, startY: number): number {
    if (!this.doc) return startY

    const pageWidth = this.doc.internal.pageSize.getWidth()
    let yPos = startY

    // ===== SECTION TITLE =====
    this.doc.setFillColor(108, 99, 255)
    this.doc.roundedRect(15, yPos, 3, 10, 1, 1, 'F')
    
    this.doc.setFontSize(11)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(31, 41, 55)
    this.doc.text('Summary', 23, yPos + 7)
    
    yPos += 15

    // Material calculations
    const totalGlassArea = data.items.reduce((sum, item) => sum + item.area, 0)
    const totalProfileWeight = data.items.reduce((sum, item) => sum + (item.area * 2.5), 0)

    // ===== TWO-BOX LAYOUT (Balanced & Professional) =====
    const boxWidth = (pageWidth - 45) / 2
    const boxHeight = 56 // Increased for balance breakdown rows
    const leftX = 15
    const rightX = leftX + boxWidth + 15

    // === LEFT BOX: MATERIAL DETAILS (Light Gray Background) ===
    this.doc.setFillColor(243, 244, 246) // Light gray (#F3F4F6)
    this.doc.setDrawColor(229, 231, 235)
    this.doc.roundedRect(leftX, yPos, boxWidth, boxHeight, 5, 5, 'FD')
    
    let lineY = yPos + 11
    
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(9.5)
    this.doc.setTextColor(31, 41, 55)
    this.doc.text('Material Details:', leftX + 7, lineY)
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(8.6)
    this.doc.setTextColor(55, 65, 81)
    
    lineY += 8
    this.doc.text(`• Glass Area: ${totalGlassArea.toFixed(2)} sq.ft`, leftX + 7, lineY)
    
    lineY += 6
    this.doc.text(`• Frame Weight: ${totalProfileWeight.toFixed(2)} kg`, leftX + 7, lineY)
    
    lineY += 6
    this.doc.text(`• Rate: Rs. 47.0 per kg`, leftX + 7, lineY)
    
    lineY += 9
    this.doc.setFontSize(8)
    this.doc.text('Note: Prices valid 30 days from issue.', leftX + 7, lineY)

    // === RIGHT BOX: ENHANCED TOTALS TABLE ===
    this.doc.setFillColor(255, 255, 255)
    this.doc.setDrawColor(229, 231, 235)
    this.doc.setLineWidth(0.5)
    this.doc.roundedRect(rightX, yPos, boxWidth, boxHeight, 5, 5, 'FD')

    let rightY = yPos + 11
    const innerPad = 8
    const labelX = rightX + innerPad
    const amountX = rightX + boxWidth - innerPad

    // Helper to add row
    const addRow = (label: string, amount: string | number, color: [number, number, number] = [31, 41, 55], bold = false) => {
      if (!this.doc) return
      
      this.doc.setFont('helvetica', 'normal')
      this.doc.setFontSize(9)
      this.doc.setTextColor(75, 85, 99)
      this.doc.text(label, labelX, rightY)
      
      this.doc.setFont('helvetica', bold ? 'bold' : 'normal')
      this.doc.setTextColor(...color)
      const displayAmount = typeof amount === 'number' 
        ? `Rs. ${amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`
        : amount
      this.doc.text(displayAmount, amountX, rightY, { align: 'right' })
      
      rightY += 6.5
    }

    // Subtotal
    addRow('Subtotal', data.subtotal, [31, 41, 55], true)

    // Tax
    addRow('Tax (GST 18%)', data.tax, [31, 41, 55], true)

    // Discount (if any)
    const discount = (data as any).discount || 0
    if (discount > 0) {
      addRow('Discount (5%)', `− Rs. ${discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, [34, 197, 94], false)
    }

    // Advance Paid (if any)
    const advancePaid = (data as any).advancePaid || 0
    if (advancePaid > 0) {
      addRow('Advance Received', `− Rs. ${advancePaid.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, [34, 197, 94], false)
    }

    // Round-off (if any)
    const roundOff = (data as any).roundOff || 0
    if (Math.abs(roundOff) > 0.01) {
      const sign = roundOff >= 0 ? '+' : '−'
      addRow('Round-off', `${sign} Rs. ${Math.abs(roundOff).toFixed(2)}`, [107, 114, 128], false)
    }

    // Calculate Balance Due if advance paid
    let balanceDue = data.grandTotal
    if (advancePaid > 0) {
      balanceDue = data.grandTotal - advancePaid
    }
    if (discount > 0) {
      balanceDue = balanceDue - discount
    }

    // Show Balance Due if different from Grand Total
    if (advancePaid > 0 || discount > 0) {
      rightY += 1
      this.doc.setDrawColor(200, 200, 200)
      this.doc.setLineWidth(0.3)
      this.doc.line(labelX, rightY, amountX, rightY)
      rightY += 5
      
      this.doc.setFont('helvetica', 'bold')
      this.doc.setFontSize(9)
      this.doc.setTextColor(239, 68, 68) // Red for balance
      this.doc.text('Balance Due', labelX, rightY)
      
      this.doc.setFontSize(10)
      this.doc.text(
        `Rs. ${balanceDue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
        amountX,
        rightY,
        { align: 'right' }
      )
      rightY += 6
    }

    // Divider line above Grand Total
    rightY += 2
    this.doc.setDrawColor(108, 99, 255)
    this.doc.setLineWidth(0.5)
    this.doc.line(rightX + innerPad, rightY, rightX + boxWidth - innerPad, rightY)
   
    // ===== GRAND TOTAL: APPLE-STYLE REFINED BAR =====
    const totalBoxX = rightX + innerPad
    const totalBoxY = rightY + 5
    const totalBoxWidth = boxWidth - (innerPad * 2)
    const totalBoxHeight = 16

    // ----- PREMIUM SOLID BACKGROUND -----
    this.doc.setFillColor(84, 63, 255)
    this.doc.roundedRect(totalBoxX, totalBoxY, totalBoxWidth, totalBoxHeight, 3, 3, 'F')

    // ----- PERFECTLY ALIGNED TEXT -----
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(255, 255, 255)
    
    // Vertical center calculation
    const textCenterY = totalBoxY + totalBoxHeight / 2 + 2.5
    
    // Label (left side, smaller)
    this.doc.setFontSize(7.5)
    this.doc.text('GRAND TOTAL', totalBoxX + 10, textCenterY)

    // Amount with raised INR symbol (Apple-style)
    const totalValue = data.grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })
    
    // Dynamic font sizing
    let amountFontSize = 11
    if (totalValue.length > 12) amountFontSize = 10
    if (totalValue.length > 15) amountFontSize = 9
    
    // Calculate positioning for raised symbol
    this.doc.setFontSize(amountFontSize)
    const numberWidth = this.doc.getTextWidth(totalValue)
    
    // Currency symbol (smaller, raised - Apple style)
    const currencySize = amountFontSize * 0.65
    this.doc.setFontSize(currencySize)
    const currencySymbol = 'Rs.'
    const currencyWidth = this.doc.getTextWidth(currencySymbol)
    
    // Draw currency symbol (raised by 0.8px)
    this.doc.text(
      currencySymbol,
      totalBoxX + totalBoxWidth - 10 - numberWidth - currencyWidth - 1.5,
      textCenterY - 0.8
    )
    
    // Draw amount (prominent, bold)
    this.doc.setFontSize(amountFontSize)
    this.doc.text(
      totalValue,
      totalBoxX + totalBoxWidth - 10,
      textCenterY,
      { align: 'right' }
    )
    // Return with proper spacing for next section
    return yPos + boxHeight + 18
  }

  private addNotesAndTerms(data: QuotationData, startY: number): number {
    if (!this.doc) return startY

    const pageWidth = this.doc.internal.pageSize.getWidth()
    let yPos = startY

    // ===== NOTES SECTION (Clean & Visible) =====
    // Section title with accent bar
    this.doc.setFillColor(108, 99, 255)
    this.doc.roundedRect(15, yPos, 3, 10, 1, 1, 'F')
    
    this.doc.setFontSize(11)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(31, 41, 55)
    this.doc.text('Notes', 23, yPos + 7)
    
    yPos += 16

    // Notes content box (light gray background)
    this.doc.setFillColor(243, 244, 246) // Light gray
    this.doc.setDrawColor(229, 231, 235)
    this.doc.setLineWidth(0.3)
    
    const notesBoxHeight = data.notes ? 30 : 22
    this.doc.roundedRect(15, yPos, pageWidth - 30, notesBoxHeight, 4, 4, 'FD')
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(8.5)
    this.doc.setTextColor(55, 65, 81)
    
    let notesY = yPos + 8
    
    // User notes (if provided)
    if (data.notes) {
      const noteLines = this.doc.splitTextToSize(data.notes, pageWidth - 50)
      this.doc.text(noteLines, 22, notesY)
      notesY += noteLines.length * 4 + 6
    }
    
    // Auto-calculated note (always show)
    this.doc.setFont('helvetica', 'italic')
    this.doc.setFontSize(8)
    this.doc.setTextColor(107, 114, 128)
    const currentMonth = new Date().toLocaleString('en-IN', { month: 'long', year: 'numeric' })
    const autoNote = `This quotation is auto-calculated based on the latest aluminium profile rates as of ${currentMonth}.`
    const autoNoteLines = this.doc.splitTextToSize(autoNote, pageWidth - 50)
    this.doc.text(autoNoteLines, 22, notesY)
    
    yPos += notesBoxHeight + 12

    // ===== PAYMENT TRACKING (if provided) =====
    const advancePaid = (data as any).advancePaid || 0
    if (advancePaid > 0) {
      const balanceDue = data.grandTotal - advancePaid
      
      // Section title
      this.doc.setFillColor(108, 99, 255)
      this.doc.roundedRect(15, yPos, 3, 10, 1, 1, 'F')
      
      this.doc.setFontSize(11)
      this.doc.setFont('helvetica', 'bold')
      this.doc.setTextColor(31, 41, 55)
      this.doc.text('Payment Details', 23, yPos + 7)
      
      yPos += 16

      // Payment box
      this.doc.setFillColor(250, 250, 255)
      this.doc.setDrawColor(229, 231, 235)
      this.doc.setLineWidth(0.3)
      this.doc.roundedRect(15, yPos, pageWidth - 30, 18, 4, 4, 'FD')
      
      // Advance Paid
      this.doc.setFont('helvetica', 'normal')
      this.doc.setFontSize(9)
      this.doc.setTextColor(55, 65, 81)
      this.doc.text('Advance Paid:', 22, yPos + 8)
      
      this.doc.setFont('helvetica', 'bold')
      this.doc.setTextColor(34, 197, 94) // Green
      this.doc.text(
        `Rs. ${advancePaid.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
        pageWidth - 37,
        yPos + 8,
        { align: 'right' }
      )
      
      // Balance Due
      this.doc.setFont('helvetica', 'normal')
      this.doc.setTextColor(55, 65, 81)
      this.doc.text('Balance Due:', 22, yPos + 14)
      
      this.doc.setFont('helvetica', 'bold')
      this.doc.setTextColor(239, 68, 68) // Red
      this.doc.text(
        `Rs. ${balanceDue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
        pageWidth - 37,
        yPos + 14,
        { align: 'right' }
      )
      
      yPos += 22
    }

    // ===== TERMS & CONDITIONS (if provided) =====
    if (data.termsAndConditions) {
      // Section title with accent bar
      this.doc.setFillColor(108, 99, 255)
      this.doc.roundedRect(15, yPos, 3, 10, 1, 1, 'F')
      
      this.doc.setFontSize(11)
      this.doc.setFont('helvetica', 'bold')
      this.doc.setTextColor(31, 41, 55)
      this.doc.text('Terms & Conditions', 23, yPos + 7)
      
      yPos += 16

      // Terms content
      this.doc.setFont('helvetica', 'normal')
      this.doc.setFontSize(8.5)
      this.doc.setTextColor(75, 85, 99)
      const termsLines = this.doc.splitTextToSize(data.termsAndConditions, pageWidth - 50)
      this.doc.text(termsLines, 22, yPos)
      
      yPos += termsLines.length * 4 + 12
    }

    // ===== DIGITAL VERIFICATION SECTION =====
    const pageHeight = this.doc.internal.pageSize.getHeight()
    
    // Check if we need a new page
    if (yPos > pageHeight - 90) {
      this.doc.addPage()
      yPos = 20
    }

    // Digital verification box
    this.doc.setFillColor(237, 233, 254) // Light purple
    this.doc.setDrawColor(108, 99, 255)
    this.doc.setLineWidth(0.5)
    this.doc.roundedRect(15, yPos, pageWidth - 30, 12, 3, 3, 'FD')
    
    // Verification icon/badge
    this.doc.setFillColor(108, 99, 255)
    this.doc.circle(22, yPos + 6, 2.5, 'F')
    this.doc.setTextColor(255, 255, 255)
    this.doc.setFontSize(7)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text('✓', 22, yPos + 7.2, { align: 'center' })
    
    // Verification text
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(8)
    this.doc.setTextColor(76, 63, 255)
    this.doc.text('DIGITALLY VERIFIED', 28, yPos + 5.5)
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(7.5)
    this.doc.setTextColor(100, 100, 100)
    const docId = `Document ID: #${data.invoiceNumber} | Verified by Estimatix Digital Sign System`
    this.doc.text(docId, 28, yPos + 9)
    
    yPos += 17

    // ===== SIGNATURE SECTIONS =====
    const signatureBoxWidth = (pageWidth - 45) / 2
    const signatureBoxHeight = 35

    // Authorized Signature (Left)
    this.doc.setDrawColor(229, 231, 235)
    this.doc.setLineWidth(0.3)
    this.doc.roundedRect(15, yPos, signatureBoxWidth, signatureBoxHeight, 4, 4, 'S')
    
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(9)
    this.doc.setTextColor(31, 41, 55)
    this.doc.text('Prepared & Authorized by', 22, yPos + 8)
    
    // Signature line
    this.doc.setDrawColor(200, 200, 200)
    this.doc.setLineWidth(0.5)
    this.doc.line(22, yPos + 20, 22 + signatureBoxWidth - 14, yPos + 20)
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(8)
    this.doc.setTextColor(107, 114, 128)
    this.doc.text('Authorized Signature', 22, yPos + 25)
    
    this.doc.setFontSize(7.5)
    this.doc.text('Venkatesh Aluminium & Glass', 22, yPos + 30)

    // Client Signature (Right)
    const rightBoxX = 15 + signatureBoxWidth + 15
    this.doc.roundedRect(rightBoxX, yPos, signatureBoxWidth, signatureBoxHeight, 4, 4, 'S')
    
    this.doc.setFont('helvetica', 'bold')
    this.doc.setFontSize(9)
    this.doc.setTextColor(31, 41, 55)
    this.doc.text('Client Acknowledgement', rightBoxX + 7, yPos + 8)
    
    // Signature line
    this.doc.setDrawColor(200, 200, 200)
    this.doc.line(rightBoxX + 7, yPos + 20, rightBoxX + signatureBoxWidth - 7, yPos + 20)
    
    this.doc.setFont('helvetica', 'normal')
    this.doc.setFontSize(8)
    this.doc.setTextColor(107, 114, 128)
    this.doc.text('Client Signature', rightBoxX + 7, yPos + 25)
    
    this.doc.setFontSize(7.5)
    this.doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, rightBoxX + 7, yPos + 30)

    yPos += signatureBoxHeight + 10

    return yPos
  }

  private async addQRCode(qrOptions: PDFOptions['qrCode']): Promise<void> {
    if (!this.doc || !qrOptions) return

    try {
      // Generate QR code as data URL
      const qrDataUrl = await QRCode.toDataURL(qrOptions.url, {
        width: 400,
        margin: 2,
        color: {
          dark: '#4f46e5',
          light: '#ffffff'
        }
      })

      const pageWidth = this.doc.internal.pageSize.getWidth()
      const pageHeight = this.doc.internal.pageSize.getHeight()
      
      // Position QR code in bottom right corner
      const qrSize = 35
      const xPos = pageWidth - qrSize - 20
      const yPos = pageHeight - qrSize - 60

      // Add QR code background
      this.doc.setFillColor(255, 255, 255)
      this.doc.rect(xPos - 3, yPos - 3, qrSize + 6, qrSize + 6, 'F')
      
      // Add border
      this.doc.setDrawColor(79, 70, 229)
      this.doc.setLineWidth(0.5)
      this.doc.rect(xPos - 3, yPos - 3, qrSize + 6, qrSize + 6, 'S')

      // Add QR code image
      this.doc.addImage(qrDataUrl, 'PNG', xPos, yPos, qrSize, qrSize)

      // Add label below QR code
      this.doc.setFontSize(8)
      this.doc.setFont('helvetica', 'bold')
      this.doc.setTextColor(79, 70, 229)
      const label = qrOptions.label || 'Scan to View'
      this.doc.text(label, xPos + qrSize / 2, yPos + qrSize + 6, { align: 'center' })
      
      // Add subtitle
      this.doc.setFont('helvetica', 'normal')
      this.doc.setTextColor(100, 100, 100)
      this.doc.setFontSize(7)
      this.doc.text('Quote Lookup', xPos + qrSize / 2, yPos + qrSize + 11, { align: 'center' })
    } catch (error) {
      console.error('Failed to add QR code to PDF:', error)
      // Don't fail the entire PDF generation if QR code fails
    }
  }

  private addDigitalSignature(signature: PDFOptions['digitalSignature']): void {
    if (!this.doc || !signature) return

    const pageHeight = this.doc.internal.pageSize.getHeight()
    let yPos = pageHeight - 80

    // Signature section
    this.doc.setFontSize(10)
    this.doc.setFont('helvetica', 'bold')
    this.doc.text('Authorized Signature:', 20, yPos)

    // Signature image (if provided)
    if (signature.signatureImage) {
      try {
        this.doc.addImage(signature.signatureImage, 'PNG', 20, yPos + 5, 40, 20)
      } catch (error) {
        console.warn('Failed to add signature image:', error)
      }
    }

    // Signature line
    this.doc.line(20, yPos + 30, 80, yPos + 30)

    // Signer details
    this.doc.setFont('helvetica', 'normal')
    this.doc.text(signature.signerName, 20, yPos + 35)
    this.doc.text(signature.signerTitle, 20, yPos + 42)
    this.doc.text(signature.date?.toLocaleDateString() || new Date().toLocaleDateString(), 20, yPos + 49)

    // Digital signature notice
    this.doc.setFontSize(8)
    this.doc.setTextColor(100, 100, 100)
    this.doc.text('This document contains a digital signature and is legally binding.', 20, yPos + 60)
  }

  private addFooter(options: PDFOptions, currentPage: number = 1, totalPages: number = 1): void {
    if (!this.doc) return

    const pageWidth = this.doc.internal.pageSize.getWidth()
    const pageHeight = this.doc.internal.pageSize.getHeight()

    // ===== PREMIUM FOOTER WITH GRADIENT BAR =====
    const footerHeight = 28
    const footerY = pageHeight - footerHeight
    
    // Light purple gradient background
    this.doc.setFillColor(248, 247, 255)
    this.doc.rect(0, footerY, pageWidth, footerHeight, 'F')

    // Premium dual-tone accent bar (gradient effect)
    this.doc.setFillColor(108, 99, 255) // Primary violet
    this.doc.rect(0, footerY, pageWidth, 1.5, 'F')
    
    this.doc.setFillColor(76, 63, 255) // Secondary violet (darker)
    this.doc.rect(0, footerY + 1.5, pageWidth, 0.8, 'F')

    // ===== SECTION 1: LEFT - TIMESTAMP (IMPROVED CONTRAST) =====
    this.setFont(8, 'normal')
    this.doc.setTextColor(31, 41, 55) // Dark gray for better readability
    const timestamp = new Date().toLocaleString('en-IN', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    this.doc.text(`Generated: ${timestamp}`, 15, footerY + 10)
    
    this.setFont(8, 'normal')
    this.doc.setTextColor(100, 100, 100) // Medium gray
    this.doc.text(`Page ${currentPage} of ${totalPages}`, 15, footerY + 17)

    // ===== SECTION 2: CENTER - COMPANY (IMPROVED CONTRAST) =====
    this.setFont(10, 'bold')
    this.doc.setTextColor(31, 41, 55) // Dark text
    const companyName = options.branding?.companyName || 'Venkatesh Aluminium & Glass'
    this.doc.text(`Prepared by ${companyName}`, pageWidth / 2, footerY + 10, { align: 'center' })
    
    // Contact - NO EMOJI, better contrast
    this.setFont(8, 'normal')
    this.doc.setTextColor(100, 100, 100)
    const phone = options.branding?.phone || '+91-9876543210'
    const email = options.branding?.email || 'info@example.com'
    const contactText = `Phone: ${phone} | Email: ${email}`
    this.doc.text(contactText, pageWidth / 2, footerY + 17, { align: 'center' })

    // ===== SECTION 3: RIGHT - PREMIUM BRANDING =====
    this.setFont(7.5, 'normal')
    this.doc.setTextColor(107, 114, 128)
    this.doc.text('Generated by Estimatix Quotation Suite', pageWidth - 15, footerY + 11, { align: 'right' })
    
    this.setFont(7, 'normal')
    this.doc.setTextColor(156, 163, 175)
    this.doc.text('© 2025 All Rights Reserved', pageWidth - 15, footerY + 17, { align: 'right' })
  }

  // Utility method to download PDF
  downloadPDF(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Utility method to save PDF as draft
  async savePDFDraft(data: QuotationData, _userId: string): Promise<string> {
    try {
      const draftOptions: PDFOptions = {
        draft: true,
        watermark: {
          text: 'DRAFT',
          opacity: 0.1,
          color: '#4ECDC4'
        }
      }

      const pdfBlob = await this.generateQuotationPDF(data, draftOptions)
      
      // Convert to base64 for storage (userId can be used for future storage implementation)
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(pdfBlob)
      })
    } catch (error) {
      console.error('Error saving PDF draft:', error)
      throw error
    }
  }
}

// Export singleton instance
export const pdfService = new EnhancedPDFService()

// Default branding configuration
export const defaultBranding: PDFOptions['branding'] = {
  companyName: 'Estimatix',
  address: 'Professional Estimation Platform, India',
  phone: '+91-XXXXXXXXXX',
  email: 'info@estimatix.com'
}

// Default terms and conditions
export const defaultTerms = `
1. All prices are subject to change without notice.
2. Delivery timeline: 7-14 working days from order confirmation.
3. 50% advance payment required to start work.
4. Installation charges are additional unless mentioned.
5. Warranty: 1 year on manufacturing defects.
6. Custom designs may require additional time and cost.
7. Prices include material and labor as specified.
8. Site conditions may affect final pricing.
`