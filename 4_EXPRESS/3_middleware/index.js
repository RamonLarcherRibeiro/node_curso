const express = require("express");
const app = express();

const path = require("path");

base_path = path.join(__dirname,"templates");

app.get("/",(req,res)=>{
    res.sendFile(`${base_path}/index.html`)
})


app.use((req,res)=>{
    res.status(404).sendFile(`${base_path}/404.html`)
})


app.listen(3000,()=>{
    console.log("servidor rodando na porta 3000")
})
