//importaça do modo do servidor express
const express = require('express')

//criaçao do aplicativo do servidor express
const app = express()
//permitir que o servidor trabalhe com o formato JSON
app.use(express.json());
//vamos criar a primeira rota do servidor
//esta sera a rota raiz
app.get("/",(req,res)=>{

res.send("Olá, seja bem vindo. você está na rota raiz")






})
//definir uma porta de comunuicacao com o servidor
app.listen(5000,() => console.log("on line em http://localhost5000"))
