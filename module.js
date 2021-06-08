//modulos instalados para utilizarlos y leer los documentos

let fs = require("fs");
const path = require("path");
let markdowndLinkExtractor = require('markdown-link-extractor'); 


//lector de rutas
let fileName = process.argv[2];//toma todo y lo muestra en consola
let absolutePath = path.resolve(fileName); //agregar normalize.


// retornar extención del link
let mdFile = path.extname(absolutePath);
 
//Función que lee el archivo
const getMd = (fileName, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, document) => { //leer ruta del documento y trabajarla 
      let links = markdowndLinkExtractor(document);
          let absolutePath = path.resolve(fileName); //ruta con nombre del archivo para luego entregarla con parametros
          let documentMd = path.normalize(fileName); //carpeta de origen
          let arrayLink = links.map((link)=>{ //.map toma el contenido del arreglo, lo ordena con los parametros requeridos y los devuelve en un nuevo arreglo.
              console.table({absolutePath, documentMd, link}); 
          })
          
          if (mdFile == '.md') {      
            resolve(arrayLink); // promesa que pasa a estar resuelta y muestra el archivo con extensión .md

        } else {
            reject(err) //Promesa que marca el error del documento
        }
  })
})

// .then(file => console.log(file))
    .catch(err => console.log('Ingresa un archivo con extension .md', err));
}

module.exports = (fileName, options) => {

    return getMd(fileName, options);
};
