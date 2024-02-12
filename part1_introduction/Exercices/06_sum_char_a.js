
const message = "  aaasldkqldqaaaa  dkkdjfkdfjaaaa  ";

function count(message, char) {

    // trim retire les espaces avant et après le texte 
    if (message.trim() === '') return "Error la chaîne de caractère est vide";
    let c = 0; 
    for (let i = 0; i < message.length; i++) {
        if( message[i] == char ) c++
    }

    return c ;
}

// Compter le nombre de chaque caractèrs 



// pour compter tous les caractères
const ensemble = new Set(message);