const message = "  aaasldkqldqaaaa  dkkdjfkdfjaaaa  ";


// PREMIER CORRECTION POUR TOUT LE MONDE
// un objet littéral qui va nous permettre de compter les occurences de chaque caractères
const stat = {}

for (const ch of message.trim()) {
    // si abscence de caractère, on passe à l'itération suivante
    if (ch == ' ') continue ;
    // si ch n'est pas encore initialisé on l'initilise à 1, on vient de le compter de le compter pour la première fois
    if (stat[ch] == undefined) stat[ch] = 1 ;
    // on déjà compté ce caractère et on fait +1
    else stat[ch] += 1 ;
    // les deux lignes ci-dessus peuvent s'écrire comme suit avec l'évaluation courtcircuit 
    /*
    // stat[ch] = (stat[ch]  || 0) + 1
    */
}

console.log(stat);

// DEUXIEME CORRECTION PLUS AVANCE 
// reduce est une méthode qui s'applique sur un tableau avec un accumulateur 
// testez cet exemple pour voir comment fonctionne l'accumulateur 
const sumExample = [1, 2, 3, 4, 5].reduce( (acc, curr ) => {
    console.log(`acc : ${acc} curr : ${curr}, calcul ${acc + curr}`)
    return acc + curr
} , 0 ) 

console.log(sumExample)

// avec reduce on initialise le reduce avec un littéral comme dans la boucle stat
const m =  [ ...message].reduce((acc, curr ) => {
    acc[curr] = (acc[curr] || 0) + 1

    return acc ;
}, {})

console.log( 'stat :' , m)