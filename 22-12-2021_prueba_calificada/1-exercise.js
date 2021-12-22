// Dada una lista de objetos de personas con atributos de edad, nombre y nacionalidad
/* Ejemplo: [
   { name: "alexander febres", age: 12, nacionalidad: "Venezolano" },
   { name: "jorge medina", age: 13, nacionalidad: "peruano" },
   { name: "edwin gonzales", age: 78, nacionalidad: "Chileno" },
   { name: "pedro ramirez", age: 22, nacionalidad: "Mexicano" },
   { name: "juan rojas", age: 12, nacionalidad: "Argentino" },
   { name: "luis paredes", age: 64, nacionalidad: "Canadiense" },
   { name: "Christian guitierrez", age: 55, nacionalidad: "Aleman" },
   { name: "manuel", age: 44, nacionalidad: "Uruguayo" },
   { name: "roberth", age: 32, nacionalidad: "Colombiano" },
] */
// Se deben retornar las personas separadas en tres categorias, siendos estas:
//  1- menores de edad (menores de 18 años)
//  2- mayoes de edad (18 años o mayores)
//  3- tercera edad  (mas de 59 años)

// Adicionalmente se deben ordernar por nacionalidad
// y por ultimo deben de eliminarse las personas que contengan solo un nombre

/* Ejemplo: {
    menoresEdad: [
        { name: "juan rojas", age: 12, nacionalidad: "Argentino" },
        { name: "alexander febres", age: 12, nacionalidad: "Peruano" },
        { name: "jorge medina", age: 13, nacionalidad: "Venezolano" },
    ],
    mayoresEdad: [
       { name: "Christian guitierrez", age: 55, nacionalidad: "Aleman" },
       { name: "pedro ramirez", age: 22, nacionalidad: "Mexicano" },
    ],
    terceraEdad: [
        { name: "luis paredes", age: 64, nacionalidad: "Canadiense" },
        { name: "edwin gonzales", age: 78, nacionalidad: "Chileno" },
    ],
} */

const sortByCountry = (a, b) => {
    if (a.nacionalidad < b.nacionalidad) {
        return -1;
    }
    if (a.nacionalidad > b.nacionalidad) {
        return 1;
    }
    return 0;
}

const deleteSingleNamePeople = (array) => {
    let index = 0;
    while (index < array.length) {
        let name = array[index].name.split(" ")
        if (name.length < 2) array.splice(index, 1);
        else index++;
    }
    return array
}

const sortByCategory = (array) => {
    let youngers = [];
    let adults = [];
    let elders = [];

    // Separeting by category
    for (let index = 0; index < array.length; index++) {
        if (array[index].age >= 18 && array[index].age < 60) adults.push(array[index])
        else if (array[index].age >= 60) elders.push(array[index])
        else youngers.push(array[index])
    }

    // Removing single name people
    youngers = deleteSingleNamePeople(youngers)
    adults = deleteSingleNamePeople(adults)
    elders = deleteSingleNamePeople(elders)

    // Sorting by country
    youngers.sort(sortByCountry)
    adults.sort(sortByCountry)
    elders.sort(sortByCountry)

    return { youngers: youngers, adults: adults, elders: elders }
}

let array = [
    { name: "alexander febres", age: 12, nacionalidad: "venezolano" },
    { name: "jorge medina", age: 13, nacionalidad: "peruano" },
    { name: "edwin gonzales", age: 78, nacionalidad: "chileno" },
    { name: "pedro ramirez", age: 22, nacionalidad: "mexicano" },
    { name: "juan rojas", age: 12, nacionalidad: "argentino" },
    { name: "luis paredes", age: 64, nacionalidad: "canadiense" },
    { name: "Christian guitierrez", age: 55, nacionalidad: "aleman" },
    { name: "manuel", age: 44, nacionalidad: "uruguayo" },
    { name: "roberth", age: 32, nacionalidad: "colombiano" },
]

let result = sortByCategory(array)
console.log(result)