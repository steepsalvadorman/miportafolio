# Aplica la protección de Cloudflare para steepsalvador.dev:
#  1. Regla de rate limiting para /cv/ (más de 20 peticiones en 10 s por IP se bloquean).
#  2. Bot Fight Mode.
# Se puede ejecutar varias veces: si la regla ya existe, la actualiza.
#
# Token: https://dash.cloudflare.com/profile/api-tokens -> Create Custom Token, zona steepsalvador.dev, permisos:
#   Zone > Zone > Read · Zone > Zone WAF > Edit · Zone > Bot Management > Edit
# Uso:
#   $env:CLOUDFLARE_API_TOKEN = 'tu-token'
#   powershell -ExecutionPolicy Bypass -File scripts\cloudflare-proteccion.ps1
$ErrorActionPreference = 'Stop'

$zoneName = 'steepsalvador.dev'
$ruleDescription = 'Limitar descargas del CV'
$token = $env:CLOUDFLARE_API_TOKEN
if (-not $token) { throw 'Define la variable de entorno CLOUDFLARE_API_TOKEN antes de ejecutar el script.' }

$api = 'https://api.cloudflare.com/client/v4'
$headers = @{ Authorization = "Bearer $token" }

function Invoke-Cf([string]$method, [string]$path, $body) {
  $params = @{ Method = $method; Uri = "$api$path"; Headers = $headers; ContentType = 'application/json' }
  if ($null -ne $body) { $params.Body = ($body | ConvertTo-Json -Depth 10 -Compress) }
  try {
    Invoke-RestMethod @params
  } catch {
    $status = [int]$_.Exception.Response.StatusCode
    $detail = $_.ErrorDetails.Message
    if (-not $detail -and $_.Exception.Response) {
      $detail = (New-Object IO.StreamReader($_.Exception.Response.GetResponseStream())).ReadToEnd()
    }
    throw "Cloudflare respondió $status en $method $path. $detail"
  }
}

function Test-Missing([string]$path) {
  try {
    Invoke-RestMethod -Method Get -Uri "$api$path" -Headers $headers | Out-Null
    $false
  } catch {
    if ([int]$_.Exception.Response.StatusCode -eq 404) { return $true }
    throw
  }
}

Invoke-Cf GET '/user/tokens/verify' $null | Out-Null
Write-Host 'Token válido.'

$zone = (Invoke-Cf GET "/zones?name=$zoneName" $null).result | Select-Object -First 1
if (-not $zone) { throw "El token no tiene acceso a la zona $zoneName." }
Write-Host "Zona $zoneName ($($zone.plan.name))."

# 1. Rate limiting
$expressions = @(
  '(starts_with(http.request.uri.path, "/cv/"))',
  '(http.request.uri.path eq "/cv/Steep-Salvador-CV.pdf")'
)

function New-Rule([string]$expression) {
  @{
    description = $ruleDescription
    expression = $expression
    action = 'block'
    ratelimit = @{
      characteristics = @('cf.colo.id', 'ip.src')
      period = 10
      requests_per_period = 20
      mitigation_timeout = 10
    }
  }
}

$entrypoint = "/zones/$($zone.id)/rulesets/phases/http_ratelimit/entrypoint"
$applied = $null
foreach ($expression in $expressions) {
  try {
    if (Test-Missing $entrypoint) {
      Invoke-Cf POST "/zones/$($zone.id)/rulesets" @{
        name = 'Rate limiting'
        kind = 'zone'
        phase = 'http_ratelimit'
        rules = @(New-Rule $expression)
      } | Out-Null
    } else {
      $ruleset = (Invoke-Cf GET $entrypoint $null).result
      $existing = $ruleset.rules | Where-Object { $_.description -eq $ruleDescription } | Select-Object -First 1
      if ($existing) {
        Invoke-Cf PATCH "/zones/$($zone.id)/rulesets/$($ruleset.id)/rules/$($existing.id)" (New-Rule $expression) | Out-Null
      } else {
        Invoke-Cf POST "/zones/$($zone.id)/rulesets/$($ruleset.id)/rules" (New-Rule $expression) | Out-Null
      }
    }
    $applied = $expression
    break
  } catch {
    Write-Warning "No se aceptó la expresión $expression. $($_.Exception.Message)"
  }
}
if (-not $applied) { throw 'No se pudo crear la regla de rate limiting.' }
Write-Host "Rate limiting activo: $applied, 20 peticiones en 10 s por IP."

# 2. Bot Fight Mode (Cloudflare exige las detecciones con JavaScript para activarlo)
Invoke-Cf PUT "/zones/$($zone.id)/bot_management" @{ fight_mode = $true; enable_js = $true } | Out-Null
Write-Host 'Bot Fight Mode activado.'
