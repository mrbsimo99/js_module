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

let gestioneErrori = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 30));
    }, 1000)
}).then(function (num) {
    if (num > 0 && num <= 20) {
        return num;
    } else {
        throw new Error("Il numero deve essere inferiore a 20");
    }
}).then((r) => {
    console.log("numero:", r);
});



// Gestione degli errori con catch

let num = 11;

let CatchError = new Promise(function (resolve, reject) {
    if (num < 10) {
        resolve(console.log("Ok"));
    } else {
        reject(new Error(""));
    }
}).catch((e) => {
    console.error("Nobody can match this amazing catch", e.message);
});


// Gestione degli errori con then e catch

let CatenaPromesseBooleano = new Promise(function (resolve, reject) {
    let valore1 = false;

    if (valore1 === true) {
        resolve("Ottimo");
    } else {
        reject(new Error("Errore"));
    }
}).then((message) => {
    console.log(message);
}).catch((e) => {
    console.error(e.message)
})

// Gestione degli errori in una catena di promesse



// Utilizzare Promise.all

const PrimaPromessaAll = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Prima")
    }, 1000);
});

const SecondaPromessaAll = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Seconda")
    }, 2000);
});

Promise.all([PrimaPromessaAll, SecondaPromessaAll]).then((r) => {
    console.log(r);
})

// Utilizzare Promise.race

const Promessa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Prima Promessa");
    }, 1000);
});
const Promessa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Seconda Promessa");
    }, 500);
});

Promise.race([Promessa1, Promessa2]).then((value) => {
    console.log(value);
})



// Utilizzare Promise.allSettled

const FirstPromiseToSettle = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Prima")
    }, 1500)
})
const SecondPromiseToSettle = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Seconda")
    }, 2000)
})
const ThirdPromiseToSettle = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Terza")
    })
}, 1000)

const promises = [FirstPromiseToSettle, SecondPromiseToSettle, ThirdPromiseToSettle];

Promise.allSettled(promises).then((results) =>
    results.forEach((r) => console.log(r)),
);


// Funzione asincrona semplice

function dueSecondi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Compaio dopo due secondi");
        }, 2000);
    });
}

async function asincronaSemplice() {
    console.log("waiting");
    const r = await dueSecondi();
    console.log(r);
}

asincronaSemplice();

// Gestione degli errori con try e catch

function GestioneErrori() {
    let valore2 = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("Ottimo");
            } else {
                reject(new Error("Errore"));
            }
        }, 3000);
    })
}


async function AsincronaConErrori() {
    try {
        console.log("waiting");
        const r = await GestioneErrori();
        console.log(r);
    } catch (e) {
        console.log(e)
    }
};

AsincronaConErrori()

// Funzioni asincrone in serie

function treSecondi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Compaio dopo tre secondi");
        }, 3000);
    });
}

function quattroSecondi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Compaio dopo quattro secondi");
        }, 4000);
    });
}

async function AsincroneInSerie() {
    const r1 = await treSecondi();
    console.log(r1);
    const r2 = await quattroSecondi();
    console.log(r2);

}

AsincroneInSerie();



// Eseguire una richiesta GET semplice

const get = {
    userId: 0,
    id: '',
    title: ''
}


async function getData(url) {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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


async function postData(url) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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


