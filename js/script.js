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
var diff = parseInt(prompt("Seleziona la difficoltà: 0 => tra 1 e 100  1 =>  tra 1 e 80  2 =>  tra 1 e 50"));
// con difficoltà 0 => tra 1 e 100
if (diff==0) {
  var arraypc = [];
  for (var i = 0; i < 16; i++) {
    numeropc= randomNumber();
    console.log(numeropc);
    var bool = NumExistInArray(arraypc,numeropc);
    if (bool==false) {
      arraypc.push(numeropc);
    }else {
      i--;
    }
  }
  console.log(arraypc);
  var i=0;
  var totale = 0;
  var arrayutente = [];
  do {
    var numeroutente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100:"));
    var bool = NumExistInArray(arrayutente , numeroutente);
    if (bool==false) {
      arrayutente.push(numeroutente);
      totale += 1;
    }else {
      i--;
    }

    var numerovietato=false;
    numerovietato = numberInvalid(numeroutente);
    var nummax=false;
    nummax = NumMax();
    var numerocorretto=false
    numerocorretto = endprogram(arraypc , numeroutente);
    i++;
  }while (i<84 && numerovietato == false && numerocorretto == false);
}
// con difficoltà 1 =>  tra 1 e 80
if (diff==1) {
  var arraypc = [];
  for (var i = 0; i < 12; i++) {
    numeropc= randomNumber80();
    console.log(numeropc);
    var bool = NumExistInArray(arraypc,numeropc);
    if (bool==false) {
      arraypc.push(numeropc);
    }else {
      i--;
    }
  }
  console.log(arraypc);
  var i=0;
  var totale = 0;
  var arrayutente = [];
  do {
    var numeroutente = parseInt(prompt("Inserisci un numero compreso tra 1 e 80:"));
    var bool = NumExistInArray(arrayutente , numeroutente);
    if (bool==false) {
      arrayutente.push(numeroutente);
      totale += 1;
    }else {
      i--;
    }

    var numerovietato=false;
    numerovietato = numberInvalid80(numeroutente);
    var nummax=false;
    nummax = NumMax80();
    var numerocorretto=false
    numerocorretto = endprogram(arraypc , numeroutente);
    i++;
  }while (i<64 && numerovietato == false && numerocorretto == false);
}
// con difficoltà 2 => tra 1 e 50
if (diff==2) {
  var arraypc = [];
  for (var i = 0; i < 8; i++) {
    numeropc= randomNumber50();
    console.log(numeropc);
    var bool = NumExistInArray(arraypc,numeropc);
    if (bool==false) {
      arraypc.push(numeropc);
    }else {
      i--;
    }
  }
  console.log(arraypc);
  var i=0;
  var totale = 0;
  var arrayutente = [];
  do {
    var numeroutente = parseInt(prompt("Inserisci un numero compreso tra 1 e 50:"));
    var bool = NumExistInArray(arrayutente , numeroutente);
    if (bool==false) {
      arrayutente.push(numeroutente);
      totale += 1;
    }else {
      i--;
    }

    var numerovietato=false;
    numerovietato = numberInvalid50(numeroutente);
    var nummax=false;
    nummax = NumMax50();
    var numerocorretto=false
    numerocorretto = endprogram(arraypc , numeroutente);
    i++;
  }while (i<34 && numerovietato == false && numerocorretto == false);
}

console.log(arrayutente);
if (numerovietato==true) {
  console.log("Partita Terminata: numero non valido");
}
if (nummax==true) {
  console.log("Partita Terminata: hai superato il numero massimo possibile di numeri consentiti");
}
if (numerocorretto==true) {
  console.log("Partita Terminata: Punteggio totale: " + totale);
}

//------------------------------------------------------------------------------
// Il computer deve generare 16 numeri casuali tra 1 e 100.
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
// Il computer deve generare 16 numeri casuali tra 1 e 80.
function randomNumber80() {
  return Math.floor(Math.random() * 80) + 1;
}
// Il computer deve generare 16 numeri casuali tra 1 e 50.
function randomNumber50() {
  return Math.floor(Math.random() * 50) + 1;
}
//L’utente non può inserire più volte lo stesso numero.
function NumExistInArray(array , n) {
	var bool = false;
  for(var i=0; i<array.length; i++) {
  	if(array[i] == n) {
    	bool = true;
    }
  }
  return bool;
}
// La partita termina quando il giocatore inserisce un numero “vietato”
function numberInvalid(numero) {
  if (numeroutente > 100 || numeroutente < 1) {
    return true;
  }else {
    return false;
  }
}
function numberInvalid80(numero) {
  if (numeroutente > 80 || numeroutente < 1) {
    return true;
  }else {
    return false;
  }
}
function numberInvalid50(numero) {
  if (numeroutente > 50 || numeroutente < 1) {
    return true;
  }else {
    return false;
  }
}
// Se il numero è presente nella lista dei numeri generati, la partita termina
function endprogram(array , numero) {
  var bool=false;
  for (var j = 0; j < array.length; j++) {
    if (array[j] == numero) {
      bool= true;
    }
  }
  return bool;
}
//La partita termina quando il giocatore raggiunge il numero massimo possibile di numeri consentiti.
function NumMax(){
  if (i >= 83) {
     return true;
  }else {
    return false;
  }
}
function NumMax80(){
  if (i >= 63) {
     return true;
  }else {
    return false;
  }
}
function NumMax50(){
  if (i >= 33) {
     return true;
  }else {
    return false;
  }
}
