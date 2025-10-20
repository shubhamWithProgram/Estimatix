# Estimatix Logo Assets

## Created Files
- `logo.svg` - Main Estimatix logo (512x512)
- `favicon.svg` - Compact favicon (32x32)

## Required PNG Files (for PWA)
You need to create these PNG files from logo.svg:

1. **logo192.png** (192x192px)
   - Use an online converter: https://convertio.co/svg-png/
   - Or use GIMP, Photoshop, or Inkscape
   - Upload logo.svg and export as 192x192 PNG

2. **logo512.png** (512x512px)
   - Same process as above
   - Export as 512x512 PNG

3. **favicon.ico** (optional, but recommended)
   - Convert favicon.svg to .ico format
   - Use: https://convertio.co/svg-ico/
   - Place in public folder

## Design Elements
- **Colors**: 
  - Primary Gradient: #4f46e5 → #9333ea (Indigo to Purple)
  - Accent Gradient: #06b6d4 → #3b82f6 (Cyan to Blue)
  - Success: #10b981 (Green)
  
- **Theme**: Modern calculator with analytics chart elements
- **Style**: Clean, professional, SaaS-focused with glassmorphism

## Quick Conversion Commands (if you have ImageMagick)
```bash
# Convert to PNG (if ImageMagick is installed)
convert -background none -resize 192x192 public/logo.svg public/logo192.png
convert -background none -resize 512x512 public/logo.svg public/logo512.png
convert -background none -resize 32x32 public/favicon.svg public/favicon.ico
```

## Online Converters (No installation needed)
- https://cloudconvert.com/svg-to-png
- https://convertio.co/svg-png/
- https://image.online-convert.com/convert-to-png
