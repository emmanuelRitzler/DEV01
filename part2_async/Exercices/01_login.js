const login = (email, password , callback) => {
    setTimeout(() => {
        return { email };
    }, 1000);
}

const email = login('alan@alan.fr', 1234567890); // asynchrone => task queue 
console.log(email); // s'exécute tout de suite 