// Escriba una funcion en javascript que mueva un elemento  de un array de una posicion a otra
// En el caso de que el elemento se repita tambien debe ser desplazado (a la posicion siguiente).

/* EJEMPLO:
    Dado un array = [1, 2, 2, 3, 4, 2, 5, 6, 7, 8, 9, 'hello', 'silabuz']
    un elemento a desplazar = 2
    y un indice de posicion = 4
*/

/* Se espera el retorno de:
    array = [ 1, 3, 4, 5, 2, 2, 2, 6, 7, 8, 9, 'hello', 'silabuz' ]
*/

const positionChanger = (array, element, position) => {
    let elementsToMove = []
    let arr = []

    for (let index = 0; index < array.length; index++) {
        if (array[index] === element) {
            elementsToMove.push(array[index]);
        }
    }

    array = array.filter(e => e !== element)

    for (let j = 0; j < array.length; j++) {
        if (j === position) {
            let temp = array[j]
            arr.push(...elementsToMove)
            arr.push(temp)
        } else {
            arr.push(array[j])
        }
    }

    if (!elementsToMove) return `Element ${element} is not present in this array`
    return arr
}

let array = [1, 2, 2, 3, 4, 2, 5, 6, 7, 8, 9, 'hello', 'silabuz']
let result = positionChanger(array, 2, 4)
console.log(result)