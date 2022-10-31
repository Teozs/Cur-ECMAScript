import { products } from './products.js';//para importar los productos del modulo
 
console.log(products);//para mostrar en consola esos productos del API
console.log('hey'); //para ver el orden en que se muestran en pantalla

//en este caso por el await que usamos, primero trae todo y luego nos muestra el hey




/*    NOTAS DE CLASE:
ES13: top level await en el consumo de una API      clase 34/35


Top level await permite utilizar la palabra reservada await, sin estar dentro de una función asíncrona con 
async. Sin embargo, únicamente se puede utilizar await en la parte superior del archivo de un módulo.

Cómo utilizar top level await
Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas, si utilizabas await fuera de async, 
existirá un error de sintáxis.

// Error
await fetch(URL)
// SyntaxError: await is only valid in async function
Ahora, con top level await esto es posible, sin ningún error. Esto puede servir para importaciones de manera 
dinámica o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debe estar en la parte 
encima del archivo de tipo módulo.


Lecturas recomendadas

Platzi Fake Store API

https://fakeapi.platzi.com/


Curso de Gestión de Dependencias y Paquetes con NPM - Platzi

https://platzi.com/cursos/npm/ 
*/