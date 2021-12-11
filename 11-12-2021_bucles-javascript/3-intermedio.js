//  implementar algoritmo de ordenamiento por insercion "insertion-sort"

const insertionSort = (array) => {
    if (array.length < 1) return []

    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            } else {
                break;
            }

        }
    }
    return array;
}

let unsortedArray = [1, 5, 8, 4, 2, 3, 6, 5, 4, 8, 5, 6, 71, 2, 5, 2, 5, 23, 8, 4, 7, 2]

console.log(insertionSort(unsortedArray))