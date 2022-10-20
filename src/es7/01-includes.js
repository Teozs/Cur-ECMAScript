/* Método includes
El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

Este método recibe dos argumentos:

El elemento a comparar.
El índice inicial desde donde comparar hasta el último elemento.

Índices positivos y negativos
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.
[0,1,2,3, ...., lenght-1]

Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.
[-lenght, ...,  -3, -2, -1]
Ejemplos utilizando el método includes
El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.*/

//Utilizando strings
const saludo = "Hola mundo";

console.log(saludo.includes("Hola")); // true
console.log(saludo.includes("Mundo")); // false: por la mayuscula
console.log(saludo.includes(" ")); // true
console.log(saludo.includes("Hola", 1)); // false, en los strigs los indices cuentan las letras dentro del string
console.log(saludo.includes("mundo", -5));// true, igual que lo mencionado arriva


// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

console.log(frutas.includes("manzana")); // true
console.log(frutas.includes("Pera")); // false, por mayuscula
console.log(frutas.includes("sandía"));// false, porque no hay sandia
console.log(frutas.includes("manzana", -4)); // false, en este se cuenta el indice negativo(de derecha a izquierda), cada elemento en el array
console.log(frutas.includes("piña", 2)); // false, en este es positivo(de iaquierda a derecha, comensando desde cero)
console.log(frutas[0].includes("man")); // true, al indicar el indice y el array, compara los caracteres dentro de ese strigs que esta dentro de ese indice