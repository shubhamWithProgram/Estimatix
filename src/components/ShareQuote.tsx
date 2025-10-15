// Enhanced Share Quote Component with WhatsApp/Email Integration
import { useState } from 'react'
import { quoteShareService } from '../lib/shareService'
import QRCode from 'qrcode'

interface ShareQuoteProps {
  quotationId: string
  quotationData: any
  onClose: () => void
}

export default function ShareQuote({ quotationId, quotationData, onClose }: ShareQuoteProps) {
  const [shareLink, setShareLink] = useState<string>('')
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [shareOptions, setShareOptions] = useState({
    readOnly: true,
    expiresInDays: 30,
    isPublic: false,
    allowedUsers: [] as string[]
  })
  const [newUserEmail, setNewUserEmail] = useState('')
  const [emailRecipient, setEmailRecipient] = useState('')
  const [emailMessage, setEmailMessage] = useState('')

  const handleCreateShareLink = async () => {
    setLoading(true)
    try {
      const link = await quoteShareService.createShareLink(quotationId, shareOptions)
      setShareLink(link)
      
      // Generate QR Code
      try {
        const qrUrl = await QRCode.toDataURL(link, {
          width: 300,
          margin: 2,
          color: {
            dark: '#4f46e5',
            light: '#ffffff'
          }
        })
        setQrCodeUrl(qrUrl)
      } catch (qrError) {
        console.error('Error generating QR code:', qrError)
      }
    } catch (error) {
      console.error('Error creating share link:', error)
      alert('Failed to create share link')
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppShare = () => {
    if (!shareLink) return
    
    const message = `🧾 *Quotation from Estimatix*\n\n` +
      `*Quote ID:* ${quotationData?.invoiceNumber || quotationId}\n` +
      `*Total Amount:* ₹${quotationData?.grandTotal?.toFixed(2) || '0.00'}\n` +
      `*Items:* ${quotationData?.items?.length || 0}\n\n` +
      `View your quotation here:\n${shareLink}\n\n` +
      `_Powered by Estimatix - Professional Estimation Platform_`
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailShare = () => {
    if (!shareLink) return
    
    const subject = `Quotation ${quotationData?.invoiceNumber || quotationId} - Estimatix`
    const body = `Dear Valued Customer,\n\n` +
      `Please find your quotation details below:\n\n` +
      `Quotation ID: ${quotationData?.invoiceNumber || quotationId}\n` +
      `Total Amount: ₹${quotationData?.grandTotal?.toFixed(2) || '0.00'}\n` +
      `Number of Items: ${quotationData?.items?.length || 0}\n\n` +
      `View your complete quotation here:\n${shareLink}\n\n` +
      `${emailMessage ? `Additional Message:\n${emailMessage}\n\n` : ''}` +
      `Best regards,\n` +
      `Estimatix Team\n` +
      `Professional Estimation Platform\n\n` +
      `---\n` +
      `This link will expire in ${shareOptions.expiresInDays === 0 ? 'never' : shareOptions.expiresInDays + ' days'}.`
    
    const mailtoUrl = `mailto:${emailRecipient || ''}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  const handleDownloadQR = () => {
    if (!qrCodeUrl) return
    
    const link = document.createElement('a')
    link.download = `quotation-${quotationId}-qr.png`
    link.href = qrCodeUrl
    link.click()
  }

  const handleCopyShareText = () => {
    const shareText = `🧾 Quotation from Estimatix\n\n` +
      `Quote ID: ${quotationData?.invoiceNumber || quotationId}\n` +
      `Total: ₹${quotationData?.grandTotal?.toFixed(2)}\n` +
      `Link: ${shareLink}`
    
    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyLink = async () => {
    if (!shareLink) return
    
    try {
      await quoteShareService.copyShareLink(shareLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Error copying link:', error)
    }
  }

  const addAllowedUser = () => {
    if (newUserEmail && !shareOptions.allowedUsers.includes(newUserEmail)) {
      setShareOptions({
        ...shareOptions,
        allowedUsers: [...shareOptions.allowedUsers, newUserEmail]
      })
      setNewUserEmail('')
    }
  }

  const removeAllowedUser = (email: string) => {
    setShareOptions({
      ...shareOptions,
      allowedUsers: shareOptions.allowedUsers.filter(u => u !== email)
    })
  }

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              <i className="bi bi-share me-2"></i>
              Share Quotation
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {!shareLink ? (
              <>
                {/* Share Options */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Share Settings</h6>
                  
                  {/* Access Level */}
                  <div className="mb-3">
                    <label className="form-label">Access Level</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="accessLevel"
                        id="readOnly"
                        checked={shareOptions.readOnly}
                        onChange={() => setShareOptions({ ...shareOptions, readOnly: true })}
                      />
                      <label className="form-check-label" htmlFor="readOnly">
                        <strong>Read Only</strong> - View quotation only
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="accessLevel"
                        id="collaborative"
                        checked={!shareOptions.readOnly}
                        onChange={() => setShareOptions({ ...shareOptions, readOnly: false })}
                      />
                      <label className="form-check-label" htmlFor="collaborative">
                        <strong>Collaborative</strong> - Allow editing and real-time collaboration
                      </label>
                    </div>
                  </div>

                  {/* Visibility */}
                  <div className="mb-3">
                    <label className="form-label">Visibility</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="isPublic"
                        checked={shareOptions.isPublic}
                        onChange={(e) => setShareOptions({ ...shareOptions, isPublic: e.target.checked })}
                      />
                      <label className="form-check-label" htmlFor="isPublic">
                        Make this quotation publicly accessible (no login required)
                      </label>
                    </div>
                  </div>

                  {/* Expiration */}
                  <div className="mb-3">
                    <label className="form-label">Link Expiration</label>
                    <select
                      className="form-select"
                      value={shareOptions.expiresInDays}
                      onChange={(e) => setShareOptions({ ...shareOptions, expiresInDays: Number(e.target.value) })}
                    >
                      <option value={1}>1 day</option>
                      <option value={7}>1 week</option>
                      <option value={30}>1 month</option>
                      <option value={90}>3 months</option>
                      <option value={0}>Never expires</option>
                    </select>
                  </div>

                  {/* Specific Users */}
                  {!shareOptions.isPublic && (
                    <div className="mb-3">
                      <label className="form-label">Specific Users (Optional)</label>
                      <div className="input-group mb-2">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email address"
                          value={newUserEmail}
                          onChange={(e) => setNewUserEmail(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addAllowedUser()}
                        />
                        <button className="btn btn-outline-primary" type="button" onClick={addAllowedUser}>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      
                      {shareOptions.allowedUsers.length > 0 && (
                        <div className="border rounded p-2">
                          <small className="text-muted d-block mb-2">Allowed users:</small>
                          {shareOptions.allowedUsers.map((email, index) => (
                            <span key={index} className="badge bg-light text-dark me-1 mb-1">
                              {email}
                              <button
                                className="btn-close btn-close-sm ms-1"
                                onClick={() => removeAllowedUser(email)}
                              ></button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Quotation Preview */}
                <div className="bg-light p-3 rounded mb-3">
                  <h6 className="fw-bold mb-2">Quotation Preview</h6>
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>ID:</strong> {quotationData?.invoiceNumber || quotationId}
                    </div>
                    <div>
                      <strong>Items:</strong> {quotationData?.items?.length || 0}
                    </div>
                    <div>
                      <strong>Total:</strong> ₹{quotationData?.grandTotal?.toFixed(2) || '0.00'}
                    </div>
                  </div>
                </div>

                {/* Create Link Button */}
                <button
                  className="btn btn-primary w-100"
                  onClick={handleCreateShareLink}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Creating Share Link...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-link-45deg me-2"></i>
                      Create Share Link
                    </>
                  )}
                </button>
              </>
            ) : (
              <>
                {/* Share Link Generated */}
                <div className="text-center mb-4">
                  <div className="text-success mb-3">
                    <i className="bi bi-check-circle display-4"></i>
                  </div>
                  <h5 className="text-success">Share Link Created!</h5>
                  <p className="text-muted">Choose how you want to share this quotation</p>
                </div>

                {/* QR Code Display */}
                {qrCodeUrl && (
                  <div className="text-center mb-4 p-3 bg-light rounded">
                    <h6 className="fw-bold mb-3">
                      <i className="bi bi-qr-code me-2"></i>
                      Scan QR Code
                    </h6>
                    <img src={qrCodeUrl} alt="QR Code" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
                    <p className="small text-muted mb-2">Scan with mobile to view quotation</p>
                    <button className="btn btn-sm btn-outline-primary" onClick={handleDownloadQR}>
                      <i className="bi bi-download me-1"></i>
                      Download QR Code
                    </button>
                  </div>
                )}

                {/* Quick Share Buttons */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">
                    <i className="bi bi-share-fill me-2"></i>
                    Quick Share
                  </h6>
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <button 
                        className="btn btn-success w-100 py-3" 
                        onClick={handleWhatsAppShare}
                        style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                      >
                        <i className="bi bi-whatsapp display-6 d-block mb-2"></i>
                        <div className="fw-bold">WhatsApp</div>
                        <small className="d-block">Send via WhatsApp</small>
                      </button>
                    </div>
                    <div className="col-6">
                      <button 
                        className="btn btn-primary w-100 py-3" 
                        onClick={handleEmailShare}
                      >
                        <i className="bi bi-envelope-fill display-6 d-block mb-2"></i>
                        <div className="fw-bold">Email</div>
                        <small className="d-block">Send via Email</small>
                      </button>
                    </div>
                  </div>
                  
                  {/* Email Options */}
                  <div className="collapse" id="emailOptions">
                    <div className="card card-body mb-3">
                      <div className="mb-2">
                        <label className="form-label small">Recipient Email (optional)</label>
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          placeholder="customer@example.com"
                          value={emailRecipient}
                          onChange={(e) => setEmailRecipient(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label small">Additional Message (optional)</label>
                        <textarea
                          className="form-control form-control-sm"
                          rows={2}
                          placeholder="Add a personal message..."
                          value={emailMessage}
                          onChange={(e) => setEmailMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    className="btn btn-sm btn-link w-100"
                    data-bs-toggle="collapse"
                    data-bs-target="#emailOptions"
                  >
                    <i className="bi bi-gear me-1"></i>
                    Email Options
                  </button>
                </div>

                {/* Share Link */}
                <div className="mb-4">
                  <label className="form-label fw-bold">
                    <i className="bi bi-link-45deg me-2"></i>
                    Share Link
                  </label>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      value={shareLink}
                      readOnly
                    />
                    <button
                      className={`btn ${copied ? 'btn-success' : 'btn-outline-primary'}`}
                      onClick={handleCopyLink}
                    >
                      {copied ? (
                        <>
                          <i className="bi bi-check me-1"></i>
                          Copied!
                        </>
                      ) : (
                        <>
                          <i className="bi bi-clipboard me-1"></i>
                          Copy Link
                        </>
                      )}
                    </button>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-secondary w-100" 
                    onClick={handleCopyShareText}
                  >
                    <i className="bi bi-file-text me-1"></i>
                    Copy Formatted Message
                  </button>
                </div>

                {/* Share Options Summary */}
                <div className="bg-light p-3 rounded mb-3">
                  <h6 className="fw-bold mb-2">Share Settings</h6>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="bi bi-eye me-2"></i>
                      Access: <strong>{shareOptions.readOnly ? 'Read Only' : 'Collaborative'}</strong>
                    </li>
                    <li>
                      <i className="bi bi-globe me-2"></i>
                      Visibility: <strong>{shareOptions.isPublic ? 'Public' : 'Private'}</strong>
                    </li>
                    <li>
                      <i className="bi bi-clock me-2"></i>
                      Expires: <strong>
                        {shareOptions.expiresInDays === 0 ? 'Never' : `${shareOptions.expiresInDays} days`}
                      </strong>
                    </li>
                    {shareOptions.allowedUsers.length > 0 && (
                      <li>
                        <i className="bi bi-people me-2"></i>
                        Users: <strong>{shareOptions.allowedUsers.length} specified</strong>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Quick Share Actions */}
                <div className="row g-2">
                  <div className="col-6">
                    <button className="btn btn-outline-primary w-100" onClick={() => setShareLink('')}>
                      <i className="bi bi-arrow-left me-1"></i>
                      Create New Link
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-success w-100" onClick={onClose}>
                      <i className="bi bi-check me-1"></i>
                      Done
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}