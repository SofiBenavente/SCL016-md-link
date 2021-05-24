module.exports = () => {
  // ...
};
/*
* Leer todo el contenido de un archivo
* con Node.JS y fs
*
* @author parzibyte
*/
const fs = require("fs"),
NOMBRE_ARCHIVO = "index.js";

fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
if (error) throw error;
console.log("El contenido es: ", datos);
}); 
