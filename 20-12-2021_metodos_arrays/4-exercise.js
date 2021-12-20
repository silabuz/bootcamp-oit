// Escriba una funcion en javascript que calcule el promedio de edades de un conjunto de personas (objects)

const getAgeAverage = (array) => {
    let ages = 0;
    for (let index = 0; index < array.length; index++) {
        ages += array[index].age
    }

    return ages / array.length

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