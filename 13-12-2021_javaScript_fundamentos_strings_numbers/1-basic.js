// Return largest number in a array
// Retorna el numero mas largo en un array

function getLargestNumber(arr) {
    arr.sort(function (a, b) {
        return a - b
    });
    return arr[arr.length - 1];
}

const array = [1, 100, 200, 2, 15, 23, 233, 5, 555, 854, 999, 12]

let result = getLargestNumber(array);

console.log(result)
