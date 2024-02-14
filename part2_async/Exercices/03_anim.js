const anim = (letters, max = 10) => (new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * max);
    const letter = letters
        .split("")
        .sort((_) => Math.random() - 0.5)
        .slice(0, 1);
    resolve({ number, letter });
})
)

function characters(start = 97, end = 123) {
    let letters = '';
    for (let code = start; code < end; code++) {
        letters += String.fromCharCode(code);
    }

    return letters
}

const letters = characters()
console.log(letters)
Promise.all([ anim(letters), anim(letters),anim(letters) ]).then(console.log)