import { useMemo, useState, useEffect } from 'react'
// Lazy-load heavy libs to reduce initial bundle size
let _jsPDF
async function getJspdf() {
  if (!_jsPDF) {
    const mod = await import('jspdf')
    _jsPDF = mod.jsPDF
  }
  return _jsPDF
}

let _XLSX
async function getXlsx() {
  if (!_XLSX) {
    const mod = await import('xlsx')
    _XLSX = mod
  }
  return _XLSX
}
import { saveAs } from 'file-saver'
import {dejavuFontBase64} from './DejaVuSans-base64.js';


const GLASS_WEIGHT_PER_M2 = {
  '4mm': 10,
  '5mm': 12.5,
  '6mm': 15,
  '24mm DG': 22,
}

const PROFILE_WEIGHT_PER_M = {
  'Series 45': 2.5,
  'Series 60': 3.8,
  'Series 75': 4.5,
  'Sliding Light': 2.2,
  'Sliding Heavy': 5.0,
}

// Stable component to avoid remounts that cause input focus loss
const Card = ({ children }) => (
  <div 
    className="card border-0 shadow-sm rounded-4 mb-3"
    style={{ transition: 'all 0.3s ease' }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'}
  >
    {children}
  </div>
)

export default function Calculator() {
  // Keep inputs as strings; parse only in calculations to avoid remounts / focus loss.
  const [widthMm, setWidthMm] = useState('0')
  const [heightMm, setHeightMm] = useState('0')

  const [glassType, setGlassType] = useState('Clear') // Clear, Toughened, Reflective, Double Glazed
  const [thicknessMm, setThicknessMm] = useState(5)   // slider can stay numeric

  const [profile, setProfile] = useState('Series 60')
  const [finish, setFinish] = useState('Powder Coated') // Powder Coated, Anodized

  const [costPerKg, setCostPerKg] = useState('0')
  const [accessoriesKg, setAccessoriesKg] = useState('0')

  const [projectName, setProjectName] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [profitMargin, setProfitMargin] = useState('10')
  const [discount, setDiscount] = useState('0')
  const [recommendation, setRecommendation] = useState('')

  // Unit system: 'mm' or 'inch'
  const [unit, setUnit] = useState(localStorage.getItem('unit') || 'mm')
  useEffect(() => { localStorage.setItem('unit', unit) }, [unit])
  const mmPerInch = 25.4
  const toDisplay = (mm) => unit === 'mm' ? String(mm) : (Number(mm) / mmPerInch).toFixed(3)
  const fromDisplay = (val) => {
    const n = Number(val)
    if (!isFinite(n)) return '0'
    return unit === 'mm' ? String(n) : String(Math.round(n * mmPerInch))
  }

  const [customerName, setCustomerName] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [gstPercent, setGstPercent] = useState('18')
  const [deliveryCharge, setDeliveryCharge] = useState('0')
  const [laborCharge, setLaborCharge] = useState('0')
  const [terms, setTerms] = useState("1. Prices are valid for 15 days.\n2. Delivery within 7 working days.\n3. Payment: 50% advance, balance on delivery.")

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  // 🌙 Apply theme (doesn't affect inputs)
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // 👉 Guidance text
  useEffect(() => {
    const w = Number(widthMm) / 1000 || 0
    const h = Number(heightMm) / 1000 || 0
    let rec = ''
    if (h > 2.1 || w > 1.5) rec = '⚠️ Consider Series 75 or Sliding Heavy for better strength.'
    else if (h > 1.8) rec = '👉 Series 60 is usually sufficient for medium frames.'
    else rec = '✅ Series 45 is fine for small windows.'
    if (thicknessMm < 5 && (w > 1.2 || h > 1.8)) rec += ' ⚠️ Glass may be too thin for this size.'
    setRecommendation(rec)
  }, [widthMm, heightMm, thicknessMm])

  const results = useMemo(() => {
    const widthM = (Number(widthMm) || 0) / 1000
    const heightM = (Number(heightMm) || 0) / 1000
    const areaM2 = widthM * heightM

    // choose density
    let baseDensity
    if (glassType === 'Double Glazed') {
      baseDensity = 22
    } else if (['4mm','5mm','6mm','24mm DG'].includes(String(thicknessMm)+'mm')) {
      baseDensity = GLASS_WEIGHT_PER_M2[String(thicknessMm)+'mm'] || thicknessMm * 2.5
    } else {
      baseDensity = thicknessMm * 2.5
    }
    const typeFactor = glassType === 'Toughened' ? 1.1 : glassType === 'Reflective' ? 1.05 : 1
    const glassWeight = areaM2 * baseDensity * typeFactor
    const perimeterM = 2 * (widthM + heightM)
    const aluminiumWeight = perimeterM * PROFILE_WEIGHT_PER_M[profile]
    const accessories = Number(accessoriesKg) || 0
    const totalWeight = glassWeight + aluminiumWeight + accessories
    const finishFactor = finish === 'Anodized' ? 1.08 : 1.05
    const estimatedCost = totalWeight * (Number(costPerKg) || 0) * finishFactor
    const finalCost = estimatedCost * (1 + (Number(profitMargin) || 0) / 100) * (1 - (Number(discount) || 0) / 100)

    return { areaM2, glassWeight, perimeterM, aluminiumWeight, accessories, totalWeight, estimatedCost, finalCost, baseDensity: baseDensity*typeFactor }
  }, [widthMm, heightMm, glassType, thicknessMm, profile, costPerKg, accessoriesKg, finish, profitMargin, discount])

  const quotation = useMemo(() => {
    const subtotal = results.finalCost + (Number(deliveryCharge) || 0) + (Number(laborCharge) || 0)
    const gstAmount = subtotal * ((Number(gstPercent) || 0) / 100)
    const grandTotal = subtotal + gstAmount
    return { subtotal, gstAmount, grandTotal }
  }, [results.finalCost, deliveryCharge, laborCharge, gstPercent])

  const rows = useMemo(() => [
    { label: 'Profile', value: `${profile} (${PROFILE_WEIGHT_PER_M[profile]} kg/m)` },
    { label: 'Glass Area', value: `${results.areaM2.toFixed(3)} m²` },
    { label: 'Glass Weight', value: `${results.glassWeight.toFixed(2)} kg` },
    { label: 'Aluminium Weight', value: `${results.aluminiumWeight.toFixed(2)} kg` },
    { label: 'Accessories', value: `${results.accessories.toFixed(2)} kg` },
    { label: 'Total Weight', value: `${results.totalWeight.toFixed(2)} kg` },
    { label: 'Estimated Cost', value: `₹ ${results.estimatedCost.toFixed(2)}` },
    { label: 'Final Quotation', value: `₹ ${results.finalCost.toFixed(2)}` },
  ], [results, profile])

  // Language support (English/Hindi)
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')
  useEffect(() => { localStorage.setItem('lang', lang) }, [lang])
  const t = (en, hi) => lang === 'hi' ? hi : en

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

async function exportExcel() {
  const XLSX = await getXlsx();

  const wb = XLSX.utils.book_new();
  const wsData = [];

  // 1️⃣ Header
  wsData.push(['|| JAI VENKATESH ||']);
  wsData.push(['VENKATESH ALUMINIUM']);
  wsData.push(['Windows & Doors • Glass Solutions']);
  wsData.push(['Ram Nagar, Dhule | +91 9673705228 | venkateshaluminum@gmail.com']);
  wsData.push([]);

  // 2️⃣ Quotation Info
  const dateStr = new Date().toLocaleDateString();
  const quoteNo = `Q${Date.now().toString().slice(-6)}`;
  wsData.push(['Quotation', quoteNo]);
  wsData.push(['Date', dateStr]);
  wsData.push(['Project', projectName || '']);
  wsData.push([]);

  // 3️⃣ Customer Info
  wsData.push(['BILL TO']);
  wsData.push(['Customer Name', customerName]);
  wsData.push(['Customer Address / Site', customerAddress]);
  wsData.push([]);

  // 4️⃣ Project Specs
  wsData.push(['PROJECT SPECIFICATIONS']);
  wsData.push(['Dimensions (mm)', `${widthMm} x ${heightMm}`]);
  wsData.push(['Glass Type', glassType]);
  wsData.push(['Glass Thickness (mm)', thicknessMm]);
  wsData.push(['Profile', profile]);
  wsData.push(['Finish', finish]);
  wsData.push(['Glass Area (m²)', results.areaM2.toFixed(3)]);
  wsData.push(['Glass Weight (kg)', results.glassWeight.toFixed(2)]);
  wsData.push(['Aluminium Weight (kg)', results.aluminiumWeight.toFixed(2)]);
  wsData.push(['Accessories (kg)', results.accessories.toFixed(2)]);
  wsData.push(['Total Weight (kg)', results.totalWeight.toFixed(2)]);
  wsData.push([]);

  // 5️⃣ Components Table Header
  wsData.push(['Component', 'Weight (kg)', 'Amount (₹)']);
  wsData.push([
    'Glass', 
    results.glassWeight.toFixed(2), 
    (results.glassWeight * (Number(costPerKg) || 0) * (finish==='Anodized'?1.08:1.05) || 0).toFixed(2)
  ]);
  wsData.push([
    'Aluminium Profile', 
    results.aluminiumWeight.toFixed(2), 
    (results.aluminiumWeight * (Number(costPerKg) || 0) * (finish==='Anodized'?1.08:1.05) || 0).toFixed(2)
  ]);
  wsData.push([
    'Accessories', 
    results.accessories.toFixed(2), 
    (results.accessories * (Number(costPerKg) || 0) || 0).toFixed(2)
  ]);
  wsData.push([]);

  // 6️⃣ Totals
  const subtotal = results.finalCost + (Number(deliveryCharge) || 0) + (Number(laborCharge) || 0);
  const gstAmount = subtotal * ((Number(gstPercent) || 0) / 100);
  const grandTotal = subtotal + gstAmount;

  wsData.push(['Final Quotation', results.finalCost.toFixed(2)]);
  wsData.push(['Delivery Charge', deliveryCharge]);
  wsData.push(['Labor Charge', laborCharge]);
  wsData.push(['Subtotal', subtotal.toFixed(2)]);
  wsData.push([`GST (${gstPercent}%)`, gstAmount.toFixed(2)]);
  wsData.push(['Grand Total', grandTotal.toFixed(2)]);
  wsData.push([]);

  // 7️⃣ Terms & Conditions
  wsData.push(['TERMS & CONDITIONS']);
  wsData.push(...terms.split('\n').map(line => [line]));

  // Create worksheet
  const ws = XLSX.utils.aoa_to_sheet(wsData);

  // Column widths
  ws['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 15 }];

  // Style headers and totals
  const headerColor = 'FF008060';  // Dark green for PDF header color
  const tableHeaderColor = 'FF008080'; // Teal for table header
  const totalBgColor = 'FF00C080'; // Greenish for totals

  const range = XLSX.utils.decode_range(ws['!ref']);
  for(let R = range.s.r; R <= range.e.r; ++R) {
    for(let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({r:R, c:C});
      const cell = ws[cellAddress];
      if(!cell) continue;

      // Bold first row (JAI VENKATESH header)
      if(R <= 3) {
        cell.s = { font: { bold: true, color: { rgb: 'FF000000' }, sz: 14 } };
      }

      // Components Table Header
      if(R === wsData.findIndex(r=>r[0]==='Component')) {
        cell.s = { 
          font: { bold: true, color: { rgb: 'FFFFFFFF' } },
          fill: { fgColor: { rgb: tableHeaderColor } },
          alignment: { horizontal: 'center', vertical: 'center' },
          border: { 
            top: {style:'thin'}, bottom:{style:'thin'}, left:{style:'thin'}, right:{style:'thin'}
          }
        };
      }

      // Grand Total row
      const grandTotalRow = wsData.findIndex(r=>r[0]==='Grand Total');
      if(R === grandTotalRow) {
        cell.s = {
          font: { bold: true, color: { rgb: 'FFFFFFFF' } },
          fill: { fgColor: { rgb: totalBgColor } },
          alignment: { horizontal: 'right', vertical: 'center' },
          border: { top:{style:'thin'}, bottom:{style:'thin'}, left:{style:'thin'}, right:{style:'thin'}}
        };
      }

      // Add borders for all data cells
      if(!cell.s) cell.s = {};
      cell.s.border = {
        top:{style:'thin'}, bottom:{style:'thin'}, left:{style:'thin'}, right:{style:'thin'}
      };
    }
  }

  XLSX.utils.book_append_sheet(wb, ws, 'Quotation');
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array', cellStyles:true });
  saveAs(new Blob([wbout], { type: 'application/octet-stream' }), `${projectName || 'Quotation'}.xlsx`);
}



  function saveProject() {
    const item = {
      ts: Date.now(),
      name: projectName || `Estimate ${new Date().toLocaleString()}`,
      state: { widthMm, heightMm, glassType, thicknessMm, profile, finish, costPerKg, accessoriesKg }
    }
    const list = JSON.parse(localStorage.getItem('estimates') || '[]')
    list.unshift(item)
    localStorage.setItem('estimates', JSON.stringify(list.slice(0,20)))
    setRecentEstimates(list.slice(0,20))
    setProjectName('')
  }

  function loadProject(item) {
    setWidthMm(item.state.widthMm)
    setHeightMm(item.state.heightMm)
    setGlassType(item.state.glassType)
    setThicknessMm(item.state.thicknessMm)
    setProfile(item.state.profile)
    setFinish(item.state.finish)
    setCostPerKg(item.state.costPerKg)
    setAccessoriesKg(item.state.accessoriesKg)
  }

  function generateShare() {
    const params = new URLSearchParams({
      w: String(widthMm), h: String(heightMm), gt: glassType, t: String(thicknessMm), p: profile, f: finish, c: String(costPerKg), a: String(accessoriesKg)
    }).toString()
    const url = `${location.origin}${location.pathname}?${params}`
    navigator.clipboard?.writeText(url).catch(()=>{})
    setShareUrl(url)
    const modal = new window.bootstrap.Modal(document.getElementById('shareModal'))
    modal.show()
  }

async function getJspdf() {
  const { jsPDF } = await import('jspdf');
  return jsPDF;
}


function buildPdf(doc, {
  widthMm, 
    heightMm, 
    glassType, 
    thicknessMm, 
    profile, 
    finish, 
    customerName, 
    customerAddress, 
    results, 
    quotation, 
    deliveryCharge, 
    laborCharge, 
    gstPercent, 
    terms, 
    projectName 
} = {}) {

  const pageW = 210, pageH = 297;
  const margin = 16;
  const usableW = pageW - margin * 2;

  // 🎨 Theme colors
  const primary = [0, 128, 96];
  const accent = [230, 247, 239];
  const gray = [60, 60, 60];

  // ✅ Font
  doc.addFileToVFS('DejaVuSans.ttf', dejavuFontBase64);
  doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal');
  doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'bold');
  doc.setFont('DejaVuSans', 'normal');

  // 🧭 Header Box first
  doc.setFillColor(...accent);
  doc.rect(0, 0, pageW, 35, 'F');
  const headerText = '|| JAI VENKATESH ||';
  doc.setFont('DejaVuSans', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...primary); // set color for text
  const textWidth = doc.getTextWidth(headerText);
  const xh = (pageW - textWidth) / 2;
  doc.text(headerText, xh, 12); // y = 12 mm from top
  // 🧭 Header
  doc.setFillColor(...accent);
  doc.rect(0, 0, pageW, 35, 'F');

  doc.setFont('DejaVuSans', 'bold');
  doc.setTextColor(...primary);
  doc.setFontSize(16);
  doc.text('VENKATESH ALUMINIUM', margin, 18);

  doc.setFont('DejaVuSans', 'normal');
  doc.setFontSize(9);
  doc.text('Windows & Doors • Glass Solutions', margin, 26);
  doc.text('Ram Nagar, Dhule | +91 9673705228 | venkateshaluminum@gmail.com', margin, 32);

  doc.setFont('DejaVuSans', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primary);
  doc.text('QUOTATION', pageW - margin - 45, 20);

  // 🧾 Bill To
  let y = 50;
  doc.setDrawColor(200);
  doc.roundedRect(margin, y, usableW, 30, 2, 2);

  doc.setFont('DejaVuSans', 'bold');
  doc.setTextColor(...gray);
  doc.text('BILL TO', margin + 4, y + 8);

  doc.setFont('DejaVuSans', 'bold');
const key1 = 'Customer Name:';
doc.text(key1, margin + 4, y + 16);

doc.setFont('DejaVuSans', 'normal');
const key1Width = doc.getTextWidth(key1); // get width of the key text
doc.text(customerName || '', margin + 4 + key1Width + 2, y + 16); // add 2 units spacing between key and value

  doc.setFont('DejaVuSans', 'bold');
  doc.text('Customer Address / Site:', margin + 4, y + 24);

  doc.setFont('DejaVuSans', 'normal');
  doc.text(customerAddress || '', margin + 50, y + 24);

  const dateStr = new Date().toLocaleDateString();
  const quoteNo = `Q${Date.now().toString().slice(-6)}`;
  doc.text(`Date: ${dateStr}`, pageW - margin - 60, y + 10);
  doc.text(`Quote #: ${quoteNo}`, pageW - margin - 60, y + 20);

  // 📋 Project Specifications
  y += 42;
  doc.setFillColor(242, 242, 242);
  doc.rect(margin, y, usableW, 10, 'F');
  doc.setFont('DejaVuSans', 'bold');
  doc.setTextColor(...gray);
  doc.text('PROJECT SPECIFICATIONS', margin + 4, y + 7);

  // Specs table
  y += 15;
  doc.setFont('DejaVuSans', 'normal');
  const specs = [
    ['Dimensions', `${widthMm} x ${heightMm} mm`],
    ['Glass', `${glassType} (${thicknessMm}mm)`],
    ['Profile', profile],
    ['Finish', finish],
    ['Glass Area', `${(results.areaM2 || 0).toFixed(3)} m²`],
    ['Glass Weight', `${(results.glassWeight || 0).toFixed(2)} kg`],
    ['Aluminium Weight', `${(results.aluminiumWeight || 0).toFixed(2)} kg`],
    ['Accessories', `${(results.accessories || 0).toFixed(2)} kg`],
    ['Total Weight', `${(results.totalWeight || 0).toFixed(2)} kg`]
  ];

  specs.forEach(([key, val], i) => {
    const rowY = y + i * 6;
    doc.text(`${key}:`, margin + 4, rowY);
    doc.text(`${val}`, margin + usableW / 2, rowY);
  });

  y += specs.length * 6 + 12;

  // 📊 Table Header
  const tableY = y;
  const colWidths = [usableW * 0.5, usableW * 0.25, usableW * 0.25];
  const rowH = 8;

  doc.setFillColor(...primary);
  doc.setTextColor(255, 255, 255);
  doc.rect(margin, tableY, usableW, rowH, 'F');
  doc.setFont('DejaVuSans', 'bold');

  let x = margin + 4;
  doc.text('Component', x, tableY + 6);
  x += colWidths[0];
  doc.text('Weight (kg)', x + colWidths[1] / 2, tableY + 6, { align: 'center' });
  x += colWidths[1];
  doc.text('Amount (₹)', x + colWidths[2] / 2, tableY + 6, { align: 'center' });

  // 📋 Table Rows
  const rows = [
    ['Glass', (results.glassWeight || 0).toFixed(2), (results.glassCost || 0).toFixed(2)],
    ['Aluminium Profile', (results.aluminiumWeight || 0).toFixed(2), (results.profileCost || 0).toFixed(2)],
    ['Accessories', (results.accessories || 0).toFixed(2), (results.accessoryCost || 0).toFixed(2)]
  ];

  let curY = tableY + rowH;
  doc.setFont('DejaVuSans', 'normal');
  doc.setFontSize(9);

  rows.forEach((r, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(...accent);
      doc.rect(margin, curY, usableW, rowH, 'F');
    }
    doc.setDrawColor(220);
    doc.rect(margin, curY, usableW, rowH);

    doc.setTextColor(...gray);
    let rx = margin + 4;
    doc.text(r[0], rx, curY + 6);
    rx += colWidths[0];
    doc.text(r[1], rx + colWidths[1] / 2, curY + 6, { align: 'center' });
    rx += colWidths[1];
    doc.text(`₹ ${r[2]}`, rx + colWidths[2] / 2, curY + 6, { align: 'center' });

    curY += rowH;
  });

  // 💰 Totals Box
  curY += 9;
  const totalsX = pageW - margin - 90;
  const totalsW = 90;

  doc.roundedRect(totalsX, curY, totalsW, 48, 2, 2, 'S');

  doc.setFontSize(8.5);
  doc.setFont('DejaVuSans', 'normal');
  doc.setTextColor(...gray);

    const totals = [
  ['Final Quotation', Number(results.finalCost) || 0],
  ['Delivery', Number(deliveryCharge) || 0],
  ['Labor', Number(laborCharge) || 0],
  ['Subtotal', Number(quotation?.subtotal) || (Number(results.finalCost) + Number(deliveryCharge) + Number(laborCharge))],
  [`GST (${gstPercent}%)`, Number(quotation?.gstAmount) || 0],
  ['Grand Total', Number(quotation?.grandTotal) || 0]
];

  let tY = curY + 8;
  totals.forEach(([label, value], i) => {
    if (i === totals.length - 1) {
      doc.setFillColor(...primary);
      doc.rect(totalsX, tY - 4, totalsW, 10, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('DejaVuSans', 'bold');
    } else {
      doc.setTextColor(...gray);
      doc.setFont('DejaVuSans', 'normal');
    }
    doc.text(label, totalsX + 6, tY);
    doc.text(`₹ ${(value || 0).toFixed(2)}`, totalsX + totalsW - 6, tY, { align: 'right' });
    tY += 8;
  });

  // 📜 Terms & Conditions (Beside Totals Box)
  const termsBoxX = margin;
  const termsBoxY = curY;
  const termsBoxW = pageW - margin * 2 - totalsW - 6; // left side of totals box
  const termsBoxH = 48; // align height with totals box

  doc.roundedRect(termsBoxX, termsBoxY, termsBoxW, termsBoxH, 2, 2, 'S');

  doc.setFont('DejaVuSans', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...gray);
  doc.text('TERMS & CONDITIONS', termsBoxX + 4, termsBoxY + 8);

  doc.setFont('DejaVuSans', 'normal');
  doc.setFontSize(8.5);
  const splitTerms = doc.splitTextToSize(terms, termsBoxW - 8);
  doc.text(splitTerms, termsBoxX + 4, termsBoxY + 14);

  // Footer
  const footerY = pageH - 20;
  doc.setDrawColor(220);
  doc.line(margin, footerY - 6, pageW - margin, footerY - 6);

  doc.setFontSize(8);
  doc.setFont('DejaVuSans', 'normal');
  doc.setTextColor(...gray);
  doc.text('If you have any questions about this quotation, please contact:', margin, footerY);
  doc.text('Venkatesh Aluminium | +91 9673705228 | venkateshaluminum@gmail.com', margin, footerY + 5);

  doc.setFont('DejaVuSans', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primary);
  doc.text('Thank you for your business!', pageW / 2, footerY + 14, { align: 'center' });
}



  async function exportPDFBlob() {
    const jsPDF = await getJspdf()
    const doc = new jsPDF()
    buildPdf(doc, { 
    widthMm, 
    heightMm, 
    glassType, 
    thicknessMm, 
    profile, 
    finish, 
    customerName, 
    customerAddress, 
    results, 
    quotation, 
    deliveryCharge, 
    laborCharge, 
    gstPercent, 
    terms, 
    projectName 
  })
    return doc.output('blob')
  }

  const exportPDF = async () => {
    const jsPDF = await getJspdf()
    const doc = new jsPDF()
     buildPdf(doc, { 
    widthMm, 
    heightMm, 
    glassType, 
    thicknessMm, 
    profile, 
    finish, 
    customerName, 
    customerAddress, 
    results, 
    quotation, 
    deliveryCharge, 
    laborCharge, 
    gstPercent, 
    terms, 
    projectName 
  })
    doc.save(`${projectName || "Quotation"}.pdf`)
  }

  // Share helpers
  async function shareViaWhatsApp() {
    try {
      const blob = await exportPDFBlob()
      const file = new File([blob], `${projectName || 'Quotation'}.pdf`, { type: 'application/pdf' })
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Quotation', text: projectName || 'Quotation' })
        return
      }
    } catch {}
    // Fallback to link share
    const params = new URLSearchParams({ w: String(widthMm), h: String(heightMm), gt: glassType, t: String(thicknessMm), p: profile, f: finish, c: String(costPerKg), a: String(accessoriesKg) }).toString()
    const url = `${location.origin}/venkatesh_aluminium/?${params}`
    const wa = `https://wa.me/?text=${encodeURIComponent(`Quotation: ${projectName || ''}\n${url}`)}`
    window.open(wa, '_blank')
  }

  function shareViaEmail() {
    const subject = encodeURIComponent(projectName || 'Quotation')
    const bodyTop = `Final Amount: ₹ ${quotation.grandTotal.toFixed(2)}\nProfile: ${profile}\nGlass: ${glassType} ${thicknessMm}mm\n`
    const params = new URLSearchParams({ w: String(widthMm), h: String(heightMm), gt: glassType, t: String(thicknessMm), p: profile, f: finish, c: String(costPerKg), a: String(accessoriesKg) }).toString()
    const url = `${location.origin}/venkatesh_aluminium/?${params}`
    window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(bodyTop)}%0A${encodeURIComponent(url)}`
  }

  

  // Track recent estimates and keep in sync after save/load
  const [recentEstimates, setRecentEstimates] = useState(() => {
    try { return JSON.parse(localStorage.getItem('estimates') || '[]') } catch { return [] }
  })
  useEffect(() => {
    const handler = () => {
      try { setRecentEstimates(JSON.parse(localStorage.getItem('estimates') || '[]')) } catch { /* noop */ }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  return (
    <div className="min-vh-100 bg-body">
      <header className="sticky-top bg-body border-bottom" style={{zIndex: 1030}}>
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div>
              <h1 className="h5 mb-0">Venkatesh Aluminium and Glass</h1>
              <small className="text-body-secondary">{t('Windows & Doors • Weight & Cost Estimator', 'खिड़की व दरवाजे • वजन व लागत अनुमापक')}</small>
            </div>
          </div>
          <div className="btn-toolbar gap-2 justify-content-end">
            <div className="btn-group btn-group-sm" role="group" aria-label="Unit toggle">
              <button className={`btn btn-outline-secondary ${unit==='mm'?'active':''}`} onClick={()=>setUnit('mm')}>mm</button>
              <button className={`btn btn-outline-secondary ${unit==='inch'?'active':''}`} onClick={()=>setUnit('inch')}>in</button>
            </div>
            <div className="btn-group btn-group-sm" role="group">
              <select className="form-select form-select-sm" style={{minWidth:30}} value={lang} onChange={e=>setLang(e.target.value)} aria-label="Language">
                <option value="en">EN</option>
                <option value="hi">HI</option>
              </select>
              <button
                onClick={toggleTheme}
                className="btn btn-outline-secondary"
                title="Toggle light/dark"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-4 py-md-5">
        <div className="row g-4 g-lg-5">
          <section className="col-lg-7 d-flex flex-column gap-4">
            <Card>
              <div 
                className="card-header fw-semibold text-white rounded-top-4" 
                style={{ background: 'linear-gradient(135deg, #0d6efd, #20c997)', fontSize: '0.95rem', letterSpacing: '0.5px' }}
              >
                {t('Project Setup','प्रोजेक्ट सेटअप')}
              </div>
              <div className="card-body">
                <div className="row g-2 g-sm-3">
                  {[{ w: 900, h: 1200, label: 'Std. Window' }, { w: 1200, h: 2100, label: 'Door Single' }, { w: 1800, h: 2100, label: 'Door Double' }].map(preset => (
                    <div className="col-6 col-sm-4" key={preset.label}>
                      <button
                        onClick={() => { setWidthMm(String(preset.w)); setHeightMm(String(preset.h)); }}
                        className="btn btn-outline-secondary w-100 text-start"
                      >
                        <div className="fw-semibold small">{preset.label}</div>
                        <div className="text-body-secondary small">{preset.w} × {preset.h} mm</div>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="row g-2 mt-3">
                  <div className="col-8 col-md-6">
                    <input className="form-control" placeholder={t('Project name','प्रोजेक्ट नाम')} value={projectName} onChange={e=>setProjectName(e.target.value)} />
                  </div>
                  <div className="col-4 col-md-6 d-flex gap-2">
                    {/* fixed invalid tag <buttonc> */}
                    <button className="btn btn-primary" onClick={saveProject}>{t('Save','सेव')}</button>
                    <button className="btn btn-outline-primary" onClick={generateShare}>{t('Share','शेयर')}</button>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="card-header bg-body-tertiary"><strong>📏 {t('Dimensions','माप')}</strong></div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">{t('Width','चौड़ाई')}</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        value={toDisplay(widthMm)}
                        onChange={e => setWidthMm(fromDisplay(e.target.value))}
                        placeholder="0"
                        aria-label="Width in millimeters"
                        min={0}
                      />
                      <span className="input-group-text">{unit==='mm'?'mm':'in'}</span>
                    </div>
                    <div className="form-text">{t('Measure visible frame width.','दिखने वाले फ्रेम की चौड़ाई नापें।')}</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Height','ऊँचाई')}</label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        value={toDisplay(heightMm)}
                        onChange={e => setHeightMm(fromDisplay(e.target.value))}
                        placeholder="0"
                        aria-label="Height in millimeters"
                        min={0}
                      />
                      <span className="input-group-text">{unit==='mm'?'mm':'in'}</span>
                    </div>
                    <div className="form-text">{t('Measure visible frame height.','दिखने वाले फ्रेम की ऊँचाई नापें।')}</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="card-header bg-body-tertiary"><strong>⚙️ {t('Configuration','कॉन्फ़िगरेशन')}</strong></div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">🪟 {t('Glass type','काँच प्रकार')}</label>
                    <select className="form-select" value={glassType} onChange={e => setGlassType(e.target.value)}>
                      {['Clear','Toughened','Reflective','Double Glazed'].map(opt => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                    <div className="form-text">{t('Density auto:','घनत्व:')} {results.baseDensity.toFixed(2)} kg/m²</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Glass thickness','काँच मोटाई')} ({glassType==='Double Glazed' ? 'fixed 24mm' : `${thicknessMm}mm`})</label>
                    {glassType==='Double Glazed' ? (
                      <input type="text" className="form-control" value="24" disabled />
                    ) : (
                      <input type="range" min={3.5} max={12} step={0.5} className="form-range" value={thicknessMm} onChange={e=>setThicknessMm(Number(e.target.value))} />
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Profile','प्रोफ़ाइल')}</label>
                    <select className="form-select" value={profile} onChange={e => setProfile(e.target.value)} aria-label="Aluminium profile">
                      {['Series 45','Series 60','Series 75','Sliding Light','Sliding Heavy'].map(opt => (
                        <option key={opt} value={opt}>{opt} = {PROFILE_WEIGHT_PER_M[opt]} kg/m</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Finish','फिनिश')}</label>
                    <select className="form-select" value={finish} onChange={e=>setFinish(e.target.value)}>
                      {['Powder Coated','Anodized'].map(opt => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Accessories (kg)','एक्सेसरीज़ (किग्रा)')}</label>
                    <div className="input-group">
                      <span className="input-group-text">kg</span>
                      <input
                        type="number"
                        className="form-control"
                        value={accessoriesKg}
                        onChange={e => setAccessoriesKg(e.target.value)}
                        placeholder="0"
                        aria-label="Accessories in kilograms"
                        min={0}
                      />
                    </div>
                    <div className="form-text">{t('Manual accessories weight.','एक्सेसरीज़ का मैनुअल वज़न।')}</div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <label className="form-label">{t('Cost per Kg','क़ीमत प्रति किग्रा')}</label>
                    <div className="input-group">
                      <span className="input-group-text">₹</span>
                      <input
                        type="number"
                        className="form-control"
                        value={costPerKg}
                        onChange={e => setCostPerKg(e.target.value)}
                        placeholder="0"
                        aria-label="Cost per kilogram in rupees"
                        min={0}
                      />
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={600}
                      step={10}
                      className="form-range mt-2"
                      value={costPerKg || '0'}
                      onChange={e=>setCostPerKg(e.target.value)}
                    />
                    <div className="form-text">{t('Market average ~ ₹250–₹350/kg. Adjust as needed.','मार्केट औसत ~ ₹250–₹350/किग्रा. आवश्यकतानुसार बदलें।')}</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Profit Margin (%)','मुनाफ़ा मार्जिन (%)')}</label>
                    <input
                      type="number"
                      className="form-control"
                      value={profitMargin}
                      onChange={(e) => setProfitMargin(e.target.value)}
                      min={0}
                      max={100}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">{t('Discount (%)','छूट (%)')}</label>
                    <input
                      type="number"
                      className="form-control"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      min={0}
                      max={100}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card>
                <div className="card-header bg-body-tertiary">
                  <strong>📄 {t('Quotation Builder','कोटेशन बिल्डर')}</strong>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">{t('Customer Name','ग्राहक नाम')}</label>
                      <input type="text" className="form-control" value={customerName} onChange={e => setCustomerName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">{t('Customer Address / Site','ग्राहक पता / साइट')}</label>
                      <input type="text" className="form-control" value={customerAddress} onChange={e => setCustomerAddress(e.target.value)} />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">GST (%)</label>
                      <input type="number" className="form-control" value={gstPercent} onChange={e => setGstPercent(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">{t('Delivery Charge (₹)','डिलीवरी शुल्क (₹)')}</label>
                      <input type="number" className="form-control" value={deliveryCharge} onChange={e => setDeliveryCharge(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">{t('Labor Charge (₹)','मजदूरी शुल्क (₹)')}</label>
                      <input type="number" className="form-control" value={laborCharge} onChange={e => setLaborCharge(e.target.value)} />
                    </div>

                    <div className="col-12">
                      <label className="form-label">{t('Terms & Conditions','नियम व शर्तें')}</label>
                      <textarea className="form-control" rows={4} value={terms} onChange={e => setTerms(e.target.value)} />
                    </div>
                  </div>
                </div>
              </Card>
          </section>

          <aside className="col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header bg-body-tertiary"><strong>📄 Results</strong></div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {rows.map(r => (
                    <li key={r.label} className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="text-body-secondary">{r.label}</span>
                      <span className={`fw-semibold ${
                          r.label.includes('Cost') ? 'text-success' :
                          r.label.includes('Aluminium') ? 'text-secondary' : 'text-primary'
                        }`}>
                          {r.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="row g-3 p-3">
                  <div className="col-sm-6">
                   <div className="rounded-4 p-3 h-100 shadow-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(192,192,192,0.25), rgba(192,192,192,0.05))', 
                      border: '1px solid rgba(192,192,192,.35)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = 'translateY(-4px)'; 
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = 'translateY(0)'; 
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}>
                    <div className="text-uppercase small fw-semibold text-secondary">Total Weight</div>
                    <div className="fs-4 fw-bold text-secondary">{results.totalWeight.toFixed(2)} kg</div>
                  </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="rounded p-3 h-100" 
                      style={{background:'linear-gradient(135deg, rgba(25,135,84,.15), rgba(25,135,84,.05))', border:'1px solid rgba(25,135,84,.25)'}}>
                    <div className="text-uppercase small fw-semibold text-success">Estimated Cost</div>
                    <div className="fs-4 fw-bold text-success">₹ {results.estimatedCost.toFixed(2)}</div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-grid d-sm-flex gap-2 justify-content-end">
                <div className="me-auto small text-body-secondary d-none d-sm-block">Accessories fixed at 2 kg. Perimeter = 2 × (W + H).</div>
                <button className="btn btn-danger btn-lg flex-fill flex-sm-grow-0" onClick={exportPDF} title="Export as PDF">📝 PDF</button>
                <button className="btn btn-success btn-lg flex-fill flex-sm-grow-0" onClick={exportExcel} title="Export as Excel">📊 Excel</button>
              </div>
            </div>

            <Card>
              <div className="card-header bg-body-tertiary"><strong>Recent Calculations</strong></div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush" id="recentList">
                  {recentEstimates.slice(0,6).map(it => {
                    let startX = 0
                    const onTouchStart = (e) => { startX = e.touches[0].clientX }
                    const onTouchEnd = (e) => {
                      const dx = e.changedTouches[0].clientX - startX
                      if (dx < -60) {
                        if (confirm('Delete this estimate?')) {
                          const list = recentEstimates.filter(x => x.ts !== it.ts)
                          localStorage.setItem('estimates', JSON.stringify(list))
                          setRecentEstimates(list)
                        }
                      } else if (dx > 60) {
                        const copy = { ...it, ts: Date.now(), name: `${it.name} (copy)` }
                        const list = [copy, ...recentEstimates]
                        localStorage.setItem('estimates', JSON.stringify(list.slice(0,20)))
                        setRecentEstimates(list.slice(0,20))
                      }
                    }
                    const onContextMenu = (e) => {
                      e.preventDefault()
                      const name = prompt('Rename', it.name)
                      if (name && name.trim()) {
                        const list = recentEstimates.map(x => x.ts === it.ts ? { ...x, name } : x)
                        localStorage.setItem('estimates', JSON.stringify(list))
                        setRecentEstimates(list)
                      }
                    }
                    return (
                      <li key={it.ts} className="list-group-item d-flex justify-content-between align-items-center" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onContextMenu={onContextMenu}>
                        <button className="btn btn-link p-0" onClick={()=>loadProject(it)} title="Load project">{it.name}</button>
                        <span className="text-body-secondary small">{new Date(it.ts).toLocaleDateString()}</span>
                      </li>
                    )
                  })}
                  {!recentEstimates.length && (
                    <li className="list-group-item text-body-secondary small">No saved estimates yet.</li>
                  )}
                </ul>
              </div>
            </Card>
          </aside>
        </div>
      </main>
        <footer className="py-4 text-center small text-body-secondary">© {new Date().getFullYear()} Venkatesh Aluminium and Glass • Designed by <span><b>Shubham Joshi</b></span></footer>

      {/* Sticky bottom summary bar */}
      <div className="position-fixed bottom-0 start-0 end-0 bg-body border-top shadow-sm" style={{zIndex:1050}}>
        <div className="container py-2 d-flex flex-wrap align-items-center gap-2">
          <div className="me-auto">
            <div className="small text-body-secondary">{t('Grand Total','कुल योग')}</div>
            <div className="fs-5 fw-bold m-0">₹ {quotation.grandTotal.toFixed(2)}</div>
          </div>
          <button className="btn btn-success btn-sm px-3 d-flex align-items-center gap-1" onClick={async()=>{ try{ await (await exportPDFBlob()); await shareViaWhatsApp() } catch { shareViaWhatsApp() } }}><i className="bi bi-whatsapp"></i> {t('WhatsApp','व्हाट्सएप')}</button>
          <div className="btn-group dropup">
            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {t('Export','एक्सपोर्ट')}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><button className="dropdown-item" onClick={generateShare}>{t('Share Link','लिंक शेयर')}</button></li>
              <li><button className="dropdown-item" onClick={exportPDF}>PDF</button></li>
              <li><button className="dropdown-item" onClick={exportExcel}>Excel</button></li>
              <li><button className="dropdown-item" onClick={shareViaEmail}>{t('Email','ईमेल')}</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <div className="modal fade" id="shareModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Share Quote</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-grid gap-2">
              <input className="form-control" readOnly value={shareUrl} />
              {shareUrl && (
                <img className="mx-auto" alt="QR" width="160" height="160" src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(shareUrl)}`} />
              )}
              <div className="form-text">Link copied to clipboard. Scan QR to open on mobile.</div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}