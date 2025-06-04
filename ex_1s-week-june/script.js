// Gestire i cookies

document.cookie = "user=John; domain=site.com"

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;

function setCookie(name, value, options = {}) {


    options = {
        path: './',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        "max-age": -1
    })
}

setCookie("user", "Giovanni", { secure: true, 'max-age': 3600 });
console.log("Cookies", document.cookie)

deleteCookie("user");
console.log("Deleted cookies", document.cookie);

setCookie("user", "Simone", { secure: true, 'max-age': 3600 });
console.log("Cookies", document.cookie)


// Utilizzare il localStorage

// Utilizzare il sessionStorage

// Utilizzare localStorage e session Storage insieme

// Oggetto document

// getElementById

// querySelector

// Modifica il testo di un paragrafo

// Cambia lo stile

// Modifica l'html

// Crea una lista

// Crea i list items

// Submit
