// Estrazione di proprietà base

let Pokèmon = {
    nome: "Charizard",
    tipo: "Fuoco, Volante",
    mossa: "Lanciafiamme",
    debolezza: "Acqua, Elettro",
};

let { nome, tipo, mossa, debolezza } = Pokèmon;

console.log(
    "nome:",
    nome,
    "tipo:",
    tipo,
    "mossa:",
    mossa,
    "debolezza:",
    debolezza
);

// Destructuring con nomi di variabili diversi

let {nome : prima, tipo : seconda, mossa : terza, debolezza : quarta} = Pokèmon

console.log(prima,seconda,terza,quarta)
