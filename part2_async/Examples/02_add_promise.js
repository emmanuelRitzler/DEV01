

function add(number) {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(number)) reject(new Error("Error type number"))
            resolve(number);
        }, 300);
    })
    )
}

// gestion d'appels des promesse en les chainants
add(1)
    .then(num => add(num + 2)) // renvoyez dans une promesse
    .then(num => add(num + 7.8))
    .then(console.log)
    .catch(console.error)