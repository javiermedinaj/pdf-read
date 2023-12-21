const nlp = require('compromise');

function processText(text) {
  const doc = nlp(text);

  // Ejemplo de tarea de NLP: Obtener las entidades nombradas
  const namedEntities = doc.match('#Noun').out('array');
  console.log('Entidades nombradas:', namedEntities);

  // Ejemplo de tarea de NLP: Contar la cantidad de oraciones en el texto.
  const numSentences = doc.sentences().length;
  console.log(`Número de oraciones: ${numSentences}`);

  // Aquí deberías realizar tus propias tareas de procesamiento según tus necesidades.
  
  // Devuelve los resultados procesados (en este caso, solo un mensaje de ejemplo).
  const processedData = 'Procesamiento NLP completado. ¡Personaliza esto según tus necesidades!';
  return processedData;
}

module.exports = {
  processText,
};
