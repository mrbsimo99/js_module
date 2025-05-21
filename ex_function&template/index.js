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

let mioOggetto = { marca: "Alfa", modello: "Mito" };
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

console.table([{ nome: "Simone", cognome: "Morabito" },
{ nome: "Antonino", cognome: "Ambrogio", },
{ nome: "Domenico", cognome: "Mazza" }
])

console.group("Saluti");
console.log("Buongiorno")
console.log("Ciao");
console.log("Buonasera");
console.groupEnd();
console.log("Fine Saluti")


// Utilizzare set Timeout

function saluto() {
  console.log("Benvenuto");
}

setTimeout(saluto, 3000);

// Utilizzare setInterval

const salutaUtente = setInterval(() =>
  console.log("Benvenuto Utente"), 2000);

setTimeout(() => { clearInterval(salutaUtente); console.log("Stop"); }, 5000);

const salutaGianfranco = setInterval(() =>
  console.log("Benvenuto Gianfranco"), 1000);

setTimeout(() => { clearInterval(salutaGianfranco); console.log("Addio Gianfranco"); }, 5000);

// Gestione di un errore semplice
const division = (num1, num2) => {
  try {
    if (num1 === 0 || num2 === 0) {
      throw new Error("Non puoi dividere per 0")

    }
    let risultato = num1 / num2;
    console.log(` Risultato = ${risultato}`)
  } catch (error) {
    console.log(error.message)
  }
}

division(10,5)

// Gestione di più tipi di errori

const operation = () => {
  try {
    
  } catch (error) {
    
  }
}



// Uso di finally per eseguire codice indipendente dal risultato