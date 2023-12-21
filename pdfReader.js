const pdf = require('pdf-parse');
const fs = require('fs').promises;

async function readPDF(pdfPath) {
  const dataBuffer = await fs.readFile(pdfPath);
  const data = await pdf(dataBuffer);
  return data.text;
}

module.exports = {
  readPDF,
};
