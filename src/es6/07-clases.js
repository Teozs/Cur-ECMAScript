/* // Declaracion de una clase
class user {
    
}

//Asi creamos una nueva instancia de objeto(objeto de la clase user):
const nombreVariablenewuser = new user (); */


class user {
    //declarar metodos de nuestra clase:
    greeting() {
        return 'Hello';
    }
};
const teo = new user();
console.log(teo.greeting());
const bebeloper = new user ();
console.log(bebeloper.greeting());


//CONSTRUCTOR 
class user {
    //constructor
    constructor() {
        console.log('nuevo usuario');
    }
    greeting() {
        return 'Hello';
    }
}
const david = new user();


//constructor usando eL THIS

class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user('Ana');
console.log(ana.greeting());

// SETTERS and GETTERS

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {   //get nos traera la age y la guardara en uAge
        return this.age;
    }
    set uAge(n) {  //para reasignarle otro valor a age, usando set(usamos "n" como variable para ayudernos)
        this.age = n;
    }
}
const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);   
console.log(bebeloper1.uAge = 20);