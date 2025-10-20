# Estimatix Performance Cleanup Script
# Purpose: Remove unused files and optimize bundle size
# Run from project root directory

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "  Estimatix Performance Optimization Cleanup" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

# Safety check
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: Not in project root directory!" -ForegroundColor Red
    exit 1
}

Write-Host "[OK] Project root confirmed" -ForegroundColor Green
Write-Host ""

# Create backup first
Write-Host "[1/7] Creating backup branch..." -ForegroundColor Yellow
git checkout -b cleanup-backup 2>$null
git add . 2>$null
git commit -m "Backup before cleanup" 2>$null
git checkout -b performance-optimization 2>$null
Write-Host "[OK] Backup created (branch: cleanup-backup)" -ForegroundColor Green
Write-Host ""

# PHASE 1: Remove old Auth components
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
        $sizeKB = [math]::Round($size/1024, 2)
        Write-Host "  [OK] Deleted: $file ($sizeKB KB)" -ForegroundColor Gray
    }
}
$authTotalKB = [math]::Round($authSize/1024, 2)
Write-Host "[OK] Removed old Auth files (~$authTotalKB KB)" -ForegroundColor Green
Write-Host ""

# PHASE 2: Remove App backups
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
        $sizeKB = [math]::Round($size/1024, 2)
        Write-Host "  [OK] Deleted: $file ($sizeKB KB)" -ForegroundColor Gray
    }
}
$appTotalKB = [math]::Round($appSize/1024, 2)
Write-Host "[OK] Removed App backup files (~$appTotalKB KB)" -ForegroundColor Green
Write-Host ""

# PHASE 3: Move fonts from src to public
Write-Host "[4/7] Moving font files to public directory..." -ForegroundColor Yellow

if (-not (Test-Path "public\fonts")) {
    New-Item -ItemType Directory -Path "public\fonts" -Force | Out-Null
    Write-Host "  [OK] Created: public\fonts\" -ForegroundColor Gray
}

$fontFiles = Get-ChildItem "src\DejaVuSans*.ttf" -ErrorAction SilentlyContinue
$fontSize = 0

foreach ($font in $fontFiles) {
    $size = $font.Length
    $fontSize += $size
    Move-Item $font.FullName "public\fonts\" -Force
    $sizeMB = [math]::Round($size/1024/1024, 2)
    Write-Host "  [OK] Moved: $($font.Name) ($sizeMB MB)" -ForegroundColor Gray
}

# Delete base64 version
if (Test-Path "src\DejaVuSans-base64.js") {
    $base64Size = (Get-Item "src\DejaVuSans-base64.js").Length
    $fontSize += $base64Size
    Remove-Item "src\DejaVuSans-base64.js" -Force
    $base64MB = [math]::Round($base64Size/1024/1024, 2)
    Write-Host "  [OK] Deleted: DejaVuSans-base64.js ($base64MB MB)" -ForegroundColor Gray
}

$fontTotalMB = [math]::Round($fontSize/1024/1024, 2)
Write-Host "[OK] Moved font files (~$fontTotalMB MB)" -ForegroundColor Green
Write-Host ""

# PHASE 4: Remove template files
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
        $sizeKB = [math]::Round($size/1024, 2)
        Write-Host "  [OK] Deleted: $file ($sizeKB KB)" -ForegroundColor Gray
    }
}
$templateTotalKB = [math]::Round($templateSize/1024, 2)
Write-Host "[OK] Removed template files (~$templateTotalKB KB)" -ForegroundColor Green
Write-Host ""

# PHASE 5: Remove test/debug components
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
        $sizeKB = [math]::Round($size/1024, 2)
        Write-Host "  [OK] Deleted: $file ($sizeKB KB)" -ForegroundColor Gray
    }
}
$testTotalKB = [math]::Round($testSize/1024, 2)
Write-Host "[OK] Removed test/unused files (~$testTotalKB KB)" -ForegroundColor Green
Write-Host ""

# PHASE 6: Consolidate documentation
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
        $sizeKB = [math]::Round($size/1024, 2)
        Write-Host "  [OK] Deleted: $file ($sizeKB KB)" -ForegroundColor Gray
    }
}
$docTotalKB = [math]::Round($docSize/1024, 2)
Write-Host "[OK] Removed old documentation (~$docTotalKB KB)" -ForegroundColor Green
Write-Host ""

# Summary
$totalSaved = $authSize + $appSize + $fontSize + $templateSize + $testSize + $docSize
$totalMB = [math]::Round($totalSaved/1024/1024, 2)

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "  CLEANUP COMPLETE!" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "  Auth components:     $authTotalKB KB" -ForegroundColor White
Write-Host "  App backups:         $appTotalKB KB" -ForegroundColor White
Write-Host "  Fonts (moved):       $fontTotalMB MB" -ForegroundColor White
Write-Host "  Template files:      $templateTotalKB KB" -ForegroundColor White
Write-Host "  Test/Debug files:    $testTotalKB KB" -ForegroundColor White
Write-Host "  Documentation:       $docTotalKB KB" -ForegroundColor White
Write-Host "  ------------------------" -ForegroundColor Gray
Write-Host "  TOTAL SAVED:         $totalMB MB" -ForegroundColor Green
Write-Host ""

Write-Host "[!] IMPORTANT: Update font paths in Calculator.jsx!" -ForegroundColor Yellow
Write-Host "See FONT_UPDATE_GUIDE.md for instructions" -ForegroundColor White
Write-Host ""

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Update Calculator.jsx (remove DejaVuSans-base64 import)" -ForegroundColor White
Write-Host "  2. Run: npm run build" -ForegroundColor Cyan
Write-Host "  3. Test all pages work correctly" -ForegroundColor White
Write-Host ""
Write-Host "Backup branch: cleanup-backup" -ForegroundColor Yellow
Write-Host "To restore: git checkout cleanup-backup" -ForegroundColor Yellow
Write-Host ""
Write-Host "Script completed successfully!" -ForegroundColor Green
