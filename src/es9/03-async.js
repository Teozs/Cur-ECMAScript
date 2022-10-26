/* Generadores asíncronos
Los generados asíncronos son semejantes a los generadores que ya conoces, 
pero combinando sintáxis de promesas. 
GENERADOR: son funciones especiales que nos devuelven cosas de un array o
objetos. Las devuelven en orden y recordando donde se quedaron al pausar.
*/

//EJEMPLO EN LA CLASE
async function* anotherGenerador() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerador();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('hello!!');//solo para ver el orden en que nos lo devuelve
/* esto nos devuelve
hello!!
1
2
3 
*/

/* 
COMO UTILIZAR EL FOR AWAIT
De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. 
El ciclo siempre debe estar dentro de una función con async.

El valor es cada elemento del iterable puede tener cualquier nombre, 
por eso se inicia con let nombre. */

//ejemplo de clase
async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('after'); //solo para ver el orden en que nos devuelve las cosas
/* esto nos devuelve
after
Oscar
David
Ana */