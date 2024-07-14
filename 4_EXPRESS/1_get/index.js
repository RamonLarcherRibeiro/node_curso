const express = require('express');
app = express();

const path  = require('path');

base_path = path.join(__dirname, "templates")

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    res.send("usuario : "+id)
})

app.get('/express',(req,res)=>{
    res.sendFile(`${base_path}/index.html`);
})

app.listen(3000,()=>{
    console.log("app rodando na porta 8080")
})