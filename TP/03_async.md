# TP 03 Dragon Matrix Fibonnaci

>[!NOTE] 
>préparation du projet et dépendance nodemon

:card_file_box: Les données se trouve dans le dossier TP sur le serveur (tp03/data)

:bulb:

```bash
mkdir tp03 && cd tp03
npm init -y
# après la commande init de npm avec l'option -g nodemon sera installé de manière globale
npm install nodemon -g
```

1. Créez un fichier index.js
1. Ajoutez dans le fichier package.json la ligne suivante, import/export des modules (fichiers)

```json
 "type": "module"
```

1. Ajoutez également la ligne suivante dans le fichier package.json

```json
  "scripts": {
   "dev" : "nodemon --ignore data index.js"
  },
```

> [!NOTE]
> L'option **--ignore** de nodemon permet de ne pas surveiller le dossier data

1. :rocket: Exemples d'import export, vous aurez besoin de fs un module de Node.js dans le projet, dans le fichier index.js

```js
import fs from 'fs' ; 
```

- Vous pouvez également importer des fichiers JS directement dans index.js 

En créant le fichier tools.js avec la fonction suivante que l'on exporte on pourra alors l'importer par exemple dans le fichier index.js (voir ci-après) 

```js
// export de la fonction depuis le fichier
export function showMessage(message) {
    console.log(message.toUpperCase())
}
```

- :test_tube: import d'une fonction se trouvant dans le fichier tools.js

```js
import { showMessage } from './tools.js'

```

:pill: Une fois que vous avez ajoutez cette ligne dans votre `package.json` vous pouvez lancer la commande suivante pour exécuter le scripts JS avec un watcher ( nodemon ).

### Contraintes 
 
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

## Partie 3 Matrix

1. Créez une matrice 5X5 de valeurs numériques, enregistrez ces valeurs dans un fichier JSON. 

1. Lire des données par ligne dans un script en console.

1. Créez une fonction qui augmente de 0.15 % chaque valeur des lignes et les affiches en console.

:rocket: création d'un fichier, exemple.

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
