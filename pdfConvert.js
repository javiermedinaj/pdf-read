import fs from "fs";
import PDFParser from "pdf2json";

const pdfParser = new PDFParser();
const outputDir = "./pdf2json/test/";

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    // Accedemos a las páginas (la estructura real dependerá de la versión de pdf2json)
    const pages = pdfData.Pages || [];

    // Crear el directorio si no existe
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Procesamiento de las páginas
    pages.forEach((page, index) => {
        const pageTexts = page.Texts.map(text => decodeURIComponent(text.R.map(item => item.T).join(" ").trim()));
        const pageData = {
            page: index + 1,
            text: pageTexts.join(" ")
        };

        const jsonFilePath = `${outputDir}Page_${index + 1}.json`;
        fs.writeFileSync(jsonFilePath, JSON.stringify(pageData, null, 2)); // 2 espacios de indentación para mejor legibilidad
        console.log(`Archivo para la página ${index + 1} guardado en: ${jsonFilePath}`);
    });
});

pdfParser.loadPDF("./Dnu.pdf");
