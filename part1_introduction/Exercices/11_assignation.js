let a = 1, b = 2, c = 4;
[a, b, c ] = [b, c, a] // permutation

console.log( [a, b, c ] )

let numbers1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let numbers2 = [11, 12, 13, 1, 2, 3];

let numMerge = [...numbers1, ...numbers2];

console.log(numMerge)

const st11 = { s1: "Alan", s2: "Alice" };
const st22 = { s2: "Bernard", s4: "Sophie" };

// attention à la mise à jour des clés dans un littéral
const stMerge = { ...st11, ...st22 };

console.log(stMerge)

// merger les deux tableaux en retirant les doublons 