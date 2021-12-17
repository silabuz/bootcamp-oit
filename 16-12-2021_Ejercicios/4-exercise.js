// Encuentre la letra que falta en el rango de letras aprobadas y devuélvala.
// Si todas las letras están presentes en el rango, devuelve undefined.
// missingLetterFinder("abce") debería devolver la letra d
// missingLetterFinder("stvwx") deberia devolver la letra u.



const missingLetterFinder = (str) => {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str
        .split("")
        .forEach(letter => {
            if (letter.charCodeAt(0) === currCharCode) {
                currCharCode++;
            } else {
                missing = String.fromCharCode(currCharCode);
            }
        });

    return missing;
}

let result = missingLetterFinder("lmnoqrstu")
console.log(result)