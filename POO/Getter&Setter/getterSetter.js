class Felix {

    get name () {
        return this._name;
    }

    set name (name) {
        this._name = name;
    }
}

var person = new Felix();

person.name = "Felix";

console.log(`Hola soy ${person.name}`);