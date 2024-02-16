# QCM sur l'Asynchrone en JavaScript :

:rocket: Faites le QCM par équipe, répondez en justifant en quelques mots votre réponse.

1. **Qu'est-ce que l'asynchronisme en programmation JavaScript ?**
   - [ ] A. Un concept qui bloque l'exécution du code.
   - [X] B. Un concept qui permet d'exécuter des tâches en arrière-plan sans bloquer le code. // exclue la tâche de la stack principale pour l'inclure dans une 'liste d'attente'
   - [ ] C. Une fonction qui retourne une valeur immédiatement.

1. **Pourquoi l'asynchronisme est-il nécessaire dans le développement web moderne ?**
   - [ ] A. Pour rendre le code plus complexe.
   - [X] B. Pour gérer efficacement des opérations telles que les requêtes réseau ou l'accès à la base de données. // Permet d'afficher les données sur un site même si les datas ne sont pas encore disponibles (ex: appli météo avec API)
   - [ ] C. Pour rendre le code plus lisible.

3. **Quel est le rôle des callbacks dans l'asynchrone JavaScript ?**
   - [ ] A. Ils bloquent l'exécution du code.
   - [X] B. Ce sont des fonctions passées en tant que paramètres à d'autres fonctions, exécutées après une opération asynchrone. // function isCallback(callback) {
      console.log('It is a callback!);
      callback();
   }
   - [ ] C. Ils sont utilisés pour définir des variables.

4. **Comment JavaScript gère-t-il les opérations asynchrones avec l'Event Loop ?**
   - [ ] A. En créant un nouveau thread pour chaque opération asynchrone.
   - [X] B. En plaçant les fonctions asynchrones dans une file d'exécution (Task Queue) et les exécutant via l'Event Loop. // met la function dans une file d'attente et la sort de l'execution principale
   - [ ] C. En les exécutant immédiatement après la fonction synchrone.

5. **Quelle est la principale caractéristique de la Task Queue en JavaScript ?**
   - [ ] A. Elle gère les fonctions asynchrones en mode LIFO.
   - [X] B. Elle gère les fonctions asynchrones en mode FIFO. // les premières fonctions async déclarées sont traitées en premier (par défaut, mais peut-être priorisé selon les navigateurs)
   - [ ] C. Elle n'a pas de rôle dans l'asynchronisme.

6. **Quel est le rôle de la méthode `setTimeout` dans le code asynchrone ?**
   - [ ] A. Elle accélère l'exécution du code.
   - [X] B. Elle retarde l'exécution d'une fonction donnée après un certain délai. // définition d'un délai en fin de fonction (en ms)
   - [ ] C. Elle arrête immédiatement l'exécution du code.

7. **Quelle est la principale limitation de l'asynchronisme en JavaScript ?**
   - [ ] A. Il est facile à mettre en œuvre.
   - [ ] B. Il est difficile à mettre en œuvre.
   - [X] C. Il n'a pas de limitation. // Async n'est pas reconnu comme étant facile ou difficile à mettre en place. En revanche, si on se situe de manière plus niché, le 'Callback Hell' peut-être perçue comme étant difficile de compréhension.

8. **Qu'est-ce qu'une Promesse en JavaScript ?**
   - [X] A. Un objet représentant la réussite ou l'échec d'une opération asynchrone. // présence de deux paramètres resolve et reject, qui renvoie respectivement la réussite ou l'échec d'execution du code
   - [ ] B. Une fonction qui retourne une valeur immédiatement.
   - [ ] C. Une fonction synchrone.

9. **Quelle méthode est appelée après le succès d'une Promesse en JavaScript ?**
   - [X] A. `resolve` // éxecute la fonction en cas de succès
   - [ ] B. `reject`
   - [ ] C. `then`

10. **Quel mot-clé permet d'attendre la résolution d'une promesse dans une fonction asynchrone ?**
    - [X] A. `await` // permet d'attendre le retour de réponse pour déclencher la fonction à laquelle il est associé
    - [ ] B. `delay`
    - [ ] C. `stop`

11. **Qu'est-ce que le Callback Hell en JavaScript ?**
    - [ ] A. Un terme pour décrire une structure pyramidale de fonctions synchrones.
    - [X] B. Une situation où de nombreuses fonctions de rappel imbriquées rendent le code difficile à lire et à maintenir.
    ```javascript
    function func1(callback) {
      console.log('func1');
      callback();
    }
     function func2(callback) {
      console.log('func2');
      callback();
    }
     function func3(callback) {
      console.log('func3');
      callback();
    }

    func1(() => {
      func2(() => {
         func3()
      })
    })
    ```
    
    - [ ] C. Une fonctionnalité de JavaScript.

12. **Comment éviter le Callback Hell en JavaScript ?**
    - [ ] A. En utilisant uniquement des fonctions synchrones.
    - [X] B. En utilisant des Promesses ou Async/Await pour simplifier la gestion de l'asynchronisme.

    ```javascript
   function func1() {
      new Promise((resolve, reject) => {
         setTimeout(() => {
            let isGood = true;
            if(isGood) resolve('func1');
            else reject('Oups :/')
         }, 500)
      })
   }

      function func2() {
      new Promise((resolve, reject) => {
         setTimeout(() => {
            let isGood = true;
            if(isGood) resolve('func2');
            else reject('Oups :/')
         }, 500)
      })
   }
   
      function func3() {
      new Promise((resolve, reject) => {
         setTimeout(() => {
            let isGood = true;
            if(isGood) resolve('func3');
            else reject('Oups :/')
         }, 500)
      })
   }

   func1()
      .then(value => console.log(value))
      .then(func2)
      .then(func3)
      .catch(err);

    async function returnFunc() {
      let displayFunc = await func1;
      console.log(displayFunc);
      let displayFunc2 = await func2;
      console.log(displayFunc2);
      let displayFunc3 = await func3;
      console.log(displayFunc3);
    }
```
    - [ ] C. En ajoutant plus de fonctions de rappel.
```
13. **Quel est l'état initial d'une Promesse en JavaScript ?**
    - [ ] A. Resolved
    - [ ] B. Rejected
    - [X] C. Pending // resolve ou reject sont les états qui suivent l'éxecution du code dans la promesse

14. **Que fait la méthode `catch` dans une Promesse ?**
    - [ ] A. Elle résout la promesse.
    - [ ] B. Elle rejette la promesse.
    - [X] C. Elle est appelée en cas d'échec de la promesse. // permet d'afficher un message d'erreur en cas d'échec de la promesse

15. **Quel avantage offre Async/Await par rapport aux Promesses ?**
    - [X] A. Une syntaxe plus lisible et expressive pour gérer l'asynchronisme.
    - [ ] B. Une exécution plus rapide du code.
    - [ ] C. Une gestion plus complexe des erreurs.

```javascript
   func1()
      .then(value => console.log(value))
      .then(func2)
      .then(func3)
      .catch(err);

   async function returnFunc() {
      let displayFunc = await func1;
      console.log(displayFunc);
      let displayFunc2 = await func2;
      console.log(displayFunc2);
      let displayFunc3 = await func3;
      console.log(displayFunc3);
    }
    ```