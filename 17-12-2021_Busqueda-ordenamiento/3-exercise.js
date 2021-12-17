// Cree la función pitagórica en JavaScript.
//  calcular la hipotenusa usando la ecuacion
//  c2 = raiz(a2 + b2) "C= hipotenusa; a y b son los lados catetos"

const pythagoreanTheorem = (x, y) => {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return Math.sqrt(x * x + y * y);
}

let x = 2;
let y = 4;

let result = pythagoreanTheorem(x, y)
console.log(`La hipotenusa es ${result}`);
