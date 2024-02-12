
const PRECISION = 100;

function ttc(price, tva = .2) {
    price = parseFloat(price)
    tva = parseFloat(tva)
    // error firts 
    if (isNaN(price) || isNaN(tva)) return "Error type";

    return Math.round(price * (1 + tva) * PRECISION) / PRECISION;
}


console.log(ttc("bonjour"))
console.log(ttc("10.2", .3))

// Une autre correction avec la précision

// 1. Essayez à partir de la fonction ci-dessous de définir la précision et utilisez la fonction ttc pour obtenir le résultat
function serviceTTC(precision) {

    // retourne un service qui me permet de calculer le prix TTC en définissant la précision dans le service
    return function ttc(price, tva = .2) {
        price = parseFloat(price)
        tva = parseFloat(tva)
        // error firts 
        if (isNaN(price) || isNaN(tva)) return "Error type";

        return Math.round(price * (1 + tva) * precision) / precision;
    }
}

// définition du service avec la valeur de la précision
let service = serviceTTC(100) //il (le service) retourne une fonction permettant de calculer la valeur TTC  
console.log(service(100))