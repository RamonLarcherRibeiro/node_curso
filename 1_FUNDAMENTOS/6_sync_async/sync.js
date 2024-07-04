const fs = require('fs');

console.log("inicio")

//Nao espera a execução
fs.writeFileSync('arquivo.txt', 'oi', (err) => {
  if (err) throw err;
  setTimeout(()=>{
      console.log("arquivo criado")
  },2000)
});


console.log("fim")