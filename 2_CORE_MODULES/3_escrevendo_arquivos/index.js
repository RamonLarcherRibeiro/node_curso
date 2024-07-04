const { error } = require('console');
const fs = require('fs');


//criar um arquivo ou sobrescreve se ja existir 
fs.writeFileSync('arquivo.txt','texto inserido com fs');

//adiciona 
fs.appendFile('arquivo.txt','\nsegunda texto inserido com fs',(data ,error)=>{
    if(error){
        console.log('ocorreu um erro ' + error)
    }
});