

function sumTTC() {

}

function serviceSumTTC(numbers) {
    numbers = numbers.map(parseFloat)

    for (const num of numbers) if (isNaN(num)) throw new Error("Error Type")

    if(numbers.length > 3) throw new Error("Too many parameters")

    function sum(x, y, z){

        return x + y + z ;
    }

}