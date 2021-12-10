const { request, response } = require("express");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// informar para o Express que iremos utilizar JSON no Body
app.use(express.json());

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

// [POST] "/herois" Create (Criar)
app.post("/herois", (require, response) => {
    // console.log(request.body, typeof request.body);
    const item = require.body.nome;

    lista.push(item);
    response.send("Registro criado com sucesso!");
})

// [PUT] "/herois/:id" Update (Atualizar)
app.put("/herois/:id", (require, response) => {
    const id = require.params.id - 1;

    const item = require.body.nome;

    lista[id] = item;
    
    response.send("Registro atualizado com sucesso!");
})

app.listen(3333, () => {
    console.log("Rodando na porta 3333 🔥🚀")
});