const login = (email, password , callback) => {
    setTimeout(() => {
        callback({email,password}, call) // fonction exécutée
        return { email, password };
    }, 1000);
}

// création de la fonction à l'extérieur de la partie asynchrone permet de traiter plus facilement le code asynchrone
const callback = (email, call) => {
    setTimeout(() => {
        console.log(email) 
        call()
    }, 500)
}

const call = () => console.log('DB CONNECT')

const email = login('alan@alan.fr', 1234567890, callback); // asynchrone => task queue 
console.log(email); // s'exécute tout de suite 