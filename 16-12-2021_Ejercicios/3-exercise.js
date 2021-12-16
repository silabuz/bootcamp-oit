// Escriba una función de JavaScript para restar elementos entre sí en un array.
// Si se proporciona un tipo de dato que no sea array como parametro, retonar false
// Si alguno de los valores en el array no es un numero, retornar false

const subtraction = (arr) => {
    if (Object.prototype.toString.call(arr) !== '[object Array]')
        return false

    let total = arr[0];
    if (typeof (total) !== 'number')
        return false;

    for (var i = 1, length = arr.length; i < length; i++) {
        if (typeof (arr[i]) === 'number') {
            total -= arr[i];
        }
        else
            return false;
    }
    return total;
}

let array = [7, 3, 2, -1]
let result = subtraction(array)

console.log(result);