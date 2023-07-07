class Move {
    constructor(changes, name) {
        this.changes = changes;
        this.name = name;
    }

    getName() { return this.name; }

    evaluate(){
        throw new Error ("Using abstract class Move method 'evaluate'!");
    }
}