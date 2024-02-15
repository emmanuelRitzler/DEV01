import fs from 'fs';

export function readData(url) {
    // fonction de callback exécutée plus tard, la solution c'est de retourner une promesse pour gérer l'asynchrone dans notre application
    return new Promise((resolve, reject) => {
        fs.readFile(url, { encoding: "utf8" }, (err, data) => {
            if (err) {
                reject(new Error("File read failed"))

                return
            }
            // on transforme la chaine de caractères en objet JSON
            data = JSON.parse(data);

            resolve( data )
        })
    })
}

export async function writeData(data, fileName) {
    // On transforme l'objet JSON en chaîne de caractères
    const dataJson = JSON.stringify(data, null, 2);

    // Écrire le fichier JSON
    const write = await new Promise((resolve, reject) => {

        fs.writeFile(fileName, dataJson, (err) => {
            if (err) reject(err)
            else resolve(data); // on retourne la matrix sous forme d'un obejet JSON
        });

    })
}