// Dado un array. items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
// eliminar todos los elementos que contenga una "w" o "e" en su nombre

const destroyer = (array) => {
    if (Object.prototype.toString.call(array) !== '[object Array]') return false

    let i = 0;
    while (i < array.length) {
        let isWordPresent = false;
        if (typeof (array[i]) !== 'string')
            return false;
        array[i]
            .split("")
            .forEach(char => {
                char = char.toLowerCase()
                if (char === "w" || char === "e") isWordPresent = true;
            });

        if (isWordPresent) array.splice(i, 1)
        else i++
    }
    return array

}

let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
let result = destroyer(items)
console.log(result)