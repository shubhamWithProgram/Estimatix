/**
 * DataGridHeader Usage Examples
 * 
 * This file demonstrates how to use the DataGridHeader component
 * in your Estimatix application.
 */

import { useState } from 'react'
import { DataGridHeader, DataGridHeaderPremium } from './DataGridHeader'

// Example 1: Basic Usage
export function BasicExample() {
  const [items, setItems] = useState<any[]>([])

  const handleAddItem = () => {
    setItems([...items, { id: Date.now(), name: 'New Item' }])
    console.log('Add item clicked')
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <DataGridHeader
        title="Products"
        itemCount={items.length}
        onAdd={handleAddItem}
        addButtonText="Add Product"
      />
    </div>
  )
}

// Example 2: Premium Variant
export function PremiumExample() {
  const [quotations, setQuotations] = useState([
    { id: 1, name: 'Q-001' },
    { id: 2, name: 'Q-002' },
    { id: 3, name: 'Q-003' }
  ])

  const handleAddQuotation = () => {
    const newId = quotations.length + 1
    setQuotations([...quotations, { id: newId, name: `Q-${String(newId).padStart(3, '0')}` }])
  }

  return (
    <div className="p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <DataGridHeaderPremium
        title="Quotations"
        itemCount={quotations.length}
        onAdd={handleAddQuotation}
        addButtonText="Create Quotation"
      />
      
      {/* Your DataGrid/Table Component */}
      <div className="mt-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl">
        <p className="text-white">Your data grid content here...</p>
      </div>
    </div>
  )
}

// Example 3: With Custom Styling
export function CustomExample() {
  const [itemCount, setItemCount] = useState(42)

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-950 to-purple-950 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Standard Header */}
        <DataGridHeader
          title="Inventory Items"
          itemCount={itemCount}
          onAdd={() => setItemCount(itemCount + 1)}
          addButtonText="Add Item"
        />

        {/* Premium Header */}
        <DataGridHeaderPremium
          title="Premium Inventory"
          itemCount={itemCount}
          onAdd={() => setItemCount(itemCount + 1)}
          addButtonText="Add Item"
        />
      </div>
    </div>
  )
}

// Example 4: Integration with MultiItemCalculator
export function MultiItemCalculatorExample() {
  const [items, setItems] = useState([
    { id: 1, name: 'Aluminium Window', quantity: 5, price: 12000 },
    { id: 2, name: 'Glass Panel', quantity: 10, price: 8000 },
    { id: 3, name: 'Door Frame', quantity: 2, price: 15000 }
  ])

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      quantity: 1,
      price: 0
    }
    setItems([...items, newItem])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Use Premium Header */}
        <DataGridHeaderPremium
          title="Quotation Items"
          itemCount={items.length}
          onAdd={handleAddItem}
          addButtonText="Add New Item"
        />

        {/* Your existing MultiItemCalculator table/grid */}
        <div className="mt-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-violet-500/30">
                <th className="text-left py-3">Item</th>
                <th className="text-left py-3">Quantity</th>
                <th className="text-left py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-white/10">
                  <td className="py-3">{item.name}</td>
                  <td className="py-3">{item.quantity}</td>
                  <td className="py-3">₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Example 5: Quick Integration Snippet
/*

// In your MultiItemCalculator.tsx or similar component:

import { DataGridHeaderPremium } from './DataGridHeader'

// Inside your component:
<DataGridHeaderPremium
  title="Quotation Items"
  itemCount={items.length}
  onAdd={handleAddItem}
  addButtonText="Add New Item"
/>

// Replace your existing header HTML/JSX with this component

*/

export default BasicExample
