
// Partie 2

const strStat = {
    message: '',
    // set message et nettoye
    setMessage: function (message) {
        this.message = message.trim()
    },
    // compte le nombre le caractères 
    count: function () {
        if (this.message.trim() !== '') {
            return (
                [...this.message].reduce((acc, curr) => {
                    acc[curr] = (acc[curr] || 0) + 1

                    return acc;
                }, {})
            )
        }
    },
    searchCha: function (ch) {
        return this.message.includes(ch)
    },
    // approche algo
    searchStr: function (word) {
        const lenWord = word.length;
        const lenMessage = this.message.length; // longueur de la chaîne initiale
        // on cherche un mot de longueur 3 si la chaine message fait 10 caractères, lorsqu'on arrive à 10 - 3, alors on ne cherche pas plus loin sinon on sort de la chaîne message.
        for (let i = 0; i <= lenMessage - lenWord; i++) {
            let count = 0;
            for (let j = 0; j < lenWord; j++) {
                // si la longueur du mot est égal au mot trouvé dans message alors on a trouvé un message
                if (this.message[i + j] === word[j]) {
                    count++
                }
            }
            // si on a trouvé on range l'indice ou on a trouvé ce mot
            if (count === lenWord)
                this.posMessage.push(i)
        }
    },
    posMessage: [],
    deleteCha : function(ch){
        const newMessage = [...this.message].filter( c => ch !== c )

        this.message =  newMessage.join('')
    }
}


// test 
const message = "aaasldkqldqaaaa  dkkdjfkdfjaaaa";
strStat.setMessage(message)

console.log(strStat.count())

// présent dans la chaine
console.log(strStat.searchCha("a"))
console.log(strStat.searchCha("x"))

// mot dans la chaine 

strStat.searchStr("aaa")
console.log(strStat.posMessage)

// suppression d'un caractère dans une chaine
strStat.deleteCha(" ")
console.log(strStat.message)


// Un objet dans un objet
const strCount = {

    // obtenir les occurences sous forme d'un tableau de valeurs numériques uniquement en utilisant l'objet strStat
    getOccurences : function(){
        const numbers = []
        const occ = strStat.count()
        for(const k in occ ) numbers.push(occ[k])

        return numbers;
    }
}


console.log( strCount.getOccurences() )