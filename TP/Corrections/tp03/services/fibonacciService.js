
export function fiboPromise(n, time = 500) {

    return new Promise((resolve, reject) => {
        let u = 1;
        const interval = setInterval(() => {
            if (u < n) {
                console.log(fibonacci(u))
                u += 1;
            }
            else {
                clearInterval(interval); // stopper le setInterval
                resolve(fibonacci(u)); // La dernière valeur de la suite de Fibonnacci on s'arrête
            }
        }, time)
    })
}

export function fibonacci(n) {
    // 1 1 2 3 5 8 13 ...
    let [u1, u2] = [1, 1];
    for (let i = 2; i < n; i++) {
        [u1, u2] = [u2, u1 + u2]
    }

    return u2 ;
}
