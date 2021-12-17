// Implementa busqueda binaria en javascript (no-recursiva)

const binaySearch = (arr, search) => {

    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === search) return arr[mid];

        else if (arr[mid] < search)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return false;
}

let arr = [1, 3, 5, 7, 8, 9];
let search = 5;
let result = binaySearch(arr, search)

console.log(result) // returns 5