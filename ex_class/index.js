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
        return "Chilometraggio attuale: " + this.chilometraggio +" km";
    }

    descrizione() {
        return this.marca + " " + this.modello + " " + this.anno + " " + this.chilometraggio + " km";
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

