// Implementar algoritmo de ordenacion de burbuja

let arr = [1, 2, 3, 4, 53, 2, 1, 3, 5, 4, 2, 35, 5]

const sorter = (arr) => {
    if (arr.length < 1) return []

    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let tempValue = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = tempValue
                sorted = false;
            }
        }
    }
    return arr

}

let sortedArr = sorter(arr)

console.log(sortedArr)
