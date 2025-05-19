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
  peso: "90,5 kg"
};

console.log(PokèmonStarter);
