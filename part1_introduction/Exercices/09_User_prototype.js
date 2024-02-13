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

User.prototype.precision = 100;

// hydratation de l'objet User

const Users = []

for (const user of mockUsers) {
    Users.push(new User({ ...user }))
}

// console.log(Users)

User.prototype.average = function () {
    if (this.notes?.length > 0)
       return Math.round((this.notes.reduce((acc, curr) => {
            return acc + curr
        })) * this.precision / this.notes.length) / this.precision

    return "aucune notation"
}

console.log(u1.fullName());

for (const user of Users) {
    console.log(user.name, user.average())
}


// héritage 
function Admin({ name, lastname, age, isAdmin }) {
    // Appeler le constructeur de la classe parente (User)
    User.call(this, { name, lastname, age });

    this.isAdmin = isAdmin;
}

Admin.prototype = Object.create(User.prototype);

const admin = new Admin(
    { name: 'Alan', lastname: 'Phi', age: 45, isAdmin: true }
)

// Ajouter une méthode spécifique à la classe Admin
Admin.prototype.getAdminDetails = function () {
    return `${this.fullName()}, Âge: ${this.age}, Admin: ${this.isAdmin}`;
};


console.log(admin.getAdminDetails());
