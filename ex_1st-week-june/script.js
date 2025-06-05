// Gestire i cookies

document.cookie = "user=John; domain=site.com";

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;

function setCookie(name, value, options = {}) {
  options = {
    path: "./",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

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
    "max-age": -1,
  });
}

setCookie("user", "Giovanni", { secure: true, "max-age": 3600 });
console.log("Cookies", document.cookie);

deleteCookie("user");
console.log("Deleted cookies", document.cookie);

setCookie("user", "Simone", { secure: true, "max-age": 3600 });
console.log("Cookies", document.cookie);

// Utilizzare il localStorage

localStorage.setItem("user", "Gianfranco");
console.log("User salvato:", localStorage.getItem("user"));

const user = localStorage.getItem("user");
console.log("User recuperato:", user);

localStorage.removeItem("user");
console.log("User rimosso:", localStorage.getItem("user"));

// Utilizzare il sessionStorage

sessionStorage.setItem("user", "Giuseppe");
console.log("User salvato:", sessionStorage.getItem("user"));

const user2 = sessionStorage.getItem("user");
console.log("User recuperato:", user2);

sessionStorage.removeItem("user");
console.log("User rimosso:", sessionStorage.getItem("user"));

// Utilizzare localStorage e session Storage insieme

localStorage.setItem("user", "Franco");
console.log("User salvato in locale:", localStorage.getItem("user"));

sessionStorage.setItem("user", "Leonardo");
console.log("User salvato in sessione:", sessionStorage.getItem("user"));

const user3 = localStorage.getItem("user");
console.log("User recuperato:", user3);

const user4 = sessionStorage.getItem("user");
console.log("User recuperato:", user4);

localStorage.removeItem("user");
console.log("User rimosso:", localStorage.getItem("user"));

sessionStorage.removeItem("user");
console.log("User rimosso:", sessionStorage.getItem("user"));

// Oggetto document

console.log("Il DOM di questa pagina è:", document);

// getElementById

const $text = document.getElementById("text");
console.log($text);

// querySelector

const $title = document.querySelector("#title");
console.log($title);

// Modifica il testo di un paragrafo

$text.innerText = "Buongiorno";
const testo = $text.innerText;

// Cambia lo stile

$text.style.backgroundColor = "yellow";
$text.style.fontSize = "30px";

// Modifica l'html

const $button = testo + "<button>Sono un bottone</button>";
$text.innerHTML = $button;

// Crea una lista

const ul = document.createElement("ul");

// Crea i list items
let h2 = document.createElement("h2");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li")

h2.innerText = "Lista frutta";
li1.innerText = "Banana";
li2.innerText = "Mela";
li3.innerText = "Pera";
li4.innerText = "Ananas";
li5.innerText = "Kiwi";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

document.body.appendChild(h2);
document.body.appendChild(ul);

// Submit

const $form = document.querySelector("#registration");
const $inputName = document.querySelector("#nome");
const $inputSurname = document.querySelector("#cognome");
const $message = document.querySelector("#message");

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!$inputName.value.trim() || !$inputSurname.value.trim()) {
    alert("Tutti i campi sono obbligatori");
  } else {
    $message.innerText = `Ciao ${$inputName.value} ${$inputSurname.value}`;
  }
});
