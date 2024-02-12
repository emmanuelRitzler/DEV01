let i = 100;

//la boucle for définit un scope pour la boucle elle-même
for (let i = 0; i < 10; i++){ 
    i == 9 ? console.log(i) : null; 
}

// i est défini dans le script courant, c'est un autre symbole
console.log(i);

for (let j = 0; j < 10; j++) {}
// attention cette variable ou symbole n'est pas défini
console.log(j);