const { error } = require('console');
const fs = require('fs');

fs.stat('arquivo.txt',(erro,stats)=>{
    if(error){
        console.log('ocorreu um erro')
    }
    if(stats){
        console.log(stats);
    }
})