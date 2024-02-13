
/*
*/
function userInfo({name, age, address, telephone}){

    console.log(`Name ${name}, age: ${age} address: ${address}  telephone: ${telephone}`);
}

const info = {
    name : "Alan",
    address : "6 rue Victor Hugo",
    age : 45,
    telephone : "100-67-909"
}

userInfo(info);

console.log(info.name)