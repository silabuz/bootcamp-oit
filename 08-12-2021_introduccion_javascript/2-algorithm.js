// String mas largo en un array
let myArray = ['Hello world', "hello", "Hello silabuz, it's amazing to be here"]

const longestString2 = (arr) => {
    let longest = ''; // Step 0
    arr.forEach((item) => { // Step 1
        if (item.length > longest.length) {
            longest = item;
        }
    });
    return longest; // Step 5
};

let result = longestString2(myArray)
console.log(result)