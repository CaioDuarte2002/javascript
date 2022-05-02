function mensagem(){

console.log("Olá, eu venho de um modulo")


}

function Data(){

console.log (new Date().toLocaleDateString())

}

export function soma(n1,n2){

console.log(n1+n2)

}

export {mensagem}
export {Data}