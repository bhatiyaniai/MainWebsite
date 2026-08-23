Add-Type -AssemblyName System.Drawing
$imgFile = "c:\Users\TEJAS K M\Documents\MainWebsite\src\assets\adhip-rotated.JPG"
$img = [System.Drawing.Image]::FromFile($imgFile)
$img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone)
$img.Save("c:\Users\TEJAS K M\Documents\MainWebsite\src\assets\adhip-upright.JPG", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
Write-Host "Rotated successfully!"
