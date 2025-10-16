@echo off
echo ==========================================
echo Estimatix Logo Conversion Script
echo ==========================================
echo.

REM Check if ImageMagick is installed
where convert >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] ImageMagick is not installed!
    echo.
    echo Please install ImageMagick from: https://imagemagick.org/script/download.php
    echo OR use online converter: https://convertio.co/svg-png/
    echo.
    echo Manual Steps:
    echo 1. Go to https://convertio.co/svg-png/
    echo 2. Upload public\logo.svg
    echo 3. Export as 192x192 and save as public\logo192.png
    echo 4. Export as 512x512 and save as public\logo512.png
    echo.
    pause
    exit /b 1
)

echo [INFO] ImageMagick found! Converting logos...
echo.

REM Convert to 192x192
echo Converting to 192x192...
convert -background none -resize 192x192 public\logo.svg public\logo192.png
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Created logo192.png
) else (
    echo [ERROR] Failed to create logo192.png
)

REM Convert to 512x512
echo Converting to 512x512...
convert -background none -resize 512x512 public\logo.svg public\logo512.png
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Created logo512.png
) else (
    echo [ERROR] Failed to create logo512.png
)

REM Convert favicon to ICO (optional)
echo Converting favicon to ICO...
convert -background none -resize 32x32 public\favicon.svg public\favicon.ico
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Created favicon.ico
) else (
    echo [ERROR] Failed to create favicon.ico
)

echo.
echo ==========================================
echo Conversion Complete!
echo ==========================================
echo.
echo Created files:
dir /B public\logo*.png 2>nul
dir /B public\favicon.ico 2>nul
echo.
echo You can now run: npm run dev
pause
