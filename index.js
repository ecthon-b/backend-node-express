const { request } = require("express");
const express= require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (require, response) => {
    response.send("Hello World!");
});

app.get("/oi", (require, response) => {
    response.send("Oi!");
});

// Endpoints de Heróis

const lista = [
    "Mulher Maravilhar",
    "Capitã Marvel",
    "Homem de Ferro",
    "Homem Aranha"
];

// [GET] "/herois" Read All (Ler tudo)
app.get("/herois", (require, response) => {
    response.send(lista)
})

// [GET] "/herois/:id" Read Single - by Id (Ler individualmente pelo - pelo id)
app.get("/herois/:id", (require, response) => {
    const id = require.params.id - 1;

    // Problema para resolver:
    // Quando receber ID 1 pela rota, quero
    // que acesse o índice 0 da lista
    // "id - 1"

    const item = lista[id];

    response.send(item);
})

app.listen(3333, () => {
    console.log("Rodando na porta 3333 🔥🚀")
});