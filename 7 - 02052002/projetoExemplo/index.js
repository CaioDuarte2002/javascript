//importaça do modo do servidor express
const express = require('express');
const { default: mongoose } = require('mongoose');

//criaçao do aplicativo do servidor express
const app = express()


//inportaçao do modulo do mongoose 


//permitir que o servidor trabalhe com o formato JSON
app.use(express.json());


//vamos criar a primeira rota do servidor
//esta sera a rota raiz

// url de conexao com o banco de dados mongodb
//mongodb+srv://<username>:<password>@projetoback.la62f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// na password coloque a senha que colocou no mongodb

const urldb = "mongodb+srv://CaioDuarte02:caiogodoy02@projetoback.la62f.mongodb.net/bancodados?retryWrites=true&w=majority"

mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true})
//criar a estrutura da tabela para os clientes
const tabela = mongoose.Schema({

    nome:String,
    email:String,
    idade:String,


})


//criar o modelo de dados, ou seja criar a tabela com a estrutura

const Cliente = mongoose.model("tbcliente",tabela)




app.get("/",(req,res)=>{

//vamos trazer todos os clientes cadastrados e exibir em tela

Cliente.find((erro,dados)=>{

if(erro)return res.status(500).send({output : `Erro ao carregar cliente - > ${erro}`})
res.status(200).send({output:dados})


})

})

// vamos criar a rota com o verbo POST. é usado quando se deseja
// cadastrar algum dado ou para fazer sistema de login

app.post("/cadastro",(req,res)=>{

const cli = new Cliente(req.body)

Cli
.save()
.then((dados)=>{
res.status(201).send({output`Cliente cadastrado`,info:dados})

})

.catch((error)=>{})
res.status(500).send({output :`Erro ao cadastrar-> ${erro}`})


})

//rota para atualizar os dados dos clientes.
// vamos usar o verbo PUT. 
//para atualizar porecisaremos de 2 informaçoes. a primeira e o id do dado
//que deseja atualizar e a segunda, sao os dados que sao os dados que deseja atualizar 


app.put("/atualizar/:id",(req,res)=>{

Cliente.findbyidabdupdate(req.params.id,res.body,{new:true})
if(erro)return res.status(400).send({output:`erro ao atualizar->${erro}`})

//para deletar um dado iremos usar o verbo de DELETE passando id 
app.delete("/apagar/:id",(req,res)=>{
    res.status(204).send({output:`Apagou`})
})

//definir uma porta de comunuicacao com o servidor
app.listen(5000,() => console.log("on line em http://localhost5000"))
