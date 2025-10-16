// Shared Quote Viewer Component
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { quoteShareService, type SharedQuote } from '../lib/shareService'
import { useAuth } from '../lib/auth'

export default function SharedQuoteViewer() {
  const { shareToken } = useParams<{ shareToken: string }>()
  const { user } = useAuth()
  const [sharedQuote, setSharedQuote] = useState<SharedQuote | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const loadSharedQuote = async () => {
      if (!shareToken) {
        setError('Invalid share link')
        setLoading(false)
        return
      }

      try {
        const quote = await quoteShareService.getSharedQuote(shareToken)
        if (!quote) {
          setError('Quote not found or link has expired')
        } else {
          setSharedQuote(quote)
        }
      } catch (err) {
        setError('Error loading shared quote')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadSharedQuote()
  }, [shareToken])

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading shared quotation...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="text-danger mb-3">
            <i className="bi bi-exclamation-triangle display-1"></i>
          </div>
          <h3 className="text-danger">Access Denied</h3>
          <p className="text-muted">{error}</p>
          <Link to="/" className="btn btn-primary">
            <i className="bi bi-house me-1"></i>
            Go to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  if (!sharedQuote) {
    return null
  }

  const quotationData = sharedQuote.quotationData

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h5 mb-0">
                <i className="bi bi-share me-2"></i>
                Shared Quotation
              </h1>
              <small className="text-muted">
                Shared by {sharedQuote.creatorEmail}
              </small>
            </div>
            <div className="d-flex gap-2">
              {!sharedQuote.readOnly && user && (
                <span className="badge bg-success">
                  <i className="bi bi-pencil me-1"></i>
                  Collaborative Mode
                </span>
              )}
              {sharedQuote.readOnly && (
                <span className="badge bg-info">
                  <i className="bi bi-eye me-1"></i>
                  Read Only
                </span>
              )}
              <Link to="/" className="btn btn-sm btn-outline-primary">
                <i className="bi bi-box-arrow-left me-1"></i>
                Exit
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Quotation Content */}
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">
                    <i className="bi bi-file-earmark-text me-2"></i>
                    Quotation Details
                  </h5>
                  <div className="d-flex gap-2">
                    <button className="btn btn-light btn-sm">
                      <i className="bi bi-download me-1"></i>
                      Download PDF
                    </button>
                    <button className="btn btn-outline-light btn-sm">
                      <i className="bi bi-printer me-1"></i>
                      Print
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-body">
                {/* Quote Header */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="fw-bold text-primary">Quote Information</h6>
                    <table className="table table-sm table-borderless">
                      <tbody>
                        <tr>
                          <td><strong>Quote ID:</strong></td>
                          <td>{quotationData?.invoiceNumber || 'N/A'}</td>
                        </tr>
                        <tr>
                          <td><strong>Date:</strong></td>
                          <td>{quotationData?.date ? new Date(quotationData.date).toLocaleDateString() : 'N/A'}</td>
                        </tr>
                        <tr>
                          <td><strong>Status:</strong></td>
                          <td>
                            <span className="badge bg-success">Active</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold text-primary">Customer Details</h6>
                    <table className="table table-sm table-borderless">
                      <tbody>
                        <tr>
                          <td><strong>Name:</strong></td>
                          <td>{quotationData?.customerName || 'N/A'}</td>
                        </tr>
                        <tr>
                          <td><strong>Phone:</strong></td>
                          <td>{quotationData?.customerPhone || 'N/A'}</td>
                        </tr>
                        <tr>
                          <td><strong>Email:</strong></td>
                          <td>{quotationData?.customerEmail || 'N/A'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Items Table */}
                <div className="mb-4">
                  <h6 className="fw-bold text-primary mb-3">Quotation Items</h6>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>#</th>
                          <th>Item Description</th>
                          <th>Type</th>
                          <th>Dimensions</th>
                          <th>Area (sq.ft)</th>
                          <th>Rate</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quotationData?.items?.map((item: any, index: number) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name || `Item ${index + 1}`}</td>
                            <td>
                              <span className={`badge ${item.type === 'window' ? 'bg-info' : 'bg-warning'}`}>
                                {item.type}
                              </span>
                            </td>
                            <td>{item.width}" × {item.height}"</td>
                            <td>{item.area?.toFixed(2) || '0.00'}</td>
                            <td>₹{item.rate?.toFixed(2) || '0.00'}</td>
                            <td>₹{item.total?.toFixed(2) || '0.00'}</td>
                          </tr>
                        )) || (
                          <tr>
                            <td colSpan={7} className="text-center text-muted">
                              No items found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Totals */}
                <div className="row">
                  <div className="col-md-6 offset-md-6">
                    <table className="table table-sm">
                      <tbody>
                        <tr>
                          <td><strong>Subtotal:</strong></td>
                          <td className="text-end">₹{quotationData?.subtotal?.toFixed(2) || '0.00'}</td>
                        </tr>
                        <tr>
                          <td><strong>Tax (if any):</strong></td>
                          <td className="text-end">₹{quotationData?.tax?.toFixed(2) || '0.00'}</td>
                        </tr>
                        <tr className="table-primary">
                          <td><strong>Grand Total:</strong></td>
                          <td className="text-end"><strong>₹{quotationData?.grandTotal?.toFixed(2) || '0.00'}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Notes */}
                {quotationData?.notes && (
                  <div className="mt-4">
                    <h6 className="fw-bold text-primary">Notes</h6>
                    <p className="text-muted">{quotationData.notes}</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="card-footer bg-light">
                <div className="row">
                  <div className="col-md-6">
                    <small className="text-muted">
                      <i className="bi bi-calendar me-1"></i>
                      Shared on {new Date(sharedQuote.createdAt).toLocaleDateString()}
                      {sharedQuote.expiresAt && (
                        <>
                          <br />
                          <i className="bi bi-clock me-1"></i>
                          Expires on {new Date(sharedQuote.expiresAt).toLocaleDateString()}
                        </>
                      )}
                    </small>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <small className="text-muted">
                      Powered by Estimatix
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}