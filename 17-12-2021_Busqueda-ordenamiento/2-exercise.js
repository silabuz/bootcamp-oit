// Implementacion de busqueda lineal en javascript
// Proporcionar un array y un valor a buscar
// Si el elemento se encuentra dentro del array
// Retonar el elemento y la posicion en la que se encuentra
// Si no se encuentra retornar false


const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return `The element ${arr[i]} is at index ${i}`
        }
    }
    return false
}

let key = 7777;
let array = [1, 2, 3, 4, 5, 2, 42, 8, 7, 7777]

let result = linearSearch(array, key)
console.log(result)