/*
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

function zoradPole(pole) {
    return pole.sort((a, b) => a - b);
}


const points = [40, 100, 1, 5, 25, 10];
const zoradene = zoradPole(points);

console.log(zoradene); 
*/
function naplnPole(n) {
    let pole = [];
    for (let i = 0; i < n; i++) {
        pole.push(Math.floor(Math.random() * 100) + 1);
    }
    return pole;
}
console.log(naplnPole(4))

function filterIntegers(arr) {
    return arr.filter(Number.isInteger);
}
console.log(filterIntegers([58, 'ABCDE', true, null, false, 0]));

const array20 = [[K, O, C, A, N, I, N, A, S, A, N]
[A, C, K, L, E, B, A, N, I, K, I]
[S, A, E, V, T, N, M, A, C, R, P]
[M, A, S, R, I, S, A, T, I, E, O]
[O, E, N, L, O, T, C, Z, N, C, C]
[P, R, A, B, A, B, K, A, D, U, I]
[R, M, E, A, R, Y, A, Y, E, L, M]
[V, U, E, I, O, T, E, L, L, R, N]
[CH, Y, Z, A, S, C, E, S, O, K, I]
[E, O, T, E, V, S, L, S, K, E, C]
[K, E, C, V, O, K, S, A, L, A, V]];

const word = "KOCANINA"

function searchword(grid, word){
    const directions =[ 
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
        

    ]    
    const rows = grid.length;
    const cols = grid[0].length;
    function isValid(x, y){
        return x >= 0 && x < rows && y >= 0 && y < cols;

    }

    function search(x, y, dx, dy){
        for(let i=0; i<word.length; i++){
            if(!isValid(x, y) || grid[x][y] !==word[i]){
               return false; 
            }
            x += dx;
            y +=dy;
        }

    }
    for(let i =0; i< rows; i++){
        for(let j = 0; j< cols; j++){
            if(grid[i][j]===word[0]){
                for(let [dx, dy] of directions){
                    if(search(i, j, dx, dy)){
                        console.log("nasiel som tu a tu take slovo a v tomto smere")
                    }


                }
            }
    
        }

    }
     


    return null;

}

