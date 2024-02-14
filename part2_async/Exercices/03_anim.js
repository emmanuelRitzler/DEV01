
function anim(letters, max = 10) {
    return (
        new Promise((resolve, reject) => {
            const number = Math.floor(Math.random() * max);
            const letter = letters.split('').sort(_ => Math.random() - 0.5)[0]
            resolve({ letter, number })
        })
    )
}

// delai pour simuler un service qui prendrait du temps 
// les paranthèses dans la fonction fléchée sont utilisées pour forcer le retour d'une ou plusieurs 
const delai = (time = 200) => (
    new Promise((resolve, rejsect) => { setTimeout(() => resolve(1), time) })
)

function characters(start = 97, end = 123) {
    let letters = '';
    for (let code = start; code < end; code++) {

        letters += String.fromCharCode(code)
    }

    return letters;
}

// générer une chaine aléatoire de caractères
async function generate(max = 10) {
    const letters = characters();
    let code = '';
    for (let i = 0; i < max; i++) {
        const { letter, number } = await anim(letters);
        code += letter + number
    }

    // simulation d'un retard 
    await delai(1000);
    // console.log(code)

    return code;
}

generate().then(console.log)