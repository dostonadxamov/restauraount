const sharp = require('sharp');
const path = require('path');

const sourceImage = path.join(__dirname, 'public/web-app-manifest-512x512.png');
const publicDir = path.join(__dirname, 'public');

async function generateFavicons() {
  try {
    // 96x96 PNG
    await sharp(sourceImage)
      .resize(96, 96, { fit: 'cover' })
      .png()
      .toFile(path.join(publicDir, 'favicon-96x96.png'));
    console.log('✓ favicon-96x96.png created');

    // 180x180 PNG (apple-touch-icon)
    await sharp(sourceImage)
      .resize(180, 180, { fit: 'cover' })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ apple-touch-icon.png created');

    // 32x32 ICO (favicon.ico)
    await sharp(sourceImage)
      .resize(32, 32, { fit: 'cover' })
      .toBuffer()
      .then(buffer => {
        // Convert to ICO format (simplified - just use as PNG in ICO wrapper)
        const fs = require('fs');
        fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buffer);
        console.log('✓ favicon.ico created');
      });

    console.log('\n✅ All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
