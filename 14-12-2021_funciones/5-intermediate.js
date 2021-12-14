// Retornar la diferencia de dos arrays, es decir, retornar unicamente elementos que no se repitan entre estos dos arrays

const arrayDifference = (arr, arr2) => {
    let newArr = []

    if (arr.length < 1 && arr2.length < 1) return []

    for (let i = 0; i < arr.length; i++) {
        let isPresent = false
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr[i]) isPresent = true
        }
        if (!isPresent) newArr.push(arr[i])
    }

    for (let i = 0; i < arr2.length; i++) {
        let isPresent = false
        for (let j = 0; j < arr.length; j++) {
            if (arr2[i] === arr[j]) isPresent = true
        }
        if (!isPresent) newArr.push(arr2[i])
    }
    return newArr;
}

let arr = [1, 2, 3, 5, 6]
let arr2 = [1, 2, 3, 4, 5]

console.log(arrayDifference(arr, arr2))
