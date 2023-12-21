const express = require('express');
const pdfReader = require('./pdfReader');
const nlpProcessor = require('./nlpProcessor');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
   console.log("hello world")
   res.send("hello world")
    // const pdfText = await pdfReader.readPDF('./Dnu.pdf');
    // res.json    (pdfText);  // Cambio aquí
    // const processedData = nlpProcessor.processText(pdfText);
    // const processedEntities = nlpProcessor.processEntities(processedData);
    // console.log(processedEntities);
    // // console.log("todo mal");  // Cambio aquí
    // // res.render(pdfText, { processedData });  // Cambio aquí
  } catch (error) {
    console.log(error)
  }
});

app.get('/pdf', async (req, res) => {
  try {
    const pdfText = await pdfReader.readPDF('./Dnu.pdf');
    const processedData = nlpProcessor.processText(pdfText);
    res.json(processedData);  // Cambio aquí
    console.log(processedData);
  
  } catch (error) {
    console.error('Error al procesar el PDF:', error);
    res.status(500).send('Error interno del servidor');
  }
  })

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

