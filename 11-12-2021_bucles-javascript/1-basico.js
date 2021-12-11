// Cargar un array con numeros pares hasta un limite deifinido

const evenNumberCharger = (limit) => {
    let arr = []
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) arr.push(i)
    }
    return arr
}

let limit = 50;
let result = evenNumberCharger(limit)

console.log(result)