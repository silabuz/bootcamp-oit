let word1 = "ana";
let word2 = "bob";
let word3 = "luz azul";
let word4 = "yo hago yoga hoy";
let word5 = "no palindromo";
let word6 = "no palindromo no no";



const reverseWord = (word) => {
    let noSpacesWord = word.replaceAll(" ", "")
    let splitWord = noSpacesWord.split("")
    let reverseArray = splitWord.reverse()
    let joinedWord = reverseArray.join("")
    return joinedWord
}

const isPalindromeChecker = (word) => {
    let reversedWord = reverseWord(word)
    let noSpacesWord = word.replaceAll(' ', '')
    return noSpacesWord === reversedWord
}

let firstPalindrome = isPalindromeChecker(word1)
let secondPalindrome = isPalindromeChecker(word2)
let thirdPalindrome = isPalindromeChecker(word3)
let fourthPalindrome = isPalindromeChecker(word4)
let fifthNoPalindrome = isPalindromeChecker(word5)
let sixthNoPalindrome = isPalindromeChecker(word6)

console.log(firstPalindrome)
console.log(secondPalindrome)
console.log(thirdPalindrome)
console.log(fourthPalindrome)
console.log(fifthNoPalindrome)
console.log(sixthNoPalindrome)
