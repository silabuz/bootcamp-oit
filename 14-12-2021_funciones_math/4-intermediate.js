// Dado un número entero positivo, devuelve la suma de todos los números de Fibonacci impares que son menores o iguales que el numero.

const getFibonacciSecuence = (limit) => {
    let arr = [0, 1];
    for (let index = 1; index <= limit; index++) {
        arr.push(arr[index] + arr[index - 1])
    }
    return arr
}

const sumFibonacci = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        if (element % 2 !== 0) sum += element
    });
    return sum
}


let limit = 10;
let fibonacci = getFibonacciSecuence(limit)
let result = sumFibonacci(fibonacci)

console.log(fibonacci)
console.log(result)
