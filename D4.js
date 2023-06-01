/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function area (l1 , l2) {
    let result = l1 * l2
    console.log("result",  result)
return result
}

area(5, 6)
area(10, 15)



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function crazySum(l1, l2) {

    if (l1 !== l2) {
        console.log ("il risultato sarà", l1 + l2)
    } else {
        console.log ("il risultato sarà" ,(l1 + l2) * 3)
    }
    
    return crazySum
}

crazySum(4, 5)
crazySum (4, 4)



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



 function crazyDiff(l1) {

     let diff = Math.abs(l1 - 19);
    
    if (l1 > 19) {
         diff *= 3; 
     }
    
 return diff

 }
 console.log(crazyDiff(18)); 





/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function boundary (n1) {
    if ((n1 >=20 && n1<= 100) || n1 === 400) {
        return true
    }

        else {
            return false
        }


    
}

console.log(boundary (400))




/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function epify(string) {


if (string.startsWith("EPICODE")) {
    
    return string;
     
} else {
    return "EPICODE" + string
}

}


console.log(epify("sblocca competenze tech"))
console.log(epify("EPICODEZZZ sblocca competenze tech"))
console.log(epify("NANANNANAEPICODEEE"))



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7 (n1) {

    if ((n1 % 3) === 0 || (n1 % 7) === 0 ) {
        console.log ("la funzione è", true)
    }
else {
    console.log ("la funzione è", false)
}

}

check3and7(14)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function reverseString(str) {
   let strArray = str.split(""); 
    let reversedArray = strArray.reverse();
    let reversedString = reversedArray.join(""); 
    return reversedString;
  }


  console.log(reverseString("EPICODE"))



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */





function upperFirst(text) {
    let words = text.split(" "); 
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1); 
    }
  
    let result = words.join(" "); 
  
    return result;
  }

  console.log(upperFirst("una stringa di diverse parole")); 


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(text) {
    if (text.length <= 2) {
      return ""; 
    } else {
      return text.slice(1, -1); 
    }
  }
  
  console.log(cutString("epicode"))



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function giveMeRandom(n) {

    let randomArray = [ ] ;

    for (let i = 0 ; i< n; i++) {
        let randomNumber = Math.floor(Math.random() * 11); 
        randomArray.push(randomNumber);

        return randomArray;
    }
}

console.log(giveMeRandom(3))













