// Realice una búsqueda y reemplace la oración utilizando los argumentos proporcionados y
// devuelva la nueva oración.
// El primer argumento es la oración para realizar la búsqueda y reemplazarla.
// El segundo argumento es la palabra que reemplazará (antes).
// El tercer argumento es lo que reemplazará el segundo argumento con (después).

const replacer = (sentence, wordToReplace, replacerWord) => {
    const wordIndex = sentence.indexOf(wordToReplace, 0)
    if (wordIndex === -1) return "La palabra que quiere remplazar no esta en la oracion"
    let newSentence = sentence.replace(wordToReplace, replacerWord)
    return newSentence
}

let sentence = "El lunes es un gran dia para programar"
let wordToReplace = "lunes"
let replacerWord = "viernes"

let result = replacer(sentence, wordToReplace, replacerWord)
console.log(result)