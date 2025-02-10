
// Write your JavaScript code here
function najdiZnakVTexte(text, znak) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] === znak) {
            return "Znak '" + znak + "' sa nachádza na pozícii " + i + ".";
        }
    }
    return "Znak " + znak + " sa v texte - " + text + " nenachadza!";
}

function vypisTextOdzadu(text) {
    var textOdzadu = ""
    for (var i = text.length - 1; i >= 0; i--) {
        textOdzadu += text[i];
    }
    return textOdzadu;
}

function pocetVyskytov(slovo, znak) {
    var pocet = 0;
    for (var i = 0; i < slovo.length; i++) {
        if (slovo[i] === znak) {
            pocet++;
        }
    }
    return "Pocet znakov - " + znak + "  v texte " + slovo + " - " + pocet;
}

function faktorial(cislo) {
    let vysledok = 1;
    for (let i = cislo; i > 0; i--) {
        vysledok = vysledok * i;
    }
    return vysledok;
}

function najdiPocetSamohlasok(text) {
    let samohlasky = ["a", "e", "i", "o", "u"]
    let pocetSamohlasok = 0;
    for (pismenko of text) {
        if (samohlasky.includes(pismenko)) pocetSamohlasok++;
    }
    return pocetSamohlasok;
}

function fibonacci(maxCislo) {
    let postupnost = [];
    switch (true) {
        case (maxCislo < 0):
            return "Neplatne maxCislo";
        case (maxCislo === 0):
            postupnost = [0];
            return postupnost;
        default:
            postupnost = [0, 1];
            break;
    }

    for (let b = postupnost[postupnost.length - 1], a = postupnost[postupnost.length - 2];
        (b + a) <= maxCislo; b = postupnost[postupnost.length - 1], a = postupnost[postupnost.length - 2]) {
        postupnost.push(a + b);
    }
    return "Fibonacciho postupnosť do " + maxCislo + " je " + postupnost;
}

console.log("Cvicenie 1. - " + najdiZnakVTexte("programovanie", "o"));

console.log("Cvicenie 2. - " + vypisTextOdzadu("hello"));

console.log("Cvicenie 3. - " + pocetVyskytov("hello", "l"))

console.log("Cvicenie 4. - " + faktorial(5))

console.log("Cvicenie 5. - Počet samohlások v texte je " + najdiPocetSamohlasok("programovanie"))

console.log("Cvicenie 6. - " + fibonacci(10))

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


function countdown() {
    for (let i = 10; i >= 1; i--) {
        setTimeout(() => {
            console.log(i);
            if (i === 1) {
                setTimeout(() => console.log(" Liftoff "), 1000);
            }
        }, (10 - i) * 1000);
    }
}

countdown();
function guessNumber(correctNumber) {
    let guess;

    while (true) {
        guess = parseInt(prompt("Zadajte číslo:"), 10);

        if (guess < correctNumber) {
            alert("Číslo je vyššie ▶️");
        } else if (guess > correctNumber) {
            alert("Číslo je nižšie ◀️");
        } else {
            alert("Gratulujem! Uhádli ste správne číslo ");
            break;
        }
    }
}
guessNumber(7);

function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumArray([5, 10, 15, 20])); 

function findLongestWord(words) {
    let longestWord = "";

    words.forEach(word => { 
        if (word.length > longestWord.length) { 
            longestWord = word; 
        }
    });

    return longestWord; 
}

console.log(findLongestWord(["applesfafafafafssaf", "banana", "strawberry", "kiwi"])); 

function getEvenNumbers(numbers) {
    let evenNumbers = [];

    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    });

    return evenNumbers;
}

console.log(getEvenNumbers([7, 15, 8, 11, 10, 23, 12])); 


function removeDuplicates(numbers) {
    let uniqueNumbers = []; 
    numbers.forEach(num => { 
        if (!uniqueNumbers.includes(num)) { 
            uniqueNumbers.push(num);
        }
    });

    return uniqueNumbers; 
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 


