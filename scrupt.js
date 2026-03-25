//dichiaro le variabili

let verificaLunghezza;
let parolaDaVerificare = ""

//verifichiamo che la stringa abbia almeno una lunghezza maggiore di 1
//dopo 5 tentativi errati il programma si stoppa
for (let i = 0; i < 5; i++) {
    //l'utente inserisce il valore
    verificaLunghezza = prompt("Inserisci una parola (o un numero) per vedere se è un palindromo: ");
    
    //controllo la lunghezza
    if (verificaLunghezza.length < 2) {
        console.log("Deve avere una lunghezza di almeno 2 caratteri, riprova");
    } else {
        //se la lunghezza è giusta
        parolaDaVerificare += verificaLunghezza
        break
    }
    
    if (i === 4) {
        //se hai superato i 5 tentativi
        console.log("Hai superato il numero di tentativi, ricarica la pagina per riprovare");
    }
    
}

    //utilizzo Math.floor() nel caso i cui i caratteri della parola siano dispari mi consideri la
    //prima metà della parola senza la lettera centrale
    const primaMetaDellaParola = parolaDaVerificare.slice(0, Math.floor(parolaDaVerificare.length / 2))
    //utilizzo Math.ceil() nel caso i cui i caratteri della parola siano dispari mi consideri la
    //seconda metà della parola senza la lettera centrale
    const secondaMetaDellaParolaDaInvertire = parolaDaVerificare.slice(Math.ceil(parolaDaVerificare.length / 2))
    //dichiaro la variabile assegnandole il tipo stringa altrimenti al primo ciclo for mi stampa undefined
    let secondaMetaDellaParolaInvertita = ""

    for (let i = secondaMetaDellaParolaDaInvertire.length -1; i > -1; i--)  {
        secondaMetaDellaParolaInvertita += secondaMetaDellaParolaDaInvertire[i]
    }

    if (primaMetaDellaParola === secondaMetaDellaParolaInvertita) {
        console.log(`${parolaDaVerificare} è un palindromo`);
    } else {
        console.log(`${parolaDaVerificare} non è un palindromo`);
    }


