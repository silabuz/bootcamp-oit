
const getFactorial = (n) => {
    if (n === 0) return 1
    else return getFactorial(n - 1) * n
}

console.log(getFactorial(4))