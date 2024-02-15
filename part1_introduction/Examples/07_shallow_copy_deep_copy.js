
// Exemple copy qui marche pour des références de premier niveau ( variables primitives dans le tableau )

// shallow copy
const numbers = [1, 2, 3];

// même référence 
const newNumbers = numbers ;

// assigner une valeur au tableau newNumbers ça change la valeur dans numbers
// newNumbers[0] = 130 ;

// console.log(newNumbers);
// console.log(numbers);

// copy avec le spread fait une shallowcopy
const newNewNumbers = [ ...numbers ];

newNewNumbers[0] = 89;

console.log(numbers);
console.log(newNewNumbers);

const populations = [
    { name: "Alan", notes: [4, 2.5, 3] },
    { name: "Alice", notes: [3, 5, 3] },
];

// const newPopulations = [ ...populations ];
// newPopulations[0].notes[0] = 89;
// console.log(populations);
// console.log(newPopulations);

// 

const newNewPopulations = populations.map( pop => {
   
    return ( { ...pop, notes : [ ...pop.notes ] } )
});

newNewPopulations[0].notes[0] = 89;
console.log(populations);
console.log(newNewPopulations);