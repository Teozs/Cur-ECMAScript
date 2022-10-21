/* 
Obtener las propiedades de un objeto en un array
Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento. */

//EJEMPLO;

const usuario = {
    name: 'Teo',
    email: 'teozavala@gmail.com',
    age: 35
};

console.log(Object.keys(usuario));// usamos console.log para verlo solamente
/* 
ESTO ES LO QUE NOS ARROJA;
[ 'name', 'email', 'age' ] */