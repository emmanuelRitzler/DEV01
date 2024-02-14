const p = number => (new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isNaN(parseInt(number))) {
            reject(new Error('not a number ...'));

            return;
        }
        resolve(number);
    }
        , 100);
}));

// on reçoit l'ensemble des valeurs dans la résolution des promesses dans un tableau JS
Promise.all([p(1), p("1.8"), p(3)]).then(numbers => {
    console.log(numbers)
    console.log(numbers.reduce((acc, curr) => acc + curr));
}).catch(err => console.error(err));