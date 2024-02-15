const fs = require("fs");

const filePromise = (url) =>
  new Promise((resolve, reject) => {
    fs.readFile(url, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(new Error("File read failed:"))
        return;
      }
     
      resolve(data);
    });
  });

  filePromise('./dragons.json').then( data => {
    const { dragons } =  JSON.parse(data);

    let oldDragon = { age : 0, name : null } ;
    for(const dragon of dragons){
        const { age, name  } = dragon;
        if(age > oldDragon.age){
            oldDragon.age = age;
            oldDragon.name = name;
        }
    }
    console.log(oldDragon);

    dragons.sort( (d1, d2) => d1.age - d2.age ) ;

    // la syntaxe pour re-nommer les constantes pour éviter les conflits on ne peut pas re-definir une constante
    console.log(dragons.slice(-1)); // renvoie un nouveau tableau [{ ... }] 
    const { age: ageY, name : nameY } = dragons.slice(-1).shift(); // dépile le premier élément 
    const { age: ageO, name : nameO } = dragons.slice(0,1).shift(); // dépile le dernier élément

    console.log(`Le plus jeune : ${ageY} age ${nameY}`)
    console.log(`Le plus vieux : ${ageO} age ${nameO}`);

    dragons.sort( (d1, d2) => d2.age - d1.age ) ;

    console.log(dragons)

  });

  // Fibonacci
  const fibo = (n) => {
    let [n1, n2] = [0, 1];
    let sum = 0;
  
    for (let i = 2; i <= n; i++) {
      sum = n1 + n2;
      [n1, n2] = [n2, sum];
    }
  
    return sum;
  };
  

  // générez une matrice
  function genererMatrice(taille) {
    const matrice = [];
    
    for (let i = 0; i < taille; i++) {
        const ligne = [];
        for (let j = 0; j < taille; j++) {
            // Vous pouvez remplacer Math.random() par la valeur que vous souhaitez
            ligne.push(Math.random());
        }
        matrice.push(ligne);
    }
    
    return matrice;
}



function enregistrerMatriceDansFichier(matrice, nomFichier) {
    const contenu = JSON.stringify(matrice);

    fs.writeFile(nomFichier, contenu, (err) => {
        if (err) {
            console.error('Erreur lors de l\'enregistrement du fichier :', err);
            return;
        }
        console.log(`La matrice a été enregistrée dans le fichier ${nomFichier}`);
    });
}

const tailleMatrice = 3; // Remplacez par la taille souhaitée
const maMatrice = genererMatrice(tailleMatrice);

enregistrerMatriceDansFichier(maMatrice, 'ma_matrice.json');


function lireMatriceDeFichier(nomFichier, callback) {
    fs.readFile(nomFichier, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier :', err);
            callback(err, null);
            return;
        }

        try {
            const matrice = JSON.parse(data);
            callback(null, matrice);
        } catch (parseError) {
            console.error('Erreur lors de la conversion du JSON en objet :', parseError);
            callback(parseError, null);
        }
    });
}

// Exemple d'utilisation
const nomFichier = 'ma_matrice.json';

lireMatriceDeFichier(nomFichier, (err, matriceLue) => {
    if (!err) {
        console.log('Matrice lue du fichier :', matriceLue);
    }
});