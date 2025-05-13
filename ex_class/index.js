//  Automobile

class Automobile {
    marca = ""
    modello = ""
    anno = 0
    chilometraggio = 0

    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
        }
    }

    mostraChilometraggio() {
        return "Chilometraggio attuale: " + this.chilometraggio + " km";
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

}
let Auto1 = new Automobile("Alfa", "Mto", 2011);
console.log(Auto1.descrizione());

// Aggiungi metodo & proprietà
let Auto2 = new Automobile("Alfa", "Giulietta", 2010, 120000)

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
const Tesla = new Elettrica ("Tesla", "Model 3", 2025, 500, 500)
console.log(Tesla)
console.log(Tesla._controllaChilometri(200000))

