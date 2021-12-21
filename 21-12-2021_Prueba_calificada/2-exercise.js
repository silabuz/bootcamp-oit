// Dada una lista de objetos de personas con atributos de edad, nombre y nacionalidad
/* Ejemplo: [
   { name: "person-1", age: 12, nacionalidad: "Peruano" },
   { name: "person-2", age: 13, nacionalidad: "Venezolano" },
   { name: "person-3", age: 78, nacionalidad: "Chileno" },
   { name: "person-4", age: 22, nacionalidad: "Mexicano" },
   { name: "person-5", age: 12, nacionalidad: "Argentino" },
   { name: "person-6", age: 64, nacionalidad: "Canadiense" },
   { name: "person-7", age: 55, nacionalidad: "Aleman" },
   { name: "person-8", age: 44, nacionalidad: "Uruguayo" },
   { name: "person-9", age: 32, nacionalidad: "Colombiano" },
] */
// Se deben retornar las personas separadas en tres categorias, siendos estas:
//  1- menores de edad (menores de 18 años)
//  2- mayoes de edad (18 años o mayores)
//  3- tercera edad  (mas de 59 años)
// 
/* Ejemplo: {
    menoresEdad: [
        { name: "person-1", age: 12, nacionalidad: "Peruano" },
        { name: "person-2", age: 13, nacionalidad: "Venezolano" },
        { name: "person-5", age: 12, nacionalidad: "Argentino" },
    ],
    mayoresEdad: [
       { name: "person-4", age: 22, nacionalidad: "Mexicano" },
       { name: "person-5", age: 12, nacionalidad: "Argentino" },
       { name: "person-7", age: 55, nacionalidad: "Aleman" },
       { name: "person-8", age: 44, nacionalidad: "Uruguayo" },
       { name: "person-9", age: 32, nacionalidad: "Colombiano" },
    ],
    terceraEdad: [
        { name: "person-3", age: 78, nacionalidad: "Chileno" },
        { name: "person-6", age: 64, nacionalidad: "Canadiense" },
    ],
*/


const sortByAges = (array) => {
    let youngers = [];
    let adults = [];
    let elders = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index].age >= 18 && array[index].age < 60) adults.push(array[index])
        else if (array[index].age >= 60) elders.push(array[index])
        else youngers.push(array[index])
    }

    return { youngers: youngers, adults: adults, elders: elders }
}

let array = [
    { name: "person-1", age: 12, nacionalidad: "Peruano" },
    { name: "person-2", age: 13, nacionalidad: "Venezolano" },
    { name: "person-3", age: 78, nacionalidad: "Chileno" },
    { name: "person-4", age: 22, nacionalidad: "Mexicano" },
    { name: "person-5", age: 12, nacionalidad: "Argentino" },
    { name: "person-6", age: 64, nacionalidad: "Canadiense" },
    { name: "person-7", age: 55, nacionalidad: "Aleman" },
    { name: "person-8", age: 44, nacionalidad: "Uruguayo" },
    { name: "person-9", age: 32, nacionalidad: "Colombiano" },
]

let result = sortByAges(array)
console.log(result)