# Genera public/cv/Steep-Salvador-CV.pdf a partir de cv/cv.html con Microsoft Edge en modo headless.
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$html = Join-Path $PSScriptRoot 'cv.html'
$pdf = Join-Path $root 'public\cv\Steep-Salvador-CV.pdf'
$profileDir = Join-Path ([IO.Path]::GetTempPath()) 'cv-edge-profile'

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $edge) { throw 'No se encontró Microsoft Edge.' }

$src = 'file:///' + ($html -replace '\\', '/')
Start-Process -FilePath $edge -Wait -ArgumentList @(
  '--headless=new',
  '--disable-gpu',
  "--user-data-dir=$profileDir",
  '--no-pdf-header-footer',
  '--virtual-time-budget=8000',
  "--print-to-pdf=$pdf",
  $src
)
Remove-Item -Recurse -Force $profileDir -ErrorAction SilentlyContinue

Write-Host "CV generado en $pdf"
