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
var element = document.getElementById("start");
element.addEventListener('click',
 function() {
   var diff = parseInt(prompt("Seleziona la difficoltà: \n 0 => tra 1 e 100 \n 1 =>  tra 1 e 80 \n 2 =>  tra 1 e 50"));
   var number;
   var maxnumber;
   var maxnuminsert;
   switch (diff) {
     case 1:
       maxnumber=80;
       number = 12;
       maxnuminsert=63;
       break;
     case 2:
       maxnumber=50;
       number = 8;
       maxnuminsert=33;
       break;
     default:
     maxnumber=100;
     number = 16;
     maxnuminsert=83;
   }
   var arraypc = [];
   for (var i = 0; i < number; i++) {
     numeropc= randomNumber(maxnumber);
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
     numerovietato = numberInvalid(numeroutente , maxnumber);
     var nummax=false;
     nummax = NumMax(maxnuminsert);
     var numerocorretto=false
     numerocorretto = endprogram(arraypc , numeroutente);
     i++;
   }while (i<=maxnuminsert && numerovietato == false && numerocorretto == false);

   console.log(arrayutente);
   if (numerovietato==true) {
     console.log("Partita Terminata: numero non valido");
   }
   if (nummax==true) {
     console.log("Partita Terminata: hai superato il numero massimo possibile di numeri consentiti");
   }
   if (numerocorretto==true) {
     console.log("Hai Perso: Punteggio totale: " + totale);
   }
 }
);


//------------------------------------------------------------------------------
function randomNumber(maxnumber) {
  return Math.floor(Math.random() * maxnumber) + 1;
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
function numberInvalid(numero , maxnumber) {
  if (numero > maxnumber || numero < 1) {
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
function NumMax(maxnuminsert){
  var i;
  if (i >= maxnuminsert) {
     return true;
  }else {
    return false;
  }
}
