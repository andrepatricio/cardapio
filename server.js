var express = require('express');
var app = express();

var cardapio = [
    {descricao: "Água", preco: 4},
    {descricao: "Coca-Cola", preco: 7},
    {descricao: "Cerveja", preco: 9}
];

app.get("/cardapio", function(req, resp){
	resp.json(cardapio);
});

app.use(express.static("client"));

app.listen(3000);
