// Escriba una funcion que compare fechas y senhale la mayor y menor
// las fechas deben estar en el formato (mes/dia/año)

let compareDates = (date1, date2) => {
    if (date1 > date2) return `${date1} es mayor que ${date2}`;
    else if (date1 < date2) return `${date1} es menor que ${date2}`;
    else return `${date1} y ${date2} son iguales`;
}

let date1 = new Date('11/14/2013').toLocaleDateString();
let date2 = new Date('11/14/2013').toLocaleDateString();

let date3 = new Date('12/14/2013').toLocaleDateString();
let date4 = new Date('11/14/2013').toLocaleDateString();

let date5 = new Date('12/14/2013').toLocaleDateString();
let date6 = new Date('12/15/2013').toLocaleDateString();

let result = compareDates(date1, date2);
let result2 = compareDates(date3, date4);
let result3 = compareDates(date5, date6);


console.log(result)
console.log(result2)
console.log(result3)

