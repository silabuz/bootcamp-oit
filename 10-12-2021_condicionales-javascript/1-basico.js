// Retornar el indice de una letra en un string. Si la letra se 
// Encuentra mas de una vez retornar solo el primer indice.

let myString = "Today is a great day to learn to code";

const getStringIndex = (str, letter) => {
    let index;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter) {
            index = i;
            break;
        }
    }

    return index === undefined ? "No se encontro la letra" : index
}


let result = getStringIndex(myString, 'g')
console.log(result)

