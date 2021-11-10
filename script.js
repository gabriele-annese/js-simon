/**
 * Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
 */

// ref
const number = document.querySelector(".display");
const numberCorrect = document.querySelector("#numbercomuni");
const numberIndovinati = document.querySelector("#numeriIndovinati");
const numberSabgliati = document.querySelector("#numeriSabglaiti");
// creiamo un array di 5 numeri casuali
const numberArray = [];
for (let i = 0; i < 5; i++){
    const numberRandom=genRandom (1, 10);
    numberArray.push(numberRandom)
}

console.log(numberArray);
// prinatere numeri
number.innerHTML += numberArray
// creiamo array user
const userArray = [];
// creiamo Array numeri comuni
const comuni = [];
// fa sparire numeri
const timer = setTimeout(()=>{
    number.innerHTML = "";
    while(userArray.length != 5){
        // cheidiamo per 5 volte un numero
        const user =parseInt(prompt("inserisci  i numeri che hai visualizzato prima"));
        // inseriamo numeri messi da user in un array
        userArray.push(user);
    }
    
    for (let i = 0; i < 6 ; i++){
        if(numberArray.includes(userArray[i])){
            comuni.push(userArray[i])
            numberIndovinati.innerHTML += `${comuni[i]},`;
        }
    }
}, 30000);
// funzione
function  genRandom (min, max){
    return Math.floor(Math.random()* (max-min) + min);
}

