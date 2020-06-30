//Il computer deve generare 16 numeri casuali tra 1 e 100
var arrayNumrand = [];
for (var i = 0; i < 16; i++) {
  var numrand = getRndInteger(1, 100);
  arrayNumrand.push(numrand);
  console.log(numrand);
}
// chiedere all'utente di inserire un numero alla volta (16-100) volte, sempre tra 1 e 100

var arrayNumUtente = [];

for (var i = 0; i < 2; i++) {
  var numeriUtente = prompt("Inserisci un numero tra 1 e 100 per 20 volte");
  arrayNumUtente.push(numeriUtente);
}
console.log(arrayNumUtente);



// funzioni

function getRndInteger(min, max){
  return Math.floor(Math.random() * (max-min + 1) ) + min;
}
