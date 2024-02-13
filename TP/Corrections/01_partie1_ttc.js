// Partie 1
const calculShoop = {
    tva: .2,
    pricesHT: [],
    precision: 100,
    pricesTTC: [],
    setTva: function (tva) {
        if (isNaN(parseFloat(tva))) throw new Error("Error type");

        this.tva = tva
    },
    setPrices: function (prices) {
        if (prices.length > 0) {
            // la fonction map retourne un tableau
            this.pricesHT = prices.map(price => {
                // error first 
                if (isNaN(parseFloat(price))) throw new Error("Error type");

                return parseFloat(price)
            })
        }
    },
    setPrecision: function (precision) {
        // first error / exception throw new Error lance une exception et arrete les scritps
        if (precision <= 0) throw new Error("Error type");
        if (isNaN(parseFloat(precision))) throw new Error("Error type");

        this.precision = parseInt(precision)
    },
    ttc: function () {
        this.pricesTTC = this.pricesHT.map(price => Math.round(price * (1 + this.tva) * this.precision / this.precision))
    },
    sum: function () { return this.pricesTTC.reduce((acc, curr) => acc + curr, 0) }
}

// tests
calculShoop.setPrices([100, 200, 300.5, 100.5])
calculShoop.ttc() // calcul du prix TTC
console.log(calculShoop.pricesHT)
console.log(calculShoop.pricesTTC)
console.log(calculShoop.sum())
