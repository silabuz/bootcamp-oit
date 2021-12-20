// Dados un array lleno de objetos (personas con atributos nombre y edad )
// retornar un nuevo array solo con las personas que sean mayor de edad.
// Se deben usar array functions

function legalAgePeopleFilter(e) {
    return e.age >= 18;
}

let arr = [
    { name: "person-1", age: 12 },
    { name: "person-2", age: 14 },
    { name: "person-3", age: 16 },
    { name: "person-4", age: 18 },
    { name: "person-5", age: 20 },
    { name: "person-6", age: 22 },
    { name: "person-7", age: 24 },
    { name: "person-8", age: 26 },
    { name: "person-9", age: 28 },
]

let legalAgrePeopleArr = arr.filter(legalAgePeopleFilter)
console.log(legalAgrePeopleArr)

