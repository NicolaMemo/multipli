// Questo commento introduce la dichiarazione della funzione test37,
// specificando che è una funzione che accetta un parametro x.
function test37(x) {

  // Qui viene spiegato che la funzione verifica se il parametro x è
  // divisibile per 3 o 7 utilizzando l'operatore modulo (%).
  if (x % 3 == 0 || x % 7 == 0) {

    // Questi commenti indicano che, se la condizione della
    // verifica è vera, la funzione restituirà true, altrimenti
    // restituirà false.
    return true;
  } 
  // Questi commenti spiegano che vengono effettuate quattro
  // chiamate alla funzione test37 con diversi argomenti,
  // e i risultati vengono registrati sulla console attraverso console.log().
  else {
    return false;
  }
}

// Registra il risultato della chiamata alla
// funzione test37 con l'argomento 12 sulla console
console.log(test37(12));

// Registra il risultato della chiamata alla
// funzione test37 con l'argomento 14 sulla console
console.log(test37(14));

// Registra il risultato della chiamata alla
// funzione test37 con l'argomento 10 sulla console
console.log(test37(10));

// Registra il risultato della chiamata alla
// funzione test37 con l'argomento 11 sulla console
console.log(test37(11));
