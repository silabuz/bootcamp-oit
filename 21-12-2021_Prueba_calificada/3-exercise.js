// Dada una lista de objetos de personas con atributos de edad, nombre
/* Ejemplo: [
   { name: "person-1", age: 12 },
   { name: "person-2", age: 13 },
   { name: "person-3", age: 78 },
   { name: "person-4", age: 22 },
   { name: "person-5", age: 12 },
   { name: "person-6", age: 64 },
   { name: "person-7", age: 55 },
   { name: "person-8", age: 44 },
   { name: "person-9", age: 32 },
] */
// Se deben eliminar las personas menores de edad.
// y ademas se debe retornar una lista con personas ordenadas descendientemente por edad :
/* Ejemplo: {
   { name: "person-3", age: 78 },
   { name: "person-6", age: 64 },
   { name: "person-7", age: 55 },
   { name: "person-8", age: 44 },
   { name: "person-9", age: 32 },
   { name: "person-4", age: 22 },
*/

const youngersEraser = (array) => {
    let arr = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].age >= 18) arr.push(array[index])
    }
    return arr
}

const arraySorter = (youngersEraser, array) => {
    let arr = youngersEraser(array)
    arr.sort((a, b) => b.age - a.age)
    return arr;
}

let array = [
    { name: "person-1", age: 12 },
    { name: "person-2", age: 13 },
    { name: "person-3", age: 78 },
    { name: "person-4", age: 22 },
    { name: "person-5", age: 17 },
    { name: "person-6", age: 64 },
    { name: "person-7", age: 55 },
    { name: "person-8", age: 44 },
    { name: "person-9", age: 32 },
]

let result = arraySorter(youngersEraser, array)
console.log(result)