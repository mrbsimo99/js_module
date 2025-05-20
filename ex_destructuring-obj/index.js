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

let { nome: prima, tipo: seconda, mossa: terza, debolezza: quarta } = Pokèmon;

console.log(prima, seconda, terza, quarta);

// Destructuring con valori predefiniti

let Automobile = {
  marca: "Alfa",
  modello: "Mto",
};

let { marca, modello, anno = 0, chilometraggio = 0 } = Automobile;

anno = 2011;
chilometraggio = 200000;

console.log(marca, modello, anno, chilometraggio);

// Copia di un oggetto con proprietà aggiuntive

let PokèmonStarter = {
  ...Pokèmon,
  altezza: "1,7m",
  peso: "90,5 kg",
};

console.log(PokèmonStarter);

// Funzione con parametri variabili
function somma(...Valori) {
  return Valori.reduce((acc, cur) => acc + cur, 0);
}
console.log(somma(1, 3, 5, 11, 15, 23));

// Destructuring oggetto con rest operator

const Persona = {
  nome1: "Giuseppe",
  cognome: "Rossi",
  citta: "Roma",
  eta: 30,
};

const { nome1, cognome, ...altro } = Persona;

console.log(nome1);
console.log(cognome);
console.log(altro);

// Conversione di un oggetto in una stringa JSON

const PersonaInJson = JSON.stringify(Persona);
console.log(PersonaInJson);

// Conversione di una stringa JSON in un oggetto

const Json =
  '{"nome": "Franco", "cognome": "Verdi", "citta": "Milano", "eta": "50"}';
const JsonPersona = JSON.parse(Json);
console.log(JsonPersona);

// Manipolazione di dati JSON

const JsonListaDiPersone = `[
  { "nome": "Giuseppe", "citta": "Palermo"},
  { "nome": "Francesco", "citta": "Reggio Calabria"},
  { "nome": "Giovanni", "citta": "Potenza"}
]`;

const ListaDiPersone = JSON.parse(JsonListaDiPersone)
console.log(ListaDiPersone);

ListaDiPersone.push({
  nome: "Marco",
  citta: "Messina",
});

const ListaDiPersoneAggiornata = JSON.stringify(ListaDiPersone);
console.log(ListaDiPersoneAggiornata);

