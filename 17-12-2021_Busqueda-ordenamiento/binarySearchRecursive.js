// Implementar busqueda binaria en javascript (recursiva)

const binaySearch = (array, search) => {

    const middlePoint = Math.floor(array.length / 2);

    if (array[middlePoint] === search) {
        return array[middlePoint];
    }

    if (array[middlePoint] < search && array.length > 1) {
        return binaySearch(array.slice(middlePoint), search);
    }

    if (array[middlePoint] > search && array.length > 1) {
        return binaySearch(array.slice(0, middlePoint), search);
    }

    return "not found :(";
}

let array = [100, 200, 300, 400, 500, 600, 700];
let search = 200;
let result = binaySearch(array, search)

console.log(result)