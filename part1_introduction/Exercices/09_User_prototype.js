'use strict';

const mockUsers = [
    {
        name: "Alan", lastname: "Phi", age: 45, notes: [
            15, 17, 13
        ]
    },
    {
        name: "Bernad", lastname: "Lu", age: 78, notes: [
            11, 12, 9
        ]
    },
    {
        name: "Sophie", lastname: "Boo", age: 56, notes: [
            10, 15, 11
        ]
    },
    {
        name: "Alice", lastname: "Car", age: 45, notes: [
            5, 18, 20
        ]
    },
    {
        name: "Aline", lastname: "So", age: 55
    },
]

function User({ name, lastname, age, notes }) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.notes = notes;
}

const u1 = new User({ name: 'Alan', lastname: 'Phi', age: 45 });

// On ajoute sur le constructeur lui-même la propriété
User.prototype.fullName = function () {

    return `Name : ${this.name} Lastname: ${this.lastname} Age: ${this.age}`
}

// par prototypage j'ajoute une précision
User.prototype.precision = 10;

// création à la volée d'objet de type User
const Users = [];
for (const user of mockUsers) {
    Users.push(new User(user))
}
// console.log(Users)

User.prototype.average = function () {
    // this.notes?.length si notes n'est pas défini alors avec ? cela retournera undefined
    if (this.notes?.length)
        return Math.round(
            (this.notes.reduce((acc, curr) => acc + curr, 0)) * this.precision
            / this.notes.length) / this.precision
}

for (const user of Users) {
    console.log(user.average())
}


// héritage avec les fonctions constructeurs

function Admin({ name, lastname, age, notes, isAdmin }){
    User.call(this, { name, lastname, age, notes, isAdmin })
    this.isAdmin = isAdmin
}

// on set les prototypes de User à la fonction constructeur Admin
Admin.prototype = Object.create(User.prototype)

const admins = []

for (const user of mockUsers) {
    // ici ils sont tous admin
    const admin = new Admin({ ...user, isAdmin : true })
    admin.average = admin.average()
    admins.push( admin ) 

}

console.log(admins)