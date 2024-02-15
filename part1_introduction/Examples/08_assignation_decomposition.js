let a, b;
[a, b] = [10, 20];

console.log(a, b);

// permutation de valeurs 
[a, b] = [b, a]

console.log(a, b);


const user = { name: "Alan", address: "Paris", notes: [1, 2] }
const customer = { name: "Alan", address: "Paris", notes: [1, 2] }
// assignation par décomposition récupère les mêmes noms que le littérales 
const { address, notes } = user;

console.log(address);
console.log(notes);

function addUser({ name, address }) {
    console.log(name, address)
}

addUser(user);
addUser(customer);

// un peu plus complexe 

const st = {
    name: "Antoine",
    family: {
        mother: "Yvette",
        father: "Michel",
        sister: "Sylvie",
    },
    age: 49,
};

const {
    name,
    family: { sister }, 
} = st;

console.log(sister);
