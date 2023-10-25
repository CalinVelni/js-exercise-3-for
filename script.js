// ---- Exercise 1 ----

// let numList = [];
// let num;

// for (let sum = 0; sum < 50; sum += num) {

//     num = Number(prompt('Inserisci numero'));

//     if (!isNaN(num)) {
//         numList.push(num);
//         console.log(numList);
//     }
//     else {
//         alert('Valore non valido');
//         num = 0;
//     }    
// }



// ---- Exercise 2 ----

// let N = Number(prompt('Quanti array vuoi generare?'));

// for (let i = 0; i < N; i ++) {

//     let randomNum = [];

//     for (let r = 0; r < 10; r++) {
//         randomNum.push(Math.ceil(Math.random() * 100));
//     }

//     console.log(randomNum);
// }



// ---- Exercise 3 ----

// let guestsList = ['Anna', 'Barbara', 'Claudio', 'Diego', 'Elena'];
// let invitation = null; 
// let yourName = prompt('Qual è il suo nome?');

// for (i = 0; i < guestsList.length && invitation === null ; i ++) {

//     let guest = guestsList[i];

//     if (guest === yourName) {
//         alert('Prego, entri pure alla festa');
//         invitation = true;
//     }

//     console.log(guest);

// }

// if (invitation === null) {
//     alert('Il suo nome non risulta nella lista');
// }



// ---- Exercise 4 ----

// let promptUtente = prompt('Dimm un numero a 4 cifre');
// let numero = parseInt(promptUtente);
// let numeroString = numero.toString();

// if(isNaN(numeroString) || numeroString.length !== 4){
//     alert('Non hai inserito un numero valido');
// }
// else {
//     let somma = 0;

//     for (let i=0; i<4; i++) {
//         let char = numeroString[i];
//         somma += Number(char);
//     }

// alert(somma);

// }



// ---- Exercise 5 ----

// let mela1 = {
//     varieta: 'rossa',
//     peso: 170,
//     diametro:  9,
// }
// let mela2 = {
//     varieta:  'verde',
//     peso: 165,
//     diametro:  8,
// }
// let mela3 = {
//     varieta:  'gialla',
//     peso:  170,
//     diametro:  9,
// }
// let mela4 = {
//     varieta:  'rossa',
//     peso:  190,
//     diametro:  10,
// }
// let mela5 = {
//     varieta:  'rossa',
//     peso:  200,
//     diametro:  11,
// }
// let mela6 = {
//     varieta:  'gialla',
//     peso:  150,
//     diametro:  7,
// }
// let mela7 = {
//     varieta:  'verde',
//     peso:  210,
//     diametro: 12,
// }
// let mela8 = {
//     varieta:  'verde',
//     peso:  205,
//     diametro:  11,
// }
// let mela9 = {
//     varieta : 'gialla',
//     peso:  235,
//     diametro:  13,
// }
// let mela10 = {
//     varieta:  'rossa',
//     peso:  160,
//     diametro:  8,
// }

// let cestoMele = [mela1, mela2, mela3, mela4, mela5, mela6, mela7, mela8, mela9, mela10];
// let meleGrandi = [];
// let melePiccole = [];
// let pesoTotale = 0;
// let pesoMeleGrandi = 0;
// let pesoMelePiccole = 0;


// for (let i = 0; i < cestoMele.length; i ++) {
//     let campione = cestoMele[i];
//     pesoTotale += campione.peso;

//     if (campione.diametro > 10) {
//         meleGrandi.push(campione);
//         pesoMeleGrandi += campione.peso;
//     }
//     else {
//         melePiccole.push(campione);
//         pesoMelePiccole += campione.peso;
//     }

// }

// console.log('Tutte le mele pesano: ' + pesoTotale + 'g');

// console.log('Le mele grandi pesano: ' + pesoMeleGrandi + 'g');

// console.log('Le mele piccole pesano: ' + pesoMelePiccole + 'g');

// console.log(meleGrandi);

// console.log(melePiccole);










