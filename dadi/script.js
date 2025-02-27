const min = 1;
const max = 6;

// //genero numero da 1 a 6 per pc
// let numberPC = Math.floor(Math.random() * (max - min + 1)) + min;

// //genero numero da 1 a 6 per il giocatore
// let numberPlayer = Math.floor(Math.random() * (max - min + 1)) + min;

// alert(`Il PC lancia il dado ed esce il numero ${numberPC}`);
// alert(`Il Giocatore lancia il dado ed esce il numero ${numberPlayer}`);

// //se il numero generato per il pc è superiore a quello del giocatore
// if(numberPC > numberPlayer){

//     //stampo un messaggio dove il pc è il vincitore
//     alert(`Il PC vince la partita`);

// //altrimenti se il numero generato per il giocatore è superiore a quello del pc
// }else if(numberPlayer > numberPC){

//     //stampo un messaggio dove il giocatore è il vincitore
//     alert(`Il Giocatore vince la partita`);

// //altrimenti
// }else{

//     //stampo un messaggio di parità
//     alert(`Pareggio!`);
// }

/****************
TRACK BONUS
****************/

//genero numero da 1 a 6 per pc
let numberPC = Math.floor(Math.random() * (max - min + 1)) + min;

//genero numero da 1 a 6 per il giocatore
let numberPlayer = parseInt(prompt('Inserisci un numero da 1 a 6'));

//verifico il numero sia compreso tra 1 e 6
if (numberPlayer > 0 && numberPlayer < 7) {
    alert(`Il PC lancia il dado ed esce il numero ${numberPC}`);

    //se il numero generato per il pc è superiore a quello del giocatore
    if (numberPC > numberPlayer) {

        //stampo un messaggio dove il pc è il vincitore
        alert(`Il PC vince la partita`);

        //altrimenti se il numero generato per il giocatore è superiore a quello del pc
    } else if (numberPlayer > numberPC) {

        //stampo un messaggio dove il giocatore è il vincitore
        alert(`Il Giocatore vince la partita`);

        //altrimenti
    } else {

        //stampo un messaggio di parità
        alert(`Pareggio!`);
    }

//altrimenti
}else{

    //stampo messaggio di riprovare
    alert('RIPROVA! Inserisci un numero da 1 a 6');
}
