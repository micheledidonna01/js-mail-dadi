const min = 1;
const max = 6;

//genero numero da 1 a 6 per pc
let numberPC = Math.floor(Math.random() * (max - min + 1)) + min;

//genero numero da 1 a 6 per il giocatore
let numberPlayer = Math.floor(Math.random() * (max - min + 1)) + min;

alert(`Il PC lancia il dado ed esce il numero ${numberPC}`);
alert(`Il Giocatore lancia il dado ed esce il numero ${numberPlayer}`);

if(numberPC > numberPlayer){
    alert(`Il PC vince la partita`);
}else if(numberPlayer > numberPC){
    alert(`Il Giocatore vince la partita`);
}else{
    alert(`Pareggio!`);
}