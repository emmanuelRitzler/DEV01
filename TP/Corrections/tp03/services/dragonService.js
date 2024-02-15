// services 
export function theOldestDragon(dragons) {
    let dragon = { age: 0, name: null };

    for (const { age, name } of dragons) {
        if (age > dragon.age) {
            dragon.age = age
            dragon.name = name
        }
    }

    return dragon;
}

export function theYougesttDragon(dragons) {
    let dragon = { age: dragons[0].age, name: dragons[0].name };
    for (const { age, name } of dragons) {
        if (age < dragon.age) {
            dragon.age = age
            dragon.name = name
        }
    }

    return dragon ;
}

/**
 * orderDragons
 * 
 * @param {array dragon} dragons 
 * @param {number} sens 1 ordre croissant -1 ordre décroissant
 */
export function orderDragons(dragons, sens = 1){

    dragons.sort((d, e) => sens  * (d.age - e.age))

    
}