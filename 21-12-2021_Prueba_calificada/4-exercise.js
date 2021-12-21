// Dado un array multidimencional de 4 x 4
/* array = [
    [10,22,33,10],
    [73,28,13,32],
    [13,14,15,21],
    [10,88,98,12],
]*/
// Retornar la suma de la diagonal principal menos el total de la suma de la diagonal secundaria
// Ejemplo: (10 + 28 + 15 + 12) - (10 + 13 + 14 + 10) = 18

const diagonalCalculation = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (j === i) total += array[i][j]
            if ((j + i) === array.length - 1) total -= array[i][j]
        }
    }
    return total

}

let array = [
    [10, 22, 33, 10],
    [73, 28, 13, 32],
    [13, 14, 15, 21],
    [10, 88, 98, 12]
]

let result = diagonalCalculation(array)
console.log(result)