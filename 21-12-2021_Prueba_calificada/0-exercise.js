// Escriba una función de JavaScript para truncar una cadena a un cierto número de palabras
// Ejemplo:
//      Dado un string = "Hola silabuz feliz dia"
//      y un numero de palabras = 2
//      se espera el retorno de = "Hola silabuz"

const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
}

let str = "Hola silabuz feliz dia"
let result = truncate(str, 2)
console.log(result)