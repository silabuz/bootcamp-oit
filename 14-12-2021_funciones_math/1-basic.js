// Revertir el orden de un valor entero proporcionado

const intergerReverser = (number) => {
    let textNumber = number.toString()
    let reversedString = textNumber.split('').reverse().join('');
    let reversedNumber = parseInt(reversedString)
    return reversedNumber
}

let number = 458666555;
let result = intergerReverser(458555)
console.log(result)
