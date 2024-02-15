
'use strict'

// En mode strict vous devez définir absolument vos variables de scripts avec un let ou const

// console.log(x)

let x = 1

console.log(x)

// paramètre de fonction on ne met pas let ou const
[1, 2, 3].map( x => console.log( x+1) )

function add(x) { return x + 1 }
// x => x + 1