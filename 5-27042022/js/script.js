// funçao anônima é uma funçao que nao tem nome.
// ela é atribuida aa um elemento de evento ou uma variável.
// os elementos de evento podem ser : botoes, inputs, imagens e varios outros controles html. 

const body = document.body 
// vamos criar um botao para adicionar a pagina 
const btn1 = document.createElement("button")
btn1.innerHTML= "Primeira função"
//adicionar o btn1 a pagina html. adicao feita ao body
body.appendChild(btn1)

//aplicar uma funçao ao botao btn 
btn1.onclick = function () {

//capturar a URL da página 
var Url = window.location 
window.document.title = "trocou o titulo"
alert ("trocamos o titulo da página" + Url)

}

// criar um novo botao btn2

const btn2 = document.createElement("button")
btn2.innerHTML = "Segunda função"
// adicionar btn2 ao body

body.appendChild(btn2)
btn2.onclick = () => {

document.body.style.backgroundColor = "yellow"

}

// vamos criar uma matriz com produtos 
const produtos = [

["Produto", "quantidade", "preço"],
["calças", "15", "R$150,00"],
["Tenis", "10", "R$200,00"],
["Blusa", "35", "R$35,00"],

]

function montarTabela (){

const div = document.createElement("div");
 var tabela = "<table>"




    for (var linha = 0; linha <= 3; linha++){
        tabela+= "<tr>"

        for (var coluna = 0 ; coluna <= 2; coluna++){
        if (linha == 0){
            tabela+= `<th> ${produtos[linha][coluna]}</th>`
        }

        else {


            tabela+= `<td>${produtos[linha][coluna]}</td>`
        }
        
        
        
        }
        tabela+="</tr>"


}
tabela+= "</table>"
div.innerHTML = tabela
body.appendChild(div)

}

const btn3 = document.createElement("button")
btn3.innerHTML = "Terceira funçao"
body.appendChild(btn3)
btn3.onclick = montarTabela
