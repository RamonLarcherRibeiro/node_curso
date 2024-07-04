const { error } = require('console');
const fs = require('fs');

fs.rename('arquivo.txt', 'arquivo_renomeado.txt',(data,error)=>{
    if(error){
        console.log('ocorreu um erro : ' + error)
    }
})