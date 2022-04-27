function verificarcpf (){

var cpfusuario = document.getElementById("cpf").value 
var cpfcalculo = cpfusuario.substring(0,9) 
/* o comando substring permite "quebrar" uma string em caracteres assim voce consegue pegar 
a quantidade de caracteres que quiser.
no caso abaixo estamos pegando o primeiro caracter  (posicao 0 ) 
ate o nono caracter. temos , entao os 9 prmeiros numeros do cpf */
console.log(cpfcalculo)
var peso10 = 10 
var peso11 = 11 
var resultado = 0 
var resto = 0 
for (var i = 0; i < 9; i++) {

resultado += cpfcalculo[i] * peso10 // += faz virar uma variavel acumulativa
peso10--;
}
console.log(resultado)

resto = resultado % 11 

if  (resto < 2 ) {

    cpfcalculo+=0 
}

else{

    cpfcalculo+=(11-resto)
}

console.log(cpfcalculo)
//vamos zerar a variavel resultado
resultado = 0 

for (var i = 0 ; i < 10 ; i++){
    resultado += cpfcalculo[i] *peso11
    peso11--;
}
console.log(resultado)
resto = resultado % 11

if (resto < 2 ) {
    cpfcalculo +=0
}
else {
    cpfcalculo += 11 - resto
}

console.log(cpfcalculo)

if (cpfcalculo !=cpfusuario){

    alert ("cpf incorreto")
}

}