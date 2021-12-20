// Dado un array de numeros retornar el promedio de estos. Se deben usar Array Functions

const getAverage = (arr) => {
    let result = arr.reduce((a, e, i, arr) => a + e)
    return result / arr.length;
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = getAverage(arr)
console.log(result)