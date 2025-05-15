//  Automobile

class Automobile {
    marca = ""
    modello = ""
    anno = 0
    #contatoreChiamate = 0
    #chilometraggioPrivato = 0

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
        this.#chilometraggioPrivato = chilometraggio;
    }

    contatoreChiamate() {
        return "Chiamate:" + " " + this.#contatoreChiamate;
    }

    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    aggiungiChilometriPrivato(km) {
        if (km > 0) {
            this.chilometraggio += km;
            this.#incrementaContatore();
        }
    }

    mostraContatoreChiamate() {
        return this.#contatoreChiamate + " volte.";
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        return "Chilometraggio attuale " + this.modello + ":" + this.chilometraggio + " km";
    }

    descrizione() {
        return this.marca + " " + this.modello + " " + this.anno + " " + this.chilometraggio + " km";
    }

    #calcolaEtà() {
        const year = new Date().getFullYear()
        return year - this.anno;
    }

    mostraEtà() {
        const età = this.#calcolaEtà();
        return this.marca + " " + this.modello + " :" + età + " anni";
    }

    _controllaChilometri(km) {
        if (km > 100000)
            return "Attenzione, superati i 100000km";
    }

    static confrontaChilometri(auto1, auto2) {
        if (auto1.chilometraggio > auto2.chilometraggio) {
            return auto1.marca + " " + auto1.modello + " ha più chilometri.";
        } else if (auto2.chilometraggio > auto1.chilometraggio) {
            return auto2.marca + " " + auto2.modello + " ha più chilometri.";
        }
        else {
            return auto1.modello + " " + "e" + " " + auto2.modello + " hanno lo stesso chilometraggio";
        }
    }

    get getChilometraggio() {
        return this.#chilometraggioPrivato;
    }

    set setChilometraggio(km) {
        if (km >= this.#chilometraggioPrivato) {
            this.#chilometraggioPrivato = km;
        }
    }

    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return "Il veicolo fa parte di " + classe.name;
        } else {
            return "Il veicolo non fa parte di " + classe.name;
        }
    }

}
let Auto1 = new Automobile("Alfa", "Mto", 2011, 60000);
console.log(Auto1.descrizione());

// Aggiungi metodo & proprietà
let Auto2 = new Automobile("Alfa", "Giulietta", 2010, 59850)

console.log(Auto2.mostraChilometraggio());
Auto2.aggiungiChilometri(150);
console.log(Auto2.mostraChilometraggio());
console.log(Auto2.descrizione());


// Sottoclasse Elettrica 
class Elettrica extends Automobile {
    autonomia = 0

    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    descrizione() {
        return super.descrizione() + ", autonomia: " + this.autonomia + " km";
    }

    ricarica(km) {
        if (km > 0) {
            this.autonomia += km;
        }
    }
}

let Auto3 = new Elettrica("Alfa", "Giulia", 2020, 50000, 100);
console.log(Auto3.descrizione());
Auto3.ricarica(400);
console.log(Auto3.descrizione());

Automobile.prototype.saluto = function () {
    return "Ciao, questa è la macchina selezionata:" + " " + this.marca + " " + this.modello;
};

console.log(Auto1.saluto());
console.log(Auto2.saluto());
console.log(Auto3.saluto());

// Metodo privato
console.log(Auto1.mostraEtà());
console.log(Auto2.mostraEtà());
console.log(Auto3.mostraEtà());

// Metodo protetto 
const Tesla = new Elettrica("Tesla", "Model 3", 2025, 200000, 500)
console.log(Tesla)
console.log(Tesla._controllaChilometri(200000))

// Confronta km

console.log(Automobile.confrontaChilometri(Auto1, Auto2))

// Contatore // Incrementa contatore // Aggiungi km // Mostra contatore

console.log(Auto1.contatoreChiamate());
Auto1.aggiungiChilometriPrivato(100)
Auto1.aggiungiChilometriPrivato(1000)
console.log(Auto1.contatoreChiamate());

// Getter
console.log(Auto1.getChilometraggio);

// Setter
Auto1.setChilometraggiochilometraggio = 65000;
console.log(Auto1.mostraChilometraggio())
Auto2.setChilometraggiochilometraggio = 25000;
console.log(Auto2.mostraChilometraggio())

// Camion // Carico Massimo

class Camion extends Automobile {
    caricoMassimo = 5000;
    caricoAttuale = 0;

    constructor(marca, modello, anno, chilometraggio, caricoMassimo, caricoAttuale) {
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = caricoAttuale;
    }

    descrizione() {
        return super.descrizione() + ", Carico massimo: " + this.caricoMassimo + " kg, Carico attuale: " + this.caricoAttuale + " kg";
    }

    carica(kg) {
        if (this.caricoAttuale + kg > this.caricoMassimo) {
            console.log("Superato carico massimo");
        } else {
            this.caricoAttuale += kg;
            console.log(" kg. Carico attuale: " + this.caricoAttuale + " kg");
        }
    }
}

let Camion1 = new Camion("Fiat", "Scudo", 2004, 290000, 5000, 0);
console.log(Camion1.descrizione())
Camion1.carica(2000);
console.log(Camion1.descrizione())
Camion1.carica(3000)
console.log(Camion1.descrizione())
Camion1.carica(1000)
console.log(Camion1.descrizione())

// Verifica istanza 
let Auto4 = new Automobile("Fiat", "Punto", 2006, 90000)
let Camion2 = new Camion("Iveco", "Tector", 2008, 130000)

console.log(Automobile.verificaIstanza(Auto4, Automobile));
console.log(Automobile.verificaIstanza(Auto4, Camion));
console.log(Automobile.verificaIstanza(Camion2, Camion));
console.log(Automobile.verificaIstanza(Camion2, Automobile));