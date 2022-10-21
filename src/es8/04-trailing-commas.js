/* 
Trailing commas
Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir 
nuevos elementos y evitar errores de sintaxis. */

//EJEMPLO CLASE:

const array = [ 24, 34, 25, 24, , , , 2]; // asi es la sintaxis correcta, de como añadirle espacios(vacios) al array con comas

console.log(array); //para ver lo que tiene nuestro array
console.log(array.length); // para ver la longitud del array

/* ESTO ES LO QUE NOS ARROJA EN ESTE CASO:

[ 24, 34, 25, 24, <3 empty items>, 2 ]
8 */