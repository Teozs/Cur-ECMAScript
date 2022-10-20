const list = new Set(); //set; es una lista de elementos unicos, no repetidos


list.add('item 1'); //para añadir items a la lista
list.add('item 2').add('item 3');// tambien se pueden añadir items encadenandolos

console.log(list);

//MAS INFO

//Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

/* Cómo utilizar los Sets
Para iniciar un Set, se debe crear una instancia de su clase a partir de un iterable. 
Generalmente, un iterable es un array.

const set = new Set(iterable)

Cómo manipular los Sets
Para manipular estas estructuras de datos, existen los siguientes métodos:

add(value): añade un nuevo valor.
delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
has(value): retorna un booleano si existe o no el valor dentro del Set 
clear(value): elimina todos los valores del Set.
size: retorna la cantidad de elementos del Set */

//OTRO EJEMPLO

/* Cómo quitar los elementos repetidos en una sola línea
👨‍💻 Para crear un array sin elementos repetidos, podemos utilizar Set y el 
operador de propagación de la siguiente manera:

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]
Respon */