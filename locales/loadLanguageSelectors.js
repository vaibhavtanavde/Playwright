const fs = require('fs');
const path = require('path');

function loadLanguageSelectors(language) {
  const filePath = path.join(__dirname, `${language}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Language file ${language}.json not found.`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

module.exports = loadLanguageSelectors;

