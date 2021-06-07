
/*NOMBRE_ARCHIVO = "./src/test1.md";

fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
  
  if (error) throw error;
  console.log("El contenido es: ", datos);
 });*/

//stats
/*const urlStats = (links) => {
  let ok = 0;
  let broken = 0;
  for (let i = 0; i < links.length; i++) {
    fetch1(links[i])
      .then((response) => {
        if (response.status === 200) ok++;
        return response;
      })
      .then((response) => {
        if (response.status !== 200) broken++;
        return response;
      })
      .then(() => {
        if (ok + broken === links.length)
          console.log(`ss
            ${chalk.cyanBright("✔ Total : " + links.length)}
            ${chalk.greenBright("✔ Unique :" + ok)}
            ${chalk.redBright("✖ Broken :" + broken)}`
          );
      });
  }
 }; */

//Función que lee los links de la ruta espeficificada
/*const expReg = "(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})";
fs.readFile(file, "utf-8", (err, file) => {
  if (err) {
    console.log(err);
  } else {
    let links = file.match(expReg);
    
    console.log(file.match(expReg));
    links.forEach(element => {
      getStatus(element)
        .then(res => {
          console.log(chalk.blueBright("El link"), chalk.cyanBright(element), chalk.blueBright("es"), chalk.magentaBright(res));

        })
        .catch(err => {
          console.log(err);
        })
    })
    urlStats(links);
    //console.log("Esto es lo que tiene el .md seleccionado", file);
  }

}); 
const getStatus = (url) => {
  return new Promise((resolve, reject) => {
    fetchUrl(url, (error, meta) => {
      if (error) {
        reject(error)
      } else {
        resolve([meta.status]);
      }
    })
  });
 };*/