Add-Type -AssemblyName System.Drawing
$imgFile = "c:\Users\TEJAS K M\Documents\MainWebsite\src\assets\adhip-small.JPG"
$img = [System.Drawing.Image]::FromFile($imgFile)
$img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
$img.Save("c:\Users\TEJAS K M\Documents\MainWebsite\src\assets\adhip-rotated.JPG", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
Write-Host "Rotated successfully!"
