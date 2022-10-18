//ANTES

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

console.log(newUser("Teo", 35, "MX"));

//ENHANCED OBJECTS LITERALS(MEJORA EN OBJETOS LITERALES)

function newUser(user, age, country) {
    return {
        user,
        age,
        country
    }
}
console.log(newUser("Teo", 35, "MX"));

//COMBINANDO AMBOS, HABRA CASOS DONDE SEA NECESARIO

function newUser(user, age, country, uID) {
    return {
        user,
        age,
        country,
        id: uID
    }
}
console.log(newUser("Teo", 35, "MX", 1));

//EJEMPLO EXTRA; es lo mismo pero escrito de otra forma

const nombre = "Teo";
const edad = 35;
const esteEsUnID = 1;

const object = {
    nombre,
    edad,
    id: esteEsUnID
}
console.log(object);