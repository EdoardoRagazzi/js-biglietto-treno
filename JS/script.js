//----VARTIABLES----
var kilometri = parseInt(prompt('Travel Km'));
var eta = parseInt(prompt('Età traveler'));

console.log(kilometri);
console.log(eta);

var prezzototale = kilometri * 0.21;
var sconto = 0;
//----CICLE----
if (eta < 18) {
    sconto = prezzototale * 0.2;
} else if (eta >= 65) {
    sconto = prezzototale * 0.4;
}
console.log(sconto);

var prezzofinale = parseInt(prezzototale - sconto);

console.log(prezzofinale);

//----FUNCTION----
document.getElementById("priceticket").innerHTML = prezzofinale;





