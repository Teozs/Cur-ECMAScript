/* ES10: try catch y fromEntries        clase25/35


Cómo transformar un array de arrays en un objeto

El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las 
entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries().

const arrayEntries = [
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
] 

const usuario = Object.fromEntries(arrayEntries) 

console.log(usuario)
 {
  name: 'Andres',
  email: 'andres@correo.com',
  age: 23
}
*/

//EJEMPLO EN LA CLASE:
const entries = new Map([["name", "Teo"],["age", 35]]);
console.log(entries);//para ver entries antes de la tranformacion
console.log(Object.fromEntries(entries));//con esto crearemos de esos arrays a un objeto

/* esto nos devuelve:   Map(2) { 'name' => 'Teo', 'age' => 35 }
                        { name: 'Teo', age: 35 } */