const express = require('express');
const path = require('path');
const base_path = path.join(__dirname,'templates')

const app = express();

//ler body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/create/account',(req,res)=>{
    res.sendFile(`${base_path}/index.html`);
})

app.post('/user/create',(req,res)=>{
    res.send(`Usuario criado`);
    console.log("Usuario criado")
    console.log("username : "+req.body.username);
    console.log("senha : " + req.body.password);
})

app.listen(3000,()=>{
    console.log("app rodando na porta 8080")
}) 
