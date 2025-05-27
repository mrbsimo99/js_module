// Funzione di base con callback

function somma(x, y) {
    return x + y;
}

function calcola(x, y, callback) {
    return callback(x, y)
}

console.log(calcola(2, 6, somma))



// Funzione con callback e passaggio di parametri

function divisione(x, y, callback) {
    const result = x / y;
    callback(result);
}

divisione(10, 2, function (divisione) { console.log(divisione) })

// Callback annidati

function moltiplicazione(x, y, moltiplica) {
    moltiplica(x * y);
}

function sottrazione(x, y, sottrai) {
    sottrai(x - y);
}

moltiplicazione(6, 3, function (moltiplica) {
    sottrazione(moltiplica, 7, function (sottrai) {
        console.log(sottrai);
    });
});

// Creare una promessa semplice 

//let simplePromise = new Promise(function(resolve,reject) {
//  setTimeout(() => resolve("Ciao"), 1000);
//});

//simplePromise.then(
//   r => console.log(r));


// Gestione di una promessa con catch

let simplePromise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("")), 2000);
});

simplePromise.catch(e => {
    console.error("Errore", e.message)
})

// Promessa con finally
let Promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ciao"), 1000);
});

Promessa.then(r => console.log(r));
Promessa.finally(() => console.log("Stop"))

// Catena di promesse semplici

// Catena di promesse con condizioni

// Catena di promesse con gestione degli errori 

// Gestione degli errori con catch

// Gestione degli errori in una catena di promesse

// Utilizzare Promise.all

// Utilizare Promise.race

// Utilizzare Promise.allSettled

// Funzione asincrona semplice

// Gestione degli errori con try e catch

// Funzioni asincrone in serie

// Eseguire una richiesta GET semplice

// Eseguire una richiesta POST

// Gestione degli errori con async e await

// Compprendere un errore CORS

// Utilizzare un proxy per bypassare CORS

// Utilizzare un'API che supporta CORS