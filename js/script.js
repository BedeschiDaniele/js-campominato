// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// Il computer deve generare 16 numeri casuali tra 1 e 100.
var arraypc = [];
for (var i = 0; i <16; i++) {
  numeropc= Math.floor(Math.random() * 100) + 1;
  console.log(numeropc);
  // I numeri non possono essere duplicati.
  var bool = arraypc.includes(numeropc);
  if (bool==false) {
    arraypc.push(numeropc);
  }else {
    i--;
  }
}
  console.log(arraypc);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var i=0;
var fine=false;
var totale = 0;
var arrayutente = [];
while (i<10 && fine==false) {
  var numeroutente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100:"));
  // La partita termina quando il giocatore inserisce un numero “vietato”
  if (numeroutente > 100 || numeroutente < 1) {
    alert("Partita Terminata: numero non valido");
    fine = true;
  }
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
  for (var j = 0; j < arraypc.length; j++) {
    if (arraypc[j] == numeroutente) {
      alert("Partita Terminata");
      fine = true;
    }
  }
  //L’utente non può inserire più volte lo stesso numero.
  var bool = arrayutente.includes(numeroutente);
  if (bool==false) {
    arrayutente.push(numeroutente);
  }else {
    i--;
  }
  i++;
  totale += 1;
  //La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
  if (i >= 10) {
    alert("Partita Terminata: hai superato il numero massimo possibile di numeri consentiti");
    fine = true;
  }
}
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log(arrayutente);
alert("Punteggio: " + totale);
