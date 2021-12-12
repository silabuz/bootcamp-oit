// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
// Escribe una funcion que separe (split) un array en un grupo de sub arrays de una logitud de elementos dada y luego los retorne como un  array multidimencional.

function chunk(arr, size) {
    var newArr = [];
    var innerArr = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        innerArr.push(arr[i]);
        count++;

        if (count === size || i === (arr.length - 1)) {
            newArr.push(innerArr);
            innerArr = [];
            count = 0;
        }
    }
    return newArr;
}

const size = 3;
const array = ["a", "b", "c", "d", "e", "f", "G", "h", "i"]

let result = chunk(array, size);
console.log(result)