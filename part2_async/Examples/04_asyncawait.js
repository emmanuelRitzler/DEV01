

function add(number) {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(number)) reject(new Error("Error type number"))
            resolve(number);
        }, 300);
    })
    )
}

// async/await marche avec les promesses
async function process(){
    try{
        let sum = 0;
        const res1 = await add(1); // attendre la résolution de la promesse
        sum+=res1;
        const res2 = await add(3);
        sum+=res2;
        const res3 = await add(5);
        sum+=res3;
        // console.log(Math.random() , sum)

        return sum // si on veut récupérer la valeur de la fonction async/await il faut résoudre la promesse
    }catch( err ){
        console.error(err);
    }
}

// pending promise
console.log( process() )

process().then(console.log)