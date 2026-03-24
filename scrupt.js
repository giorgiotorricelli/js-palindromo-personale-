//l'utente ci da una parola o un numero

const parolaDaVerificare = prompt("Inserisci una parola (o un numero) per vedere se è un palindromo: ");

//verifichiamo che la stringa abbia almeno una lunghezza maggiore di 1
if (parolaDaVerificare.length < 2) {
    console.log("Deve avere una lunghezza di almeno 2 caratteri, riprova");
}
