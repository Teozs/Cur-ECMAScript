/* como usar objects.entries;
Obtener los pares de valor de un objeto en un array
Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.
 */
// EJEMPLO: 
const usuario = {
    name: 'Teo',
    email: 'teozavala@gmail.com',
    age: 35
};
console.log(Object.entries(usuario));


/*  Esto es lo que nos devuelve:
[
    [ 'name', 'Teo' ],
    [ 'email', 'teozavala@gmail.com' ],
    [ 'age', 35 ]
  ] */