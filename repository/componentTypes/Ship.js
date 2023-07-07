class Ship {
    constructor (speed, power, shots,  cost, capacity, hasSustainDamage, bombardment, abilities){
        arguments.array.forEach(property => {
            this[property] = property;
        });
    }

    
}