# QCM 

:rocket: Faites le QCM par équipe, répondez en justifant en quelques mots votre réponse.

**Question 1 :** Qui est l'auteur de JavaScript et quelle est sa première version?

- [ ] A. John Resig, version 2000
- [X] B. Brendan Eich, version 1995
- [ ] C. Douglas Crockford, version 2010
- [ ] D. Guido van Rossum, version 1992

---

**Question 2 :** Qu'est-ce que le typage faible en JavaScript permet?

- [X] A. Les conversions de type implicite // typage imposé -> let stuff = 1 + '2'
- [ ] B. La stricte vérification des types
- [X] C. Les conversions de type explicite // typage choisi -> 
```javascript
let string = '123' --> type string
let num = Number(string) --> type num
```
- [ ] D. L'impossibilité de changer le type des variables

---

**Question 3 :** Quelle est la norme ECMAScript suivie par JavaScript?

- [ ] A. ECMAScript 2010
- [X] B. ECMAScript 2015 (ES6) // fonctions fléchées
- [ ] C. ECMAScript 2018
- [ ] D. ECMAScript 2020

---

**Question 4 :** Quel est le type d'une variable non initialisée en JavaScript?

- [ ] A. null
- [X] B. undefined
- [ ] C. number
- [ ] D. string

---

**Question 5 :** Quels sont les types primitifs en JavaScript?

- [X] B. null
- [X] A. boolean
- [X] C. undefined
- [X] D. number
- [ ] E. Object

---

**Question 6 :** Qu'est-ce que l'opérateur `===` fait en JavaScript?

- [ ] A. Comparaison sans tenir compte du type
- [ ] B. Comparaison en convertissant les types
- [ ] C. Comparaison strictement en tenant compte du type
- [X] D. Aucune des réponses ci-dessus // compare strictement la valeur et le type

---

**Question 7 :** Quelle est la portée d'une variable définie avec `let`?

- [X] A. Portée globale
- [X] B. Portée au niveau du bloc
- [X] C. Portée de fonction
- [X] D. Portée de script // inclue dans un module, nécessite import du module pour utilisation -- utilisable seulement en module

```javascript
let x = 1 // portée globale

// portée de fonction / de bloc
function displayX() {
  let x = 1;
  console.log(x)
}
```
---

**Question 8 :** Quel est le résultat de l'exécution du code suivant?

```javascript
let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
```

- [X] A. 20, 10
- [ ] B. 10, 20
- [ ] C. 20, 20
- [ ] D. 10, 10

---

**Question 9 :** Quelle est la syntaxe correcte pour déclarer une fonction fléchée en JavaScript?

- [ ] A. `function add() => {}`
- [ ] B. `const add = function() {}`
- [X] C. `const add = () => {}` // Norme ES6
- [ ] D. `function add() {}`

---

**Question 10 :** Comment éviter l'effet de bord sur la propriété `this` dans le code suivant?

```js
const log = {
  count: 100,
  save: function () {
    'use strict';
    console.log(this.count);
  }
};
setTimeout(log.save, 500);
```

- [ ] A. Utiliser une fonction fléchée dans `save`
- [ ] B. Utiliser `bind` pour lier `this`
- [ ] C. Aucune solution. // valeur de count n'est pas modifiée
- [X] D. Utilisez la syntaxe suivante `setTimeout(() => log.save(), 500);`// peut retourner undefined selon le contexte d'application

---

**Question 11 :** Comment déclare-t-on une variable constante en JavaScript?

- [ ] A. `var`
- [ ] B. `let`
- [X] C. `const`
- [ ] D. `constant`

---

**Question 12 :** Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau?

- [ ] A. `deleteLast()`
- [ ] B. `removeLast()`
- [X] C. `pop()`
- [ ] D. `spliceLast()`

---

**Question 13 :** Quel est le résultat de l'expression `5 + '5'` en JavaScript?

- [ ] A. `10`
- [ ] B. `55`
- [X] C. `55` (en tant que chaîne) // let g = 5 + "5"
- [ ] D. `undefined`

---

**Question 14 :** Comment accédez-vous au dernier élément d'un tableau nommé `numbers` en JavaScript?

- [ ] A. `numbers.last()`
- [X] B. `numbers[numbers.length - 1]` // length retourne taille totale, mais avec indexation à 0 il faut enlever 1
- [ ] C. `numbers.pop()`
- [ ] D. `numbers.end()`

---

**Question 15 :** Quelle méthode JavaScript est utilisée pour ajouter un élément au début d'un tableau?

- [X] A. `unshift()`
- [ ] B. `push()`
- [ ] C. `append()`
- [ ] D. `addToFront()`

---

**Question 16 :** Quelle est la différence entre `let` et `const` en termes de réassignation?

- [X] A. `let` permet la réassignation, `const` ne le permet pas
- [ ] B. `let` ne permet pas la réassignation, `const` le permet
- [ ] C. Les deux permettent la réassignation
- [ ] D. Les deux ne permettent pas la réassignation

---

**Question 17 :** Comment définir une classe en JavaScript?

- [X] A. `class Duck {}`
- [ ] B. `function Duck {}`
- [ ] C. `class = Duck {}`
- [ ] D. `Duck = class() {}`

---

**Question 18 :** Quelle est la méthode JavaScript utilisée pour parcourir tous les éléments d'un objet?

- [ ] A. `iterate()`
- [X] B. `for...in` // permet de parcourir un objet et itère également sur chacune des clés de l'objet
- [ ] C. `forEach()`
- [ ] D. `loop()`

---

**Question 19 :** Quelle est la différence entre `null` et `undefined` en JavaScript?

- [ ] A. Aucune différence, les deux représentent l'absence de valeur
- [X] B. `null` est assigné par le programmeur, `undefined` est assigné par le système
- [ ] C. `undefined` est assigné par le programmeur, `null` est assigné par le système
- [ ] D. `null` est une valeur spéciale représentant l'absence de valeur, `undefined` signifie qu'une variable n'a pas été assignée

---

**Question 20 :** Comment effectuer une requête HTTP asynchrone en JavaScript?

- [ ] A. `http.getSync()`
- [X] B. `fetch()` // utiliser pour catch une API
- [ ] C. `ajax()`
- [ ] D. `xhr()`
