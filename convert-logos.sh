#!/bin/bash

echo "=========================================="
echo "Estimatix Logo Conversion Script"
echo "=========================================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "[ERROR] ImageMagick is not installed!"
    echo ""
    echo "Install with:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    echo "  Fedora: sudo dnf install ImageMagick"
    echo ""
    echo "OR use online converter: https://convertio.co/svg-png/"
    echo ""
    echo "Manual Steps:"
    echo "1. Go to https://convertio.co/svg-png/"
    echo "2. Upload public/logo.svg"
    echo "3. Export as 192x192 and save as public/logo192.png"
    echo "4. Export as 512x512 and save as public/logo512.png"
    echo ""
    exit 1
fi

echo "[INFO] ImageMagick found! Converting logos..."
echo ""

# Convert to 192x192
echo "Converting to 192x192..."
convert -background none -resize 192x192 public/logo.svg public/logo192.png
if [ $? -eq 0 ]; then
    echo "[SUCCESS] Created logo192.png"
else
    echo "[ERROR] Failed to create logo192.png"
fi

# Convert to 512x512
echo "Converting to 512x512..."
convert -background none -resize 512x512 public/logo.svg public/logo512.png
if [ $? -eq 0 ]; then
    echo "[SUCCESS] Created logo512.png"
else
    echo "[ERROR] Failed to create logo512.png"
fi

# Convert favicon to ICO (optional)
echo "Converting favicon to ICO..."
convert -background none -resize 32x32 public/favicon.svg public/favicon.ico
if [ $? -eq 0 ]; then
    echo "[SUCCESS] Created favicon.ico"
else
    echo "[ERROR] Failed to create favicon.ico"
fi

echo ""
echo "=========================================="
echo "Conversion Complete!"
echo "=========================================="
echo ""
echo "Created files:"
ls -lh public/logo*.png 2>/dev/null || echo "  (none)"
ls -lh public/favicon.ico 2>/dev/null || echo "  (none)"
echo ""
echo "You can now run: npm run dev"
