# Illuminate Site Preview

This is a static preview build that maps copy from the current Illuminate website into the 2025 Figma visual direction and uses the exported Figma assets supplied locally.

## Preview

Open `index.html` directly in a browser, or serve this folder with any static web server.

## Notes for Wix

The current build is framework-free HTML/CSS/JavaScript so it can be rebuilt in Wix Studio as sections/pages, or hosted outside Wix and embedded if needed. Direct publishing to the existing Wix site still requires Wix editor/API access and a decision on whether to rebuild as native Wix sections or deploy as custom code.

The preview uses exported assets in `assets/figma` and supplied MP4 exports in `assets/video`, including the header video, Key Concepts video, eLearning demo, and workshop presentation video. The 1.76 GB source MOV and `.aep` After Effects file are not browser-ready web assets; the compressed header MP4 is now wired into the hero.
