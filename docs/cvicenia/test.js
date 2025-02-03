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
