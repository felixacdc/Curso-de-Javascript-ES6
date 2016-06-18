class Dog {

    constructor (name, color) {
        this.name = name;
        this.color = color;
    }

    sayGuau () {
        return "Guau Guau!!!";
    }

    static sayMiau () {
        return "Miau Miau!!!";
    }

}

class Popi extends Dog {

    constructor (color, age) {
        // Hacer el llamado a la clase padre, deve cer llamado antes de this
        super(name, color);
        this.name = "Popi";
        this.color = color;
        this.age = age;
    }

    sayInformation() {
        return `Hola mi nombre es ${this.name} tengo ${this.age} años :D`;
    }

    sayGuauGuau () {
        return `${super.sayGuau()} Guauuuuuuuuuuuu!!!`;
    }
}

var popi = new Popi("Golder", 2);

console.log(popi.sayGuau());
console.log(popi.sayInformation());
console.log(popi.sayGuauGuau());