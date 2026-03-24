//dichiaro la variabile

let parolaDaVerificare 

//verifichiamo che la stringa abbia almeno una lunghezza maggiore di 1
//dopo 5 tentativi errati il programma si stoppa
for (let i = 0; i < 5; i++) {
    //l'utente inserisce il valore
    parolaDaVerificare = prompt("Inserisci una parola (o un numero) per vedere se è un palindromo: ");
    
    //controllo la lunghezza
    if (parolaDaVerificare.length < 2) {
        console.log("Deve avere una lunghezza di almeno 2 caratteri, riprova");
    } else {
        //se la lunghezza è giusta
        break
    }
    
    if (i === 4) {
        //se hai superato i 5 tentativi
        console.log("Hai superato il numero di tentativi, ricarica la pagina per riprovare");
    }
    
}
