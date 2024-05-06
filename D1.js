/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const stringa = "Questa è una stringa di prova"; /* il tipo stringa consiste in testo, delimitato da apici, sia doppi che singoli. */
const numero = 26; /* il tipo numero consiste, come dice il nome, in numeri sia interi che decimali. Non si devono mettere gli apici, se lo si fa il numero viene considerato come testo (stringa) */
const booleanVero = true;
const booleanFalso = false; /* il tipo booleano ha solo due valori, true e false, e serve a verificare la veridicità o meno di una determinata condizione */
const esempioAssenzaVolutaValore = null; /* il valore null si utilizza per segnalare l'assenza volontaria di un valore. Nella logica booleana consiste in una condizione di false */
let esempioNonDefinito /* in una situazione come questa qui, in cui non viene attribuito un valore ad una variabile, il suo valore è undefined */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName = "A. Alberto";
console.log("Mi chiamo", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 12;
const num2 = 20;
console.log("Il risultato di 12 + 20 è ", num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12;
console.log("Il valore della variabile x è: ", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* myName = "Coscia";
console.log("Il mio cognome:", myName); non si può riassegnare una variabile const, in questo caso la console del browser restituisce l'errore "invalid assignment to const 'myName'"
per riassegnare la variabile myName, avrei dovuto dichiararla con il costrutto let */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const y = 4;
console.log("Il risultato di 4-12 è ", y - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

