Add-Type -AssemblyName System.Drawing
$source = "c:\Users\TEJAS K M\Documents\MainWebsite\src\assets\adhip.JPG"
$dest = "c:\Users\TEJAS K M\Documents\MainWebsite\src\assets\adhip-small.JPG"
$img = [System.Drawing.Image]::FromFile($source)
$newWidth = 800
$newHeight = [math]::Floor($img.Height * $newWidth / $img.Width)
$bmp = New-Object System.Drawing.Bitmap $newWidth, $newHeight
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, $newWidth, $newHeight)
$bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Host "Resized successfully!"
