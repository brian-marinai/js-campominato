
//Il computer deve generare 16 numeri casuali tra 1 e 100;
var arrayBombe = [];
var maxBombe = 16;
// devo generare 16 numeri ma non devono esserci doppioni;
while (arrayBombe.length < maxBombe) {
  var bomba = getRandom(1, 100);
  if(inArray(arrayBombe, bomba) != true) {
    arrayBombe.push(bomba);
  }
}

// chiedere all'utente di inserire un numero (16-100) volte compreso tra 1 e 100 senza inserire doppioni;
var arrayNumUtente = [];
var tentativi = 100 - 16;
var punteggio = 0;
var i = 0;
var trovato = false;
// l'utente inserisce i numeri fino al massimo consentito;
while (arrayNumUtente.length < tentativi && trovato == false) {
  var numero = parseInt(prompt("inserisci un numero da 1 a 100"));
  if (isInRange(1, 100, numero) == true && inArray(arrayBombe, numero) == false && inArray(arrayNumUtente,numero) == false) {
    arrayNumUtente.push(numero);
    punteggio++;
  }
  if (inArray(arrayBombe, numero)) {
    alert("hai perso il tuo punteggio è : " + punteggio);
    trovato = true;
  }
}
if (punteggio == tentativi) {
  alert("hai vinto il tuo punteggio è : " + punteggio);

}

// funzioni
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function inArray (array, elemento) {
  var i = 0;
  var trovato = false;
  // questo ciclo si deve interompere se raggiungo la lunghezza dell'array oppure se trovo coorispondenza
  while (i < array.length && trovato == false) {
    if(array[i] == elemento) {
      trovato = true;
    }
    i++
  }
  return trovato;
}

function isInRange(min, max, num) {
  if(num >= min && num <= max && !isNaN(num)) {
    return true;
  }
  return false;
}
