# Mail

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

## Soluzione

- lista di email di invitati alla festa
- chiedo l'email del ragazzo che vuole entrare
- se l'email ha almeno 10 caratteri
    - loop di controllo per controllare le mail
        - se l'email inserita corrisponde ad una già esistente nella lista di email di invitati alla festa
            - stampo un messaggio dove il ragazzo può entrare
            - esco dal ciclo
        - altrimenti se l'email scritta è diversa dalla lista dell'email e l'indice corrisponde alla lunghezza della lista dell'email -1
            - stampo un messaggio il ragazzo non può entrare
            - esco dal ciclo
- altrimenti
    - stampo un messaggio che dice di riprovare aggiornando la pagina