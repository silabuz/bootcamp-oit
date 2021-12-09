// Encontrar el carácter que se usa con más frecuencia en una cadena.

let myStr = "Hello silabuz it's amazing to be here. Find the most used character in this sentence"

const countingChars = (str) => {
    const charCount = {}; //Step 0
    let maxCharCount = 0;
    let maxChar = '';
    for (let i = 0; i < str.length; i++) { // Step 1.
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }
    for (let key in charCount) { //Step 2
        if (charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key] //Step 3
            maxChar = key;
        }
    }

    return maxChar; //Step 4
}

let result = countingChars(myStr)
console.log(result)