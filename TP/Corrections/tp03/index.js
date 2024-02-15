import { theOldestDragon, theYougesttDragon, orderDragons } from './services/dragonService.js';
import { readData, writeData } from './services/fileService.js';
import { fiboPromise } from './services/fibonacciService.js';
import { genererMatrix } from './services/matrixService.js';
import { formate } from './helpers.js'

// Partie 1
// 1. affichez le plus vieux des dragons
readData('./data/dragons.json').then(data => {
    const { dragons } = data

    const oldDragon = theOldestDragon(dragons);
    console.log(oldDragon);
    const yougDragon = theYougesttDragon(dragons);
    console.log(yougDragon);

    // ordre par ordre croissant

    orderDragons(dragons); // ordre par référence

    console.log(dragons);
})

// Partie 2 Fibonacci 
// fiboPromise(10).then(console.log)

// Partie 3 Matrix 
// writeData(genererMatrix(5,5), './data/matrix.json').then(console.log)

readData('./data/matrix.json')
    .then(data => {
        for (const line of data) {
            console.log(line)
            for (let i = 0; i < line.length; i++)
                line[i] = formate(line[i] * 1.15)
        }

        return data;
    })
    // Visualiser les données avant de les enregistrer 
    .then(data => {
        console.log(data)

        return data
    })
    .then(data => {
        // writeData(data, './data/matrix15.json');
    })

