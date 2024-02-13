/**
 * Exemple hoisting 
 * les fonctions sont déclarées au début du script 
 */

foo()
// console.log(a) // erreur TDZ
console.log(b)

// fonction bar
// bar(); // erreur TDZ bar est une variable 

function foo() {

    console.log("FOO")
}

let a = 1;

var b = 10; // même statut que les fonctions pour la déclaration

// meme statut que les variables déclarée avec let ou const 
const bar = function () { console.log("BAR") }

// baz(); // pas définit à l'extérieur de son scope 
// expression de fonction
const myFunc = function () {
    baz(); // on peut l'appeler ici pas à l'extérieur de l'expression de fonction
    // fonction nommée
    function baz() {
        console.log("BAZ")
    }
}

myFunc()

// contexte pour les fonctions fléchées 
'use strict'; 

const model = (name) => {
    // this.name = name 
    console.log( 'ici',  this  )
};

model('alan') // non

// les fonctions fléchées ne peuvent pas définir un contexte donc on ne peut pas créer un objet à partir des fonctions fléchées

// new model('alan')
