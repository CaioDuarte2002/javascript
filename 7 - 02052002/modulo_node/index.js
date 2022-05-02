class Produto {

constructor (nome, descricao ,preco){

this.nome = nome;
this.descricao = descricao;
this.preco = preco;


}
}

function cadastro(produto){

console.log(`cadastramos o produto ${produto.nome}`);
console.log(`o preço deste produto é R$ ${produto.preco}`)

}

module.exports = {Produto, cadastro}


