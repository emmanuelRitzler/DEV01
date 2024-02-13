'use strict';
// on utilise use strict pour être dans un mode plus stricte de vérification des erreurs / exception dans langage

/**
 * Par exemple si on exécute une fonction, sans use strict, un constructeur dans le context du DOM, aura pour effet de récupérer l'objet contexte qui est l'objet Window
 */

const o1 = {
    f1 : function(){
      console.log('f1', this === o1, this)
      return this;
    }
}

// je teste le type si l'objet retourné c'est l'objet o1
console.log(o1.f1() == o1) ; // this de o1

const o2 = {
    f2 : o1.f1 // on change le contexte 
}

console.log(o2.f2() == o1 ) ; 
console.log(o2.f2() == o2 ) ; 

// contexte 

// la fonction n'est pas dans un contexte
const o3 = o1.f1;

// console.log(o3()) ; // undefined car on n'appelle la fonction f1 explicitement


setTimeout(o1.f1, 1000); // ici setTimeout appel la fonction f1. On ne le récupère pas 
setTimeout(() => o1.f1(), 1000); // On récupère bien ici l'objet de type o1