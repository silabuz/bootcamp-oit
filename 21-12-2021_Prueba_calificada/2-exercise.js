// Dada una lista de objetos de personas con atributos de nombre y DNI
/* Ejemplo: [
   { name: "person-1", DNI: 10012345 },
   { name: "person-2", DNI: 10045678 },
   { name: "person-3", DNI: 10012345 },
   { name: "person-4", DNI: 10012333 },
   { name: "person-5", DNI: 10045678 },
   { name: "person-6", DNI: 10032422 },
   { name: "person-7", DNI: 10045678 },
   { name: "person-8", DNI: 10045478 },
   { name: "person-9", DNI: 10054788 },
] */
// Dado que los DNI son registros unicos, la repetida existencia de estos es un problema
// Se deben retornar las personas con DNI's duplicados:
/* Ejemplo: [
    { name: "person-1", age: 12, DNI: 10012345 },
    { name: "person-3", age: 78, DNI: 10012345 },
]
*/

const getDuplicatedDnis = (array) => {
    let arr = []

    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i].DNI === array[j].DNI) counter++
        }
        if (counter > 1) arr.push(array[i])
    }
    return arr;
}

let array = [
    { name: "person-1", DNI: 10012345 },
    { name: "person-2", DNI: 10045345 },
    { name: "person-3", DNI: 10011245 },
    { name: "person-4", DNI: 10012345 },
    { name: "person-5", DNI: 10065345 },
    { name: "person-6", DNI: 10012125 },
    { name: "person-7", DNI: 10012346 },
    { name: "person-8", DNI: 10011145 },
    { name: "person-9", DNI: 10012145 },
]

let result = getDuplicatedDnis(array)
console.log(result)




