//  Encontrar todos los indices de un sub-string en un string dado

const indexOfSubstrings = (str, searchValue) => {
    let i = 0;
    let indexes = []
    while (true) {
        const r = str.indexOf(searchValue, i);
        if (r !== -1) {
            indexes.push(r)
            i = r + 1;
        } else { return indexes }
    }
};
console.log([...indexOfSubstrings('tiktok tok tok tik tok tik', 'tik')])
console.log([...indexOfSubstrings('tutut tut tut', 'tut')])
console.log([...indexOfSubstrings('hello', 'hi')])