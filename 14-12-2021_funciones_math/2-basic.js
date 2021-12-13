// Escribir un algorithmo que formatee un numero hasta una cantidad especifica de decimales

const decimalFormater = (number, places) => {
    if ((typeof places !== 'number') || (typeof number !== 'number'))
        return false;
    number = parseFloat(number) || 0;
    return number.toFixed(places);
}

let number = 50.23556478145;
let places = 6;
let result = decimalFormater(number, places)

console.log(result)