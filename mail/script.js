//creo una lista di email di invitati alla festa
let email = [
    'michele@gmail.com',
    'francesco@gmail.com',
    'federico@gmail.com',
    'beatrice@gmail.com',
    'peppe07@gmail.com',
    'pisoloschiaccio@gmail.com'
];

//chiedo l'email del ragazzo che vuole partecipare alla festa
let emailInvited = prompt('Dimmi la tua email');

//verifico che l'email abbia almeno 10 caratteri per essere valida
if (emailInvited.length >= 10) {


    //ciclo for controllo email
    for (let i = 0; i < email.length; i++) {
        let verifyEmail = email[i];

        //se l'email esiste nella lista di email degli invitati
        if (emailInvited === verifyEmail) {

            //stampo un messaggio dove il ragazzo può entrare
            alert(`Entra pure, l'email ${emailInvited} corrisponde ai nostri invitati`);
            break;

        //altrimenti se l'email scritta è diversa dalla lista dell'email 
        //e l'indice corrisponde alla lunghezza della lista dell'email -1
        } else if ((emailInvited !== verifyEmail) && (i === email.length - 1)) {
            //stampo un messaggio il ragazzo non può entrare
            alert(`Mi dispiace, l'email ${emailInvited} non corrisponde. Non sei stato invitato alla festa`);
            break;
        }
    }

//altrimenti  
} else {
    emailInvited = prompt('Riscrivi la tua email correttamente');

    //riverifico che l'email abbia almeno 10 caratteri per essere valida
    if(emailInvited >= 10){
        alert('RIPROVA! Riaggiorna la pagina');
    }
}


