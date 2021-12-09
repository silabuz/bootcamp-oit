// Verificar si una palabra es anagrama de otra

let firstWord = "palabra"
let secondWord = "hola"

let firstAnagram = "marta"
let secondAnagram = "trama"


const anagrams = (str1, str2) => {
    if (str1.length !== str2.length) { //step 1
        return false;
    }
    let sort1 = str1.split('').sort(); // step 2
    console.log(sort1)
    let sort2 = str2.split('').sort();
    console.log(sort2)

    return sort1.join('') === sort2.join('');
}

let nonAnagram = anagrams(firstWord, secondWord)
let anagram = anagrams(firstAnagram, secondAnagram)

console.log(nonAnagram)
console.log(anagram)
