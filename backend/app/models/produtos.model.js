const sql = require("./db.js");
//Construtor
const ProdutoModel = function(produto){
    this.name = produto.name;
    this.valor = produto.valor;
}
//Cria novo produto no banco 
ProdutoModel.create = (produto, result) => {
};
//Seleciona produto por ID 
ProdutoModel.findById = (produtoId, result) => {
};
//Seleciona todos os produtos
ProdutoModel.getAll = result => {
};
//Atualizar produto por ID
ProdutoModel.updateById = (produtoId, produto, result) => {
};
//Remover produtos por ID
ProdutoModel.remove = (produtoId, result) => {
};
//Remover todos os produtos 
ProdutoModel.removeAll = (result) => {
};
module.exports = ProdutoModel; 