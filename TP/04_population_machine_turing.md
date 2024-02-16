# 04 TP Population & Machine de turing

:rocket: Faites ce TP par équipe, répondez en justifant en quelques mots votre réponse.

La première partie est obligatoire, la deuxième est facultative.

## Partie 1 : Traitement des données populations

:card_file_box:

```js
const populations = [
  { id: 0, name: "Alan", age: 25, country: "USA" },
  { id: 1, name: "Albert", age: 32, country: "Canada" },
  { id: 2, name: "Jhon", age: 40, country: "UK" },
  { id: 3, name: "Brice", age: 28, country: "France" },
  { id: 4, name: "Alexendra", age: 35, country: "Germany" },
  { id: 5, name: "Brad", age: 22, country: "USA" },
  { id: 6, name: "Carl", age: 48, country: "Canada" },
  { id: 7, name: "Dallas", age: 30, country: "USA" },
  { id: 8, name: "Dennis", age: 37, country: "Germany" },
  { id: 9, name: "Edgar", age: 41, country: "France" },
  { id: 10, name: "Erika", age: 29, country: "UK" },
  { id: 11, name: "Isaac", age: 33, country: "Canada" },
  { id: 12, name: "Ian", age: 26, country: "USA" },
];
```

### :rocket: Questions sur le dataset

1. **Filtrage par Age:**
   - Utilisez la méthode `.filter()` pour créer une nouvelle variable ( array ) ne contenant que les personnes dont l'âge est supérieur à 30 ans.
   - Affichez les données résultantes.

2. **Tri par Nom:**
   - Utilisez la méthode `.sort()` pour trier les données (array) par ordre alphabétique des noms.
   - Affichez les données résultantes.

3. **Recherche par Nom:**
   - Créez une fonction qui prend en paramètre un nom et renvoie les données correspondantes dans `populations`.
   - Testez la fonction avec différents noms.

4. **Calcul de la Moyenne d'Âge:**
   - Calculez et affichez la moyenne d'âge de toutes les personnes dans pouplations.

5. **Groupe par Pays:**
   - Utilisez la méthode `.reduce()` pour regrouper les personnes par pays.
   - Affichez le résultat sous forme d'un objet où les clés sont les pays et les valeurs sont des personnes.

## Partie 2 : Machine de Turing Facultatif 


:bulb: **Objectif** : Mettre en pratique les concepts de la machine de Turing en JavaScript pour réaliser l'addition binaire, notez que le code d'exemple ci-après vous aidera à comprendre la machine de Turing.

### Introduction

:rocket: Dans cet exercice, nous allons créer une machine de Turing simple en JavaScript pour ajouter 1 à un nombre binaire. Nous avons déjà une bande (tape) prête avec un nombre binaire initial.

### Instructions

1. **Analyse de l'exemple**

   - Analysez le code fourni et comprenez comment la machine de Turing ajoute 1 au nombre binaire sur la bande.

2. **Implémentation de la fonction addOne**

   - À l'aide du code existant, complétez la fonction `addOne()` de manière à ce qu'elle ajoute correctement 1 au nombre binaire sur la bande.

3. **Exécution de la machine de Turing**

   - Appelez la fonction `addOne()` pour exécuter la machine de Turing et ajouter 1 au nombre binaire initial.

4. **Affichage du résultat**

   - Modifiez le code pour afficher le résultat après l'ajout de 1 sur la bande.

5. **Tests supplémentaires**

   - Modifiez la bande initiale et testez la machine de Turing avec différents nombres binaires pour vous assurer qu'elle fonctionne correctement.

### Code de départ

:package:

```js
// Définition de la bande (tape) de la machine de Turing
const tape = ["1", "0", "1", "0"]; // Nombre binaire initial : 1010

// Fonction pour ajouter 1 à un nombre binaire
function addOne() {
  // Trouver le premier '0' en partant de la droite
  let indexOfZero = tape.lastIndexOf("0");

  // Si aucun '0' n'est trouvé, ajouter un '0' à la fin
  if (indexOfZero === -1) {
    tape.push("0");
    indexOfZero = tape.length - 1;
  }

  // Mettre '1' à la place du premier '0' trouvé
  tape[indexOfZero] = "1";
}

// Exécution de la machine de Turing pour ajouter 1
addOne();

// Affichage du résultat
console.log("Résultat après ajout de 1 :", tape.join(""));
```

### Conseils

- Utilisez des commentaires pour expliquer chaque étape de la machine de Turing.
- N'hésitez pas à expérimenter avec différents nombres binaires sur la bande.
- Assurez-vous de comprendre le fonctionnement de la fonction `addOne()` avant de passer aux étapes suivantes.

### Résultats attendus

:pill: Le programme devrait afficher correctement le résultat après l'ajout de 1 à chaque exécution de la machine de Turing.
