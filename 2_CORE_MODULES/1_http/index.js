const http = require("http");
const fs = require("fs");
const path = require('path');

const port = 3000; 
const file =  path.join(__dirname, "index.html"); //Usar path.join(__dirname, 'index.html')tem várias vantagens sobre codificar o caminho do arquivo diretamente.

server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Contenty-Type','text/html');
    fs.readFile("index.html",(err, data)=>{
        if(err){
            res.end('erro na leitura do arquivo');
        }else{
            res.statusCode=500;
            res.end(data);
        }
    })
 
})

server.listen(port,()=>{
    console.log("Servidor rodando na porta : "+port)
})