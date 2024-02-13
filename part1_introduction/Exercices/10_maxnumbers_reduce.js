const numbers = [1, 2, 3, 4, 5, 6, 70, 80, 9, 10];

const maxNumber = numbers.reduce((acc, curr) => {
    if( curr > acc) return curr 

    return acc
}, 0)

console.log(maxNumber)

console.log( numbers.reduce((acc, curr) => ( curr > acc ? curr : acc), 0) );

const sumOdd = numbers.reduce((acc, curr) => ( curr % 2 ? acc + curr : acc ), 0)
console.log(sumOdd)