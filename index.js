//Projeto para subir 1.

var express = require('express');
var app = express();

const port = process.env.PORT || 3000; //PORTA ou 3000 para rodar no heroku.

app.get("/", (req, res) => {
    res.send("<h1>Hello Word, primeiro projeto deploy node.js do Andre.</h1>");

})

app.listen(port, () => {
    console.log("Aplicação rodando em http://localhost:3000");
})