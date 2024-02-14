const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];

// rappel sur sort méthode sur un tableau pour ordonnées des valeurs
// sort ordonne les éléments par référence
// sort ordonne les chaînes de caractères 
const months = ['March', 'Jan', 'Dada', 'Feb', 'Dec'];
months.sort();
console.log(months);
//  ["Dada", "Dec", "Feb", "Jan", "March"]

const numbers = [1, 30, 4, 11, 21, 100000];
numbers.sort();
console.log(numbers);
// [ 1, 100000, 11, 21, 30, 4 ]

// si on veut ordonner en fonction des valeurs numériques on a passe à sort une fonction 
numbers.sort((a, b) => a - b); // ordonnées de manière croissante
console.log(numbers);

numbers.sort((a, b) => b - a); // ordonnées de manière décroissante
console.log(numbers);

// 1 si on veut ordonnée populations on passe à sort une fonction de comparaison numérique

populations.sort((p, q) => p.name.length - q.name.length)
console.log(populations)

// 2 ajoutez une clé lenName

for (const pop of populations) pop.lenName = pop.name.length;

console.log(populations)

// 3 Regrouper par longueur de nom

// en algo 
const groupNames = [];
// récupère que les noms avec map, on retire les doublons dans le new Set, puis on transforme le Set en tableau
const lenNames = [...new Set(populations.map(pop => pop.lenName))];

console.log(lenNames)

for (const l of lenNames) {
    // le filter permet de sélectionner dans le tableau certaines valeurs 
    groupNames.push(populations.filter(p => p.lenName == l))
}

console.log(groupNames)

// avec reduce dans un littéral avec une clé
const groupNames_02 = populations.reduce((acc, curr) => {
    acc[curr.lenName] ? acc[curr.lenName].push(curr) : acc[curr.lenName] = [curr]

    return acc
}, {})

console.log(groupNames_02)

// partie facultative
const relations = [
    { id: 0, relation: [1, 2, 4] },
    { id: 3, relation: [7, 8] },
    { id: 4, relation: [2, 7, 8, 11] },
    { id: 5, relation: [1, 2, 4] },
    { id: 7, relation: [2, 3, 5, 9] },
    { id: 9, relation: [1, 2, 4, 8, 11] },
    { id: 11, relation: [1, 2, 9, 10,] },
];

for(const pop of populations) pop.relation = null;

// parcourir le tableau de littéraux et assigner les clés par décomposition dans la boucle
for(const {id, relation} of relations){
    const person = populations.find( p => p.id == id )
    if(person)
        person.relation =  populations.filter( p => relation.includes(p.id) )
}

console.log(populations[1].relation)

// ordonnez par ordre croissant de relation

const popRelations =  populations.filter(p => p.relation ) 
const popWithouRelation =  populations.filter(p => p.relation === null ) 

popRelations.sort((p, q) => p.relation.length - q.relation.length)

console.log(popRelations)
console.log(popWithouRelation)

const populationsR = popRelations.concat(popWithouRelation)

console.log(populationsR)