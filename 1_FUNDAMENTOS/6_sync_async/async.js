const fs = require('fs');

console.log("inicio")


//Espera a execução
fs.writeFile('arquivo.txt', 'oi', (err) => {
    if (err) throw err;
    setTimeout(()=>{
        console.log("arquivo criado")
    },2000)
  });

console.log("fim")