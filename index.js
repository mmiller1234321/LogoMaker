
// index.js

const { promptUser } = require('./Assets/lib/userInput.js');
const { generateSVG } = require('./Assets/lib/svgGenerator.js');
const fs = require('fs');

async function main() {
  try {
    const userInput = await promptUser();
    const { text, textColor, shape, shapeColor } = userInput;

    // Generate SVG
    const svgContent = generateSVG(text, textColor, shape, shapeColor);

    // Write SVG content to file
    fs.writeFileSync('./examples/logo.svg', svgContent);

    console.log('Generated logo.svg');
    console.log('Open logo.svg in a browser to view the logo as an image.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
