let fs = require("fs");
let nodeFetch = require("node-fetch");
const path = require("path");
let chalk = require('chalk');
let markdowndLinkExtractor = require('markdown-link-extractor'); 

//lector de rutas
const fileName = process.argv[2];//Toma lo que se le da desde consola
let absolutePath = path.resolve(fileName);

// retornar extención del link
let mdFile = path.extname(absolutePath);
 
//Función que lee el archivo
const getMd = (fileName, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, document) => {
      let links = markdowndLinkExtractor(document);
          let absolutePath = path.resolve(fileName);
          let arrayLink = links.map((link)=>{
              return ({absolutePath, link}); 
          })
          
          if (mdFile == '.md') {      
            resolve(arrayLink);

        } else {
            reject(err)
        }
  })
})

.then(file => console.log(file))
    .catch(err => console.log('Ingresa un archivo con extension .md', err));
}

module.exports = (fileName, options) => {

    return getMd(fileName, options);
};
