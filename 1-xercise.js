//  Cree un array de numeros que sean el doble de los del primer array. Se deben usar Array functions.

function doubleElements(e) {
    return e * 2
}

let arr = [2, 4, 6, 8, 10, 12, 14]
let arr2 = arr.map(doubleElements)

console.log(arr2)