# Clear Browser Cache Script
Write-Host "Clearing browser cache..."

# 1. Close all browser processes
Write-Host "\n1. Closing all browser processes..."
Get-Process -Name chrome, msedge, firefox -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# 2. Clear Chrome cache
Write-Host "\n2. Clearing Chrome cache..."
$chromePaths = @(
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Cache",
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Media Cache",
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Cookies",
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Local Storage",
    "$env:LOCALAPPDATA\Google\Chrome\User Data\Default\Session Storage"
)

foreach ($path in $chromePaths) {
    if (Test-Path $path) {
        Remove-Item -Path $path -Recurse -Force
        Write-Host "  ✓ Chrome path cleared: $path"
    }
}

# 3. Clear Edge cache
Write-Host "\n3. Clearing Edge cache..."
$edgePaths = @(
    "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\Cache",
    "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\Media Cache",
    "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\Cookies",
    "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\Local Storage",
    "$env:LOCALAPPDATA\Microsoft\Edge\User Data\Default\Session Storage"
)

foreach ($path in $edgePaths) {
    if (Test-Path $path) {
        Remove-Item -Path $path -Recurse -Force
        Write-Host "  ✓ Edge path cleared: $path"
    }
}

# 4. Clear Firefox cache
Write-Host "\n4. Clearing Firefox cache..."
$firefoxProfilesPath = "$env:LOCALAPPDATA\Mozilla\Firefox\Profiles"

if (Test-Path $firefoxProfilesPath) {
    $firefoxProfiles = Get-ChildItem -Path $firefoxProfilesPath -Directory
    foreach ($profile in $firefoxProfiles) {
        $firefoxCachePath = Join-Path -Path $profile.FullName -ChildPath "cache2"
        $firefoxCookiesPath = Join-Path -Path $profile.FullName -ChildPath "cookies.sqlite"
        $firefoxLocalStoragePath = Join-Path -Path $profile.FullName -ChildPath "webappsstore.sqlite"
        
        if (Test-Path $firefoxCachePath) {
            Remove-Item -Path $firefoxCachePath -Recurse -Force
            Write-Host "  ✓ Firefox cache cleared for profile: $($profile.Name)"
        }
        if (Test-Path $firefoxCookiesPath) {
            Remove-Item -Path $firefoxCookiesPath -Force
            Write-Host "  ✓ Firefox cookies cleared for profile: $($profile.Name)"
        }
        if (Test-Path $firefoxLocalStoragePath) {
            Remove-Item -Path $firefoxLocalStoragePath -Force
            Write-Host "  ✓ Firefox localStorage cleared for profile: $($profile.Name)"
        }
    }
}

Write-Host "\n✅ Browser cache clearing completed!"
