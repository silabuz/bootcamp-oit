// Uno de los cifrados más simples y más conocidos es el cifrado César, también conocido como cifrado por desplazamiento. 
// En un cifrado de cambio, los significados de las letras se modifican en una cantidad determinada.
// Un uso moderno común es el cifrado ROT13, donde los valores de las letras se desplazan 13 lugares. 
// Por tanto, A = N, B = O y así sucesivamente.
// Escriba una función que tome una cadena codificada ROT13 como entrada y devuelva una cadena decodificada.
// EJEMPLO:
//  Dada frase = "HOLA SILABUZ"
//  se espera el retorno de = "UBYN FVYNOHM"

//  y viceversa

//  Dada frase = "UBYN FVYNOHM"
//  se espera el retorno de = "HOLA SILABUZ"


function rot13(str) {

    var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];
    var alphabets13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];

    var resultStr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if (str[i] === alphabets[j]) {
                resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
};

let encoded = rot13("HOLA SILABUZ");
let decoded = rot13("UBYN FVYNOHM");

console.log(encoded)
console.log(decoded)
