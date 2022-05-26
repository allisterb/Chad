Get-ChildItem '*.fs' -Recurse | ForEach {(Get-Content -Path $_.PSPath | ForEach  { $_ -replace 'Nash', 'Chad' }) | Set-Content -Path $_.PSPath }
  
Get-ChildItem '*.fsproj' -Recurse | ForEach {(Get-Content -Path $_.PSPath | ForEach  { $_ -replace 'Nash', 'Chad' }) | Set-Content -Path $_.PSPath }

Get-ChildItem '*.cs' -Recurse | ForEach {(Get-Content -Path $_.PSPath | ForEach  { $_ -replace 'Nash', 'Chad' }) | Set-Content -Path $_.PSPath }
  
Get-ChildItem '*.csproj' -Recurse | ForEach {(Get-Content -Path $_.PSPath | ForEach  { $_ -replace 'Nash', 'Chad' }) | Set-Content -Path $_.PSPath }

Get-ChildItem '*.js' -Recurse | ForEach {(Get-Content -Path $_.PSPath | ForEach  { $_ -replace 'Nash', 'Chad' }) | Set-Content -Path $_.PSPath }