function najdiZnakVTexte(text, znak) {
    for(var i = 0; i < text.length; i++) {
        if(text[i] === znak) {
            return "Znak '" + znak + "' sa nachádza na pozícii " + i + ".";
        }
    }
    return "Znak " + znak + " sa v texte - " + text + " nenachadza!";
}

function vypisTextOdzadu(text) {
    var textOdzadu = ""
    for(var i = text.length - 1; i >= 0; i--) {
        textOdzadu += text[i];
    }
    return textOdzadu ;
}

console.log("Cvicenie 1. - " + najdiZnakVTexte("programovanie","o"));

console.log("Cvicenie 2. - " + vypisTextOdzadu("hello"));

function najdiVyskytZnaku(text, znak) {
    var pocet = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === znak) {
            pocet++;
        }
    }
    if (pocet > 0) {
        return "Znak '" + znak + "' sa v texte nachádza " + pocet + "-krát.";
    } else {
        return "Znak '" + znak + "' sa v texte nenachádza.";
    }
}


console.log("Cvičenie 3. - " + najdiVyskytZnaku("jozo", "o"));

function hangman(word, attempts) {
    let hidden = "_".repeat(word.length);
    
    while (attempts > 0 && hidden.includes("_")) {
        let guess = prompt(`Slovo: ${hidden}\nHádaj písmeno:`);
        
        if (word.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    hidden = hidden.substring(0, i) + guess + hidden.substring(i + 1);
                }
            }
        } else {
            attempts--;
            alert(`Zle! Ostáva ${attempts} pokusov.`);
        }
    }
    
    alert(hidden.includes("_") ? `Prehral si! Slovo bolo: ${word}` : `Vyhral si!`);
}
console.log(hangman("jadjsasd", "1"))

