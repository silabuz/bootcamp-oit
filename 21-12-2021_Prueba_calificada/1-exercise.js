// Dada una lista de objetos con diferentes cantidades de atributos
// Ejemplo: [
//      { color: "rojo", marca: "Ford", aireAcondicionado: true, traccion: "trasera"}, // AUTO
//      {nombre: "alex", edad: 25}, // PERSONA
//      {color: "blanco", habitaciones: 4, ubicacion: "Arequipa"}, // CASA
// ]
// Se debe transformar a un equivalente en listas.
// Ejemplo: [
//      [["color": "rojo"], ["marca", "ford"], ["aireAcondicionado", true], ["traccion", "trasera"]], //AUTO
//      [["nombre": "alex"], ["edad", "25"], //PERSONA
//      [["color": "blanco"], ["habitaciones", 4], ["ubicacion", "Arequipa"]], //AUTO
// ]


const flattenObjects = (array) => {
    let arr = [];
    for (let index = 0; index < array.length; index++) {
        arr.push(Object.entries(array[index]))
    }
    return arr;
}


let array = [
    { color: "rojo", marca: "Ford", aireAcondicionado: true, traccion: "trasera" }, // AUTO
    { nombre: "alex", edad: 25 }, // PERSONA
    { color: "blanco", habitaciones: 4, ubicacion: "Arequipa" }, // CASA
]


let result = flattenObjects(array)
console.log(result)