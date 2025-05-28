// Funzione di base con callback

function somma(x, y) {
    return x + y;
}

function calcola(x, y, callback) {
    return callback(x, y);
}

console.log(calcola(2, 6, somma));

// Funzione con callback e passaggio di parametri

function divisione(x, y, callback) {
    const result = x / y;
    callback(result);
}

divisione(10, 2, function (divisione) {
    console.log(divisione);
});

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

let simplePromise = new Promise(function (resolve, reject) {
    let Err = true;
    setTimeout(() => {
        if (Err) {
            reject(new Error("Qualcosa è andato storto!"));
        } else {
            resolve("Ciao");
        }
    }, 2000);
});

simplePromise.then((r) => console.log(r));

// Gestione di una promessa con catch

simplePromise.catch((e) => {
    console.error("Errore", e.message);
});

// Promessa con finally
let Promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ciao"), 1000);
})
    .then((r) => console.log(r))
    .catch((e) => {
        console.error("Errore", e.message);
    })
    .finally(() => console.log("Stop"));

// Catena di promesse semplici

let CatenaPromesse = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10), 1000);
})
    .then(function (num) {
        return num * 2;
    })
    .then(function (num) {
        return num + 3;
    })
    .then((r) => console.log(r));

// Catena di promesse con condizioni

let CatenaPromesseConCondizione = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(9), 500);
}).then(function (num) {
    if (num % 2 === 0) {
        return num * 2;
    } else {
        return num * 3;
    }
});

CatenaPromesseConCondizione.then((r) => console.log(r));

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

<<<<<<< HEAD
// Eseguire una richiesta POST

// Gestione degli errori con async e await

// Compprendere un errore CORS

// Utilizzare un proxy per bypassare CORS

// Utilizzare un'API che supporta CORS
=======
const get = {
    userId: 0,
    id: '',
    title: ''
}


async function getData(url){
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            },
           
        });
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.error(error);
    }
}

getData("https://jsonplaceholder.typicode.com/albums");

// Eseguire una richiesta POST

const post = {
    userId: 1,
    id: 1,
    title: 'Lorem ipsum',
    completed: 'true'
}


async function postData(url){
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        });
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.error(error);
    }
}

postData("https://jsonplaceholder.typicode.com/todos");

// Gestione degli errori con async e await



// Comprendere un errore CORS
>>>>>>> aeb35f6 (complete get and post ex)
