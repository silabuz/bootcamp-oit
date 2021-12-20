// Dado un array de objetos ej.
// [{name:"name", age"12}, {name:"name2", age:13}]
// descomponer los objecto en arrays ej. ["name", 12], ["name2", 13]
// retornar un array con los objectos descompuestos (transformados a arrays)
// ej. [["name", 12], ["name2", 13]]

const getAgeAverage = (array) => {
    let arr = []
    for (let index = 0; index < array.length; index++) {
        arr.push([array[index].name, array[index].age])
    }

    return arr;

}

let arr = [
    { name: "person-1", age: 12 },
    { name: "person-2", age: 13 },
    { name: "person-3", age: 12 },
    { name: "person-4", age: 22 },
    { name: "person-5", age: 12 },
    { name: "person-6", age: 22 },
    { name: "person-7", age: 33 },
    { name: "person-8", age: 44 },
    { name: "person-9", age: 11 },
]

let result = getAgeAverage(arr)
console.log(result)


