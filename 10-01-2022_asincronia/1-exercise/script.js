function displayName({ first, last, age, gender }) {
    return `${first}, ${last}, ${age}, ${gender}`;
}

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X',
    age: 22,
    gender: 'M',

}

let personName = displayName(person);
console.log(personName)