// Contar cuantas veces aparece un substring en un string dado

const countSubstrings = (str, searchValue) => {
    let count = 0,
        i = 0;
    while (true) {
        const r = str.indexOf(searchValue, i);
        if (r !== -1) {
            ++count;
            i = r + 1;
        }
        else return count;
    }
};
let count = countSubstrings('tiktok tok tok tik tok tik', 'tik'); // 3
let count2 = countSubstrings('tutut tut tut', 'tut'); // 4

console.log(count)
console.log(count2)

