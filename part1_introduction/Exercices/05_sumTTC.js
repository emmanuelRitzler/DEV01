
const precision = 100;

function sumTTC(x, y, z, tva = .2){
    //casting des valeurs => le changement de type
     x = parseFloat(x)
     y = parseFloat(y)
     z = parseFloat(z)
     // errors first 
     if( isNaN(x) || isNaN(y) || isNaN(z)) return "Error" ;

     return Math.round( (x+y+z) *( 1 + tva) * precision) /precision

}

const numbers = ["100.981", 200.812, 300.1718]
// on utilise le spread operator pour décompacter les valeurs du tableau pour les passer à la fonction, ici le nombre de paramètre est égale on nombre valeurs dans le tableau, donc il y matching 
// respecter le nombre de 3 valeurs 
console.log( sumTTC(...numbers, tva = .4) )

numbers.push(12)
numbers.push(18)
let x, y, z ;
[x, y, z, acc ] = [ ...numbers]

console.log([x, y, z, acc ] )

console.log(sumTTC(...numbers))