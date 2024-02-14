# TP 03 Dragon Matrix Fibonnaci

Vous allez utiliser un module node "fs" qui permet de lire un fichier. 

Récupérez le fichier data/dragons.json sur le serveur et testez le code ci-dessous :

```js
import fs from 'fs' ;

fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
    // impossible de lire le fichier
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    // success
    // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
    console.log('File data:', JSON.parse(data)) 
})
```

1. Changez le code ci-dessus et utilisez une **promesse** pour gérer la récupération des données au format JSON Object dans JS.

1. Quel est le nom du dragon le plus agé ? Faite un script pour répondre à cette question.

1. Quel est le nom du dragon le plus jeune ? Faite un script pour répondre à cette question.

1. Récupérez les dragons et ordonnez les par age décroissant.

## Partie 2 : Fibonnaci 

1. Ecrivez un script qui retourne toutes les 500ms les nombres successifs de la suite de Fibonacci.

```js
1 1 2 3 5 8 13 21 34 ...
```

1. Essayez maintenant d'encapsuler votre code dans une Promesse.

## Partie 3 Matric

1. Créez une matrice de valeurs munériques 5X5 de valeurs numériques, enregistrez ces valeurs dans un fichier JSON. 

1. Lire des données par ligne dans un script en console.

1. Créez une fonction qui augmente de 0.15 chaque valeur des lignes et les affiches en console.

:rocket: création d'un fichier

```js
import fs from 'fs'

const data = {
    nom: "John",
    age: 30,
    ville: "Paris"
};

// Convertir les données en format JSON
const dataJson = JSON.stringify(data, null, 2); // Les deux derniers paramètres sont pour l'indentation et la beauté du fichier JSON

// Écrire le fichier JSON
fs.writeFile('donnees.json', dataJson, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Ok');
    }
});
```
