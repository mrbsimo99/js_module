// Stringa semplice con template literals

let nome2 = "Alessandro";
let cognome2 = "Magno";

let stringaSemplice = `${nome2} ${cognome2}`;

console.log(stringaSemplice);

// Stringa multilinea con template literals

let nome3 = "Paolo";
let cognome3 = "Strati";
let eta3 = 36;
let citta3 = "Benevento";

let StringaMultilinea = `nome: ${nome3} 
cognome: ${cognome3} 
età: ${eta3}  
città: ${citta3}`;

console.log(StringaMultilinea);

// Funzione e template literals
function Persona4(persona) {
  return `
  nome: ${persona.nome}
  cognome: ${persona.cognome}
  eta: ${persona.eta}
  citta: ${persona.citta}
  `;
}

const QuartaPersona = {
  nome: "Claudia",
  cognome: "Spadino",
  eta: 27,
  citta: "Roma"
};

console.log(Persona4(QuartaPersona));

// Utilizzare console log

console.log(10, "Ciao", [2, 4, 6]);

let mioOggetto = {marca: "Alfa", modello: "Mito"};
console.log(mioOggetto)

// Utilizzare console.error e console.warn

const eta = 16;
const Pegi = "PEGI 18"; 

if (Pegi === "PEGI 18" && eta < 16) {
  console.error("Errore: sei troppo giovane");
} else if (Pegi === "PEGI 18" && eta < 18) {
  console.warn("Avviso: il gioco è classificato PEGI 18. Contiene contenuti inappropriati.");
}

// Utilizzare console.table e console.group

