/* 
“async-await” es una manera de trabajar de una forma mas cómoda 
con promesas, la palabra reservada “async” quiere decir que una 
función siempre devolverá una promesa. Ahora la palabra reservada “await”, 
solamente existe dentro de una función “async”, que hace que JavaScript 
espere hasta que la función promesa responda para continuar con el código 
dentro de ésta función, pero sin pausar la ejecución del siguiente código. */
/* 
Este tipo de funciones se suelen utilizar mucho sobre todo para hacer peticiones a servidores,
dado que al no ser instantaneo es necesario crear un hilo, o nuevo proceso de ejecución.
De esta manera no se interrumpe el flujo de ejecución principal de tu aplicación y tu aplicación 
sigue funcionando mientras llega esa respuesta del servidor. */

//con ayuda de unos comentarios para explicar lo de profesor
/* 
1-En este bloque de código el profesor lo que hace es simular esa demora con el 
método setTimeout( ), y añade una demora de 2 segundos. */

const AsyncFunction = () => {   //arrow function que retornara promesa, con sus opciones resolve y reject
    return new Promise((resolve, reject) => {  //funcion anonima dentro del promise
        (true)
        ? setTimeout(() => resolve('Async, se resolvio la promesa!!'), 2000)   //aentro tambien tiene una funcion anonima
        : reject(new Error('error!!, no paso la promesa')) //aqui usamos un if con concepto ternario, con la opcion si es true o false
    })             //El manejo de errores tambien puede ser manejado por una instancia de new Error
}
/* 2- En este bloque de código el profesor lo que hace es definir esa función asíncrona que se ejecutará 
en segundo plano sin interrumpir el flujo de ejecucón del resto de la aplicación sabiendo que la 
respuesta llegará 2 segundos más tarde.
 */

const anotherFunction = async () => {  //una funcion que va a recivir el async y el await y ejecutar la otra funcion de la promesa
    const something = await AsyncFunction ()
    console.log(something);
    console.log('Hello');
}
/* La constante something guardará 
el retorno de la función fnAsync que en este caso es verdadero*/
/* 
En este bloque de código el profesor lo que hace es mostrar algo por consola y también llamar a la función async( ) 
mostrándote el orden de ejecución, dónde se pueden ver el resultado de los métodos instantaneos y al final el resultado 
de la función asíncrona */
console.log('before'); //before y after solo son mensajes, strings, no son variables
anotherFunction();
console.log('after');
// y estos son los resultados que nos arroja
// Before
// After
// Async, se resolvio la promesa!! 
// Hello


//LAS NOTAS BAJO LA CLASE PONEN LA FORMA DE ORIGINAR EL ASYNC Y AWAIT OTRA MANERA:
/* ES8: funciones asíncronas:   clase:18/32

En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo 
en JavaScript mediante funciones asíncronas.

Cómo utilizar funciones asíncronas

La función asíncrona se crea mediante la palabra reservada async y retorna 
una promesa.*/

async function asyncFunction () {...}  //esta es una manera

//const asyncFunction = async () => { ... } //y esta al parecer es otra manera

/* La palabra reservada await significa que espera hasta que una promesa 
sea resuelta y solo funciona dentro de una función asíncrona. 
Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.
 */
async function asyncFunction () {
    try {
        const response = await promesa()
        return response
    } catch (error) {
        return error
    }
}

/* ¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy 
útiles, manejar ambas te hará un mejor desarrollador. */