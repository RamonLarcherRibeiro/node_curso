const { error } = require('console');
const fs = require('fs');

fs.unlink('arquivo.txt',(err)=>{
    if(err){
        console.log('ocorreu um error : '+ error)
    }
})