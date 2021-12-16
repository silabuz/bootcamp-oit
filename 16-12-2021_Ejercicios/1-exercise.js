// Le pasaremos una matriz de dos números.
// Devuelve la suma de esos dos números más la suma de todos los números
// entre ellos. El número más bajo no siempre vendrá primero.

const sumNumberRanger = (array) => {
    if (array[0] === array[1]) return array[0] + array[1]

    let start = array[0] < array[1] ? array[0] : array[1]
    let end = array[0] > array[1] ? array[0] : array[1]

    let result = start + end;

    for (let index = start + 1; index < end; index++)
        result += index

    return result;
}

console.log(sumNumberRanger([5, 8]))