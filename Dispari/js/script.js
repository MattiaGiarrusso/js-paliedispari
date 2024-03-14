// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// creo il prompt per chiedere all'utente cosa uscirà come somma finale: pari o dispari? 
const userChoise = prompt('La somma finale sarà pari o dispari?');
console.log(userChoise);

// creo il prompt per chiedere un numero pari o dispari all'utente
const userNumber = parseInt(prompt('Dimmi un numero tra 1 e 5'));

// creo la variabile per comunicare se il numero scelto dall'utente è pari o dispari
let userNumberEvenOrOdd = evenOrOdd(userNumber);
console.log(userNumberEvenOrOdd);
let userMessage;
if(userNumberEvenOrOdd === 'pari') {
    userMessage = userNumber + ' è pari';
} else {
    userMessage = userNumber + ' è dispari';
}
console.log(userMessage);
alert(userMessage);


// ------ FUNCTION EVEN OR ODD -------

// creo la funzione per stabilire se userNumber è pari o dispari
function evenOrOdd(number) {

    let numEvenOrOdd;
    
    if(number % 2 === 0) {
        numEvenOrOdd = 'pari';
    } else {
        numEvenOrOdd = 'dispari';
    }

    return numEvenOrOdd;
}


//------ FUNCTION RANDOM NUMBER --------

const randomNumber = getRndInteger(1, 5);
console.log(randomNumber);
alert(randomNumber);

// Copio la funzione per generare random dei numeri tra 1 e 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// ------- SOMMA DEI NUMERI --------

// Creo la variabile somma che richiama la funzione sommaNumeri
let sumNum = sommaNumeri(userNumber, randomNumber);
console.log(sumNum);
alert(sumNum);

let sumMessage;
if(sumNum % 2 === 0) {
    sumMessage = sumNum + ' è pari';
} else {
    sumMessage = sumNum + ' è dispari';
}
console.log(sumMessage);
alert(sumMessage);

// Creo la variabile messaggio finale per verificare se ha vinto o ha perso
let finalMessage;
if(sumNum % 2 === 0 && userChoise === 'pari') {
    finalMessage = 'Hai vinto';
} else if (sumNum % 2 !== 0 && userChoise === 'dispari') {
    finalMessage = 'Hai vinto'; 
} else {
    finalMessage = 'Hai perso';
}
console.log(finalMessage);
alert(finalMessage);

//-------- FUNCTION SUM ---------
function sommaNumeri(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
