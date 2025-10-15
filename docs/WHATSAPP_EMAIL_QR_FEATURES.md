# WhatsApp & Email Sharing + QR Code Features 📱✉️

## Overview
Enhanced Estimatix with direct WhatsApp/Email sharing and QR code generation for quick quote lookup and professional PDF quotations.

---

## 🎉 New Features Implemented

### 1. **WhatsApp Direct Sharing** 💚
- One-click share quotations via WhatsApp
- Pre-formatted professional message template
- Includes quote ID, total amount, and direct link
- Opens WhatsApp Web or App automatically
- Mobile-friendly integration

**Message Template:**
```
🧾 *Quotation from Estimatix*

*Quote ID:* QUOT-12345
*Total Amount:* ₹25,000.00
*Items:* 5

View your quotation here:
https://example.com/shared/abc123

_Powered by Estimatix - Professional Estimation Platform_
```

### 2. **Email Direct Sharing** 📧
- Professional email template
- Pre-filled subject and body
- Customizable recipient field
- Optional personal message
- Expiration notice included

**Email Features:**
- Professional formatting
- Company branding
- Quote summary
- Direct access link
- Expiry information

### 3. **QR Code Generation** 📱
**In Share Dialog:**
- Instant QR code generation for shared links
- High-quality 300x300 px QR codes
- Brand colors (#4f46e5 - Estimatix purple)
- Downloadable as PNG
- Mobile-scan optimized

**In PDF Quotations:**
- QR code embedded in bottom-right corner
- 35mm x 35mm size
- Professional border with brand colors
- "Scan to View" label
- Direct link to online quotation
- Doesn't interfere with content

### 4. **Enhanced Share UI** ✨
- Modern, intuitive interface
- Visual sharing options
- Quick access buttons
- QR code display
- Copy formatted text option
- Multiple share methods

---

## 📋 Technical Implementation

### Dependencies Added:
```json
{
  "qrcode": "^1.5.x",
  "@types/qrcode": "^1.5.x"
}
```

### Files Modified:

#### 1. `src/components/ShareQuote.tsx`
**New Features:**
- `handleWhatsAppShare()` - Opens WhatsApp with formatted message
- `handleEmailShare()` - Opens email client with pre-filled content
- `handleDownloadQR()` - Downloads QR code as PNG
- `handleCopyShareText()` - Copies formatted share text
- QR code state management
- Email customization options

**UI Enhancements:**
- WhatsApp button (green #25D366)
- Email button (blue)
- QR code display section
- Download QR functionality
- Expandable email options
- Copy formatted message button

#### 2. `src/lib/pdfService.ts`
**New Features:**
- `addQRCode()` method - Embeds QR code in PDF
- QR code positioning (bottom-right corner)
- Professional styling with borders
- Brand color integration
- Error handling (non-blocking)

**PDF Options Extended:**
```typescript
interface PDFOptions {
  qrCode?: {
    url: string        // Share link URL
    label?: string     // Custom label (default: "Scan to View")
  }
  // ... existing options
}
```

---

## 🎯 Usage Examples

### Basic Share with QR Code:
```typescript
import ShareQuote from './components/ShareQuote'

<ShareQuote 
  quotationId="QUOT-12345"
  quotationData={quoteData}
  onClose={() => setShowShare(false)}
/>
```

### Generate PDF with QR Code:
```typescript
import { pdfService } from './lib/pdfService'

await pdfService.generateQuotationPDF(quotationData, {
  qrCode: {
    url: shareLink,
    label: 'Scan for Details'
  },
  branding: {
    companyName: 'Estimatix',
    // ... other branding options
  }
})
```

### WhatsApp Sharing:
```typescript
// Automatically formats message and opens WhatsApp
handleWhatsAppShare() // Opens: https://wa.me/?text=...
```

### Email Sharing:
```typescript
// Opens default email client with pre-filled content
handleEmailShare() // Opens: mailto:...
```

---

## 🎨 UI Components

### Share Dialog Layout:
```
┌─────────────────────────────────────┐
│  ✓ Share Link Created!              │
│  Choose how to share this quotation │
├─────────────────────────────────────┤
│  [QR Code Display - 200x200px]      │
│  Scan with mobile to view quotation │
│  [ Download QR Code ]                │
├─────────────────────────────────────┤
│  Quick Share:                        │
│  ┌──────────┐  ┌──────────┐        │
│  │ WhatsApp │  │  Email   │        │
│  │    💚    │  │    📧    │        │
│  └──────────┘  └──────────┘        │
│  [ Email Options ▼ ]                │
├─────────────────────────────────────┤
│  Share Link:                         │
│  [ https://example.com... ] [Copy]  │
│  [ Copy Formatted Message ]         │
├─────────────────────────────────────┤
│  Share Settings Summary              │
│  ✓ Read Only | Public | 30 days     │
└─────────────────────────────────────┘
```

### PDF with QR Code:
```
┌─────────────────────────────────────┐
│  QUOTATION                           │
│  Company Details                     │
│  Customer Details                    │
│  Items Table                         │
│  Totals                             │
│  Terms & Conditions                 │
│                                      │
│  Signature:        [QR Code] ◄─── │
│  __________        Scan to View     │
│  Name              Quote Lookup     │
│  Date                                │
│  Footer                              │
└─────────────────────────────────────┘
```

---

## 🚀 Benefits

### For Business:
✅ **Professional Image** - Modern sharing options
✅ **Time Saving** - One-click sharing
✅ **Mobile Friendly** - QR codes for instant access
✅ **Brand Awareness** - Consistent branding in messages
✅ **Tracking** - Shareable links for analytics

### For Customers:
✅ **Easy Access** - Multiple sharing methods
✅ **Quick Reference** - Scan QR codes anytime
✅ **Professional Experience** - Polished communication
✅ **Mobile Compatible** - WhatsApp integration
✅ **Email Option** - Formal communication channel

---

## 📱 Mobile Experience

### WhatsApp Flow:
1. Click "WhatsApp" button
2. Automatically opens WhatsApp
3. Pre-filled message ready to send
4. Choose recipient
5. Send instantly

### QR Code Flow:
1. Generate share link
2. Display QR code
3. Scan with mobile device
4. Instant access to quotation
5. No login required (if public)

---

## 🔒 Security & Privacy

### Share Link Security:
- Unique token generation
- Optional expiration dates
- Read-only or collaborative access
- Public or private visibility
- Specific user restrictions

### QR Code Security:
- Links to secured share URLs
- Same security as manual links
- No sensitive data in QR code
- Tracked access (via share service)

---

## 🎯 Best Practices

### When to Use Each Method:

**WhatsApp:**
- Quick informal sharing
- Mobile-first recipients
- Immediate delivery needed
- Personal connections

**Email:**
- Formal communication
- Business correspondence
- Documentation required
- Multiple recipients

**QR Code:**
- Print materials
- Physical documents
- In-person presentations
- Quick mobile access

**Direct Link:**
- Web sharing
- Copy-paste needs
- Social media
- Website integration

---

## 📊 Feature Checklist

- ✅ WhatsApp direct sharing
- ✅ Email direct sharing
- ✅ QR code generation for links
- ✅ QR code in PDF quotations
- ✅ Downloadable QR codes
- ✅ Copy formatted messages
- ✅ Professional message templates
- ✅ Brand color integration
- ✅ Mobile-responsive design
- ✅ Error handling
- ✅ Non-blocking QR generation
- ✅ Customizable labels

---

## 🔮 Future Enhancements

### Potential Additions:
- 📱 SMS sharing
- 📲 Telegram integration
- 🔗 Social media sharing (LinkedIn, Twitter)
- 📧 Bulk email sending
- 📊 Share analytics dashboard
- 🎨 Custom QR code designs/colors
- 🖼️ QR code with logo overlay
- 📝 Custom message templates
- 🔔 Delivery notifications
- 📈 View tracking

---

## 🐛 Known Limitations

1. **WhatsApp Web:** Requires WhatsApp to be installed/accessible
2. **Email Client:** Depends on default mail client configuration
3. **QR Code Size:** Fixed at 35mm in PDFs (optimal for readability)
4. **Message Length:** WhatsApp has character limits (~65,000)
5. **Email Length:** Some clients may truncate long messages

---

## 📝 Code Examples

### Custom QR Code Styling:
```typescript
const qrDataUrl = await QRCode.toDataURL(url, {
  width: 400,
  margin: 2,
  color: {
    dark: '#4f46e5',  // Estimatix purple
    light: '#ffffff'   // White background
  },
  errorCorrectionLevel: 'M'
})
```

### WhatsApp Message Formatting:
```typescript
const message = `🧾 *Quotation from Estimatix*\n\n` +
  `*Quote ID:* ${quotationId}\n` +
  `*Total Amount:* ₹${total}\n` +
  `*Items:* ${itemCount}\n\n` +
  `View here: ${shareLink}`

const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
```

### Email Template:
```typescript
const subject = `Quotation ${invoiceNumber} - Estimatix`
const body = `Dear Customer,\n\nYour quotation details...\n\nLink: ${shareLink}`
const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
```

---

## 🎓 Testing Checklist

### Test Scenarios:
- ✅ Generate share link
- ✅ Display QR code
- ✅ Download QR code as PNG
- ✅ Open WhatsApp with message
- ✅ Open email client
- ✅ Copy link to clipboard
- ✅ Copy formatted message
- ✅ Scan QR code with mobile
- ✅ View PDF with QR code
- ✅ Test expired links
- ✅ Test private vs public links
- ✅ Mobile responsiveness

---

## 📞 Support & Resources

### Documentation:
- Share Service: `src/lib/shareService.ts`
- PDF Service: `src/lib/pdfService.ts`
- Share Component: `src/components/ShareQuote.tsx`

### External Libraries:
- QRCode.js: https://github.com/soldair/node-qrcode
- jsPDF: https://github.com/parallax/jsPDF
- WhatsApp API: https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat

---

**Version:** 1.0.0  
**Last Updated:** October 15, 2025  
**Status:** ✅ Production Ready

---

*Powered by Estimatix - Professional Estimation Platform* 🚀
