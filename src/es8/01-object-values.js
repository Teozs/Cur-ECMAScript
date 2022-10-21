// OBJECT.VALUES

/* Obtener los valores de un objeto en un array
Object.values() devuelve un array con los valores de 
cada propiedad del objeto enviado como argumento. */
//EJEMPLO:

const usuario = {
    name: 'Teo',
    email: 'teozavala@gmail.com',
    age: 35
};

console.log(Object.values(usuario));//usamos el console.log para verlo en pantalla
/* 
ESTO ES LO QUE NOS DEVUELVE
[ 'Teo', 'teozavala@gmail.com', 35 ] */