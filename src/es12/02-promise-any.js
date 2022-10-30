/* ES12: promise-any y métodos privados       clase 32/35


Las siguientes características de ES12 o ES2021 que aprenderás son: métodos privados en 
clases y Promise.any.

Promise.any
Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea 
resuelta y rebotará si todas las promesas son rechazadas.SOLO LA PRIMERA PROMESA QUE SEA ACEPTADA

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")


Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 3
    .catch(error => console.log(error))
 */
//EJEMPLO EN CLASE:

    const promesa1 = new Promise((resolve, reject) => reject('Reject, la promesa fallo'));
    const promesa2 = new Promise((resolve, reject) => resolve('Resuelto, la promesa se resolvio'));
    const promesa3 = new Promise((resolve, reject) => resolve('Resuelto2, la segunda promesa se resolvio'));
    
    Promise.any([promesa1, promesa2, promesa3])
    .then(response => console.log(response));

    //Esto nos devuelve:     Resuelto, la promesa se resolvio