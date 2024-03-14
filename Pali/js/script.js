// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

// Chiedo all’utente di inserire una parola
const userWord = prompt('Inserisci una parola');

// Creo la variabile risultato finale che richiama la funzione
const reverseUserWord = revertWord(userWord);
console.log(reverseUserWord);

// Creo la variabile messaggio per confermare se la parola è palindroma
let userMessage;
if (reverseUserWord === userWord) {
    userMessage = 'La parola ' + userWord + ' è palindroma';
} else {
    userMessage = 'La parola ' + userWord + ' non è palindroma';
}
console.log(userMessage);
alert(userMessage);


// -------- FUNCTION REVERSE WORD ----------

function revertWord (word) {

    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        const thisLetter = word[i];
        console.log(thisLetter);
        
        reverseWord += thisLetter;
    }
    return reverseWord;

}
