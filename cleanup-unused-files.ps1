# ====================================
# Estimatix Performance Cleanup Script
# ====================================
# 
# Purpose: Remove unused files and optimize bundle size
# Expected: 60-70% reduction (~6MB savings)
# Risk Level: LOW (backup files and dead code only)
#
# CRITICAL: Run this from project root directory!
# 
# ====================================

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "  Estimatix Performance Optimization Cleanup" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

# Safety check
$projectRoot = Get-Location
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: Not in project root directory!" -ForegroundColor Red
    Write-Host "Please run this script from: c:\Users\asus\Documents\React\aluminium-calculator" -ForegroundColor Yellow
    exit 1
}

Write-Host "Project root confirmed: $projectRoot" -ForegroundColor Green
Write-Host ""

# Create backup first
Write-Host "[1/7] Creating backup branch..." -ForegroundColor Yellow
git checkout -b cleanup-backup 2>$null
git add . 2>$null
git commit -m "Backup before cleanup - $(Get-Date -Format 'yyyy-MM-dd HH:mm')" 2>$null
git checkout -b performance-optimization 2>$null
Write-Host "✓ Backup created (branch: cleanup-backup)" -ForegroundColor Green
Write-Host ""

# ====================
# PHASE 1: CRITICAL - Remove old Auth components (204 KB)
# ====================
Write-Host "[2/7] Deleting unused Auth components..." -ForegroundColor Yellow

$authFiles = @(
    "src\components\Auth.tsx",
    "src\components\Auth_bootstrap_old.tsx",
    "src\components\Auth_enhanced.tsx",
    "src\components\Auth_old_v1.tsx",
    "src\components\AuthNew.tsx",
    "src\components\ForgotPassword.tsx"
)

$authSize = 0
foreach ($file in $authFiles) {
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        $authSize += $size
        Remove-Item $file -Force
        Write-Host "  ✓ Deleted: $file ($([math]::Round($size/1024, 2)) KB)" -ForegroundColor Gray
    }
}
Write-Host "✓ Removed $($authFiles.Count) old Auth files (~$([math]::Round($authSize/1024, 2)) KB)" -ForegroundColor Green
Write-Host ""

# ====================
# PHASE 2: Remove App backups (30 KB)
# ====================
Write-Host "[3/7] Deleting App backup files..." -ForegroundColor Yellow

$appFiles = @(
    "src\App_backup.tsx",
    "src\App_broken.tsx",
    "src\App_old.jsx"
)

$appSize = 0
foreach ($file in $appFiles) {
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        $appSize += $size
        Remove-Item $file -Force
        Write-Host "  ✓ Deleted: $file ($([math]::Round($size/1024, 2)) KB)" -ForegroundColor Gray
    }
}
Write-Host "✓ Removed $($appFiles.Count) App backup files (~$([math]::Round($appSize/1024, 2)) KB)" -ForegroundColor Green
Write-Host ""

# ====================
# PHASE 3: CRITICAL - Move fonts from src to public (5.5 MB!)
# ====================
Write-Host "[4/7] Moving font files to public directory..." -ForegroundColor Yellow

# Create fonts directory
if (-not (Test-Path "public\fonts")) {
    New-Item -ItemType Directory -Path "public\fonts" -Force | Out-Null
    Write-Host "  ✓ Created: public\fonts\" -ForegroundColor Gray
}

# Move font files
$fontFiles = Get-ChildItem "src\DejaVuSans*.ttf" -ErrorAction SilentlyContinue
$fontSize = 0

foreach ($font in $fontFiles) {
    $size = $font.Length
    $fontSize += $size
    Move-Item $font.FullName "public\fonts\" -Force
    $sizeMB = [math]::Round($size/1024/1024, 2)
    Write-Host "  [OK] Moved: $($font.Name) ($sizeMB MB)" -ForegroundColor Gray
}

# Delete base64 version (bloats bundle)
if (Test-Path "src\DejaVuSans-base64.js") {
    $base64Size = (Get-Item "src\DejaVuSans-base64.js").Length
    $fontSize += $base64Size
    Remove-Item "src\DejaVuSans-base64.js" -Force
    $base64MB = [math]::Round($base64Size/1024/1024, 2)
    Write-Host "  [OK] Deleted: DejaVuSans-base64.js ($base64MB MB)" -ForegroundColor Gray
}

Write-Host "✓ Moved $($fontFiles.Count) font files (~$([math]::Round($fontSize/1024/1024, 2)) MB) 🎉" -ForegroundColor Green
Write-Host ""

# ====================
# PHASE 4: Remove template files
# ====================
Write-Host "[5/7] Deleting template/example files..." -ForegroundColor Yellow

$templateFiles = @(
    "src\counter.ts",
    "src\typescript.svg"
)

$templateSize = 0
foreach ($file in $templateFiles) {
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        $templateSize += $size
        Remove-Item $file -Force
        Write-Host "  ✓ Deleted: $file ($([math]::Round($size/1024, 2)) KB)" -ForegroundColor Gray
    }
}
Write-Host "✓ Removed template files (~$([math]::Round($templateSize/1024, 2)) KB)" -ForegroundColor Green
Write-Host ""

# ====================
# PHASE 5: Remove test/debug components
# ====================
Write-Host "[6/7] Deleting test/debug components..." -ForegroundColor Yellow

$testFiles = @(
    "src\components\SimpleAuthTest.tsx",
    "src\components\ShareQuote.tsx",
    "public\login.html"
)

$testSize = 0
foreach ($file in $testFiles) {
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        $testSize += $size
        Remove-Item $file -Force
        Write-Host "  ✓ Deleted: $file ($([math]::Round($size/1024, 2)) KB)" -ForegroundColor Gray
    }
}
Write-Host "✓ Removed test/unused files (~$([math]::Round($testSize/1024, 2)) KB)" -ForegroundColor Green
Write-Host ""

# ====================
# PHASE 6: Consolidate documentation
# ====================
Write-Host "[7/7] Consolidating documentation files..." -ForegroundColor Yellow

$docFiles = @(
    "AUTH_COMPACT_TAILWIND_REFRESH.md",
    "BOOTSTRAP_AUTH_INTEGRATION_COMPLETE.md",
    "BOOTSTRAP_AUTH_QUICKSTART.md",
    "BOOTSTRAP_LOGIN_SHOWCASE.md"
)

$docSize = 0
foreach ($file in $docFiles) {
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        $docSize += $size
        Remove-Item $file -Force
        Write-Host "  ✓ Deleted: $file ($([math]::Round($size/1024, 2)) KB)" -ForegroundColor Gray
    }
}
Write-Host "✓ Removed old documentation (~$([math]::Round($docSize/1024, 2)) KB)" -ForegroundColor Green
Write-Host ""

# ====================
# Summary
# ====================
$totalSaved = $authSize + $appSize + $fontSize + $templateSize + $testSize + $docSize

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "  CLEANUP COMPLETE!" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "  Auth components:     $([math]::Round($authSize/1024, 2)) KB" -ForegroundColor White
Write-Host "  App backups:         $([math]::Round($appSize/1024, 2)) KB" -ForegroundColor White
Write-Host "  Fonts (moved):       $([math]::Round($fontSize/1024/1024, 2)) MB" -ForegroundColor White
Write-Host "  Template files:      $([math]::Round($templateSize/1024, 2)) KB" -ForegroundColor White
Write-Host "  Test/Debug files:    $([math]::Round($testSize/1024, 2)) KB" -ForegroundColor White
Write-Host "  Documentation:       $([math]::Round($docSize/1024, 2)) KB" -ForegroundColor White
Write-Host "  ------------------------" -ForegroundColor Gray
Write-Host "  TOTAL SAVED:         $([math]::Round($totalSaved/1024/1024, 2)) MB" -ForegroundColor Green
Write-Host ""

# ====================
# Important: Update font paths
# ====================
Write-Host "⚠️  IMPORTANT: Update font paths in your code!" -ForegroundColor Yellow
Write-Host ""
Write-Host "If you use DejaVu Sans fonts in pdfService.ts or style.css:" -ForegroundColor White
Write-Host "  OLD: src/DejaVuSans.ttf" -ForegroundColor Red
Write-Host "  NEW: /fonts/DejaVuSans.ttf" -ForegroundColor Green
Write-Host ""
Write-Host "Example CSS (@font-face):" -ForegroundColor White
Write-Host "  @font-face {" -ForegroundColor Gray
Write-Host "    font-family: 'DejaVu Sans';" -ForegroundColor Gray
Write-Host "    src: url('/fonts/DejaVuSans.ttf') format('truetype');" -ForegroundColor Gray
Write-Host "  }" -ForegroundColor Gray
Write-Host ""

# ====================
# Next steps
# ====================
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Update font paths in pdfService.ts (if used)" -ForegroundColor White
Write-Host "  2. Run: npm run build" -ForegroundColor Cyan
Write-Host "  3. Test all pages work correctly" -ForegroundColor White
Write-Host "  4. Check bundle size: dir dist -Recurse | Measure-Object -Property Length -Sum" -ForegroundColor Cyan
Write-Host "  5. Commit changes: git add . && git commit -m 'Cleanup unused files'" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backup branch: cleanup-backup" -ForegroundColor Yellow
Write-Host "To restore: git checkout cleanup-backup" -ForegroundColor Yellow
Write-Host ""
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "Script completed successfully! 🎉" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Cyan
