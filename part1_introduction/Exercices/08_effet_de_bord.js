// 'use strict'
const log = {
    count : 100,
    save: function () {
        console.log(this.count);
        console.log(this);
    }
}

// récupère ici le contexte de la fonction setTimeout comme lorsqu'on appellait o1.f() dans o2 on récupère le contexte de l'objet dans lequel on a appelé la fonction
setTimeout(log.save, 500);

// ici on appelera la fonction dans le contexte de l'objet log à l'aide d'une fonction fléchée
setTimeout(() => log.save(), 500);
