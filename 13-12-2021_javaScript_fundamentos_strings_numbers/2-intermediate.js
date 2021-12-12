// Find longest wornd in a string and return its length
// Encontrar la palabra las larga en un string y retornar su longitud

function findLongestWord(str) {
    str = str.split(" ");
    var array = [];
    for (var i = 0; i < str.length; i++) {
        array.push(str[i].length);
    }
    return array.sort(function (a, b) {
        return a - b
    }).pop();
}

let str = "tratemos con una palabra grande a ver su longitud: otorrinolaringología";


let result = findLongestWord(str);

console.log(result)
