
// création de la fonction asynchrone add

function add(number, callback, error, time = 500) {
    number = parseFloat(number);
    if (isNaN(number)) error()
    setTimeout(() => {
        callback(number)
    }, time)
}

// additionner les nombres

const errorType = () => { throw new Error("Not a number") }

add("1", number => {
    let sum = number;
    add("BONJOUR", number => {
        sum += parseFloat(number)
        add("7.8", number => {
            sum += parseFloat(number)
            console.log(sum)
        }, errorType)
    }, errorType)
}, errorType)

