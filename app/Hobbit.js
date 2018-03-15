import Entity from "./Entity";

class Hobbit extends Entity {
    constructor(name, height) {
        super(name, height);
    }

    greet() {
        console.log(`Hello! I'm ${this.name} from the Shire!`);
    }
}

export default Hobbit;