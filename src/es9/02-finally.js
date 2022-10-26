/* Las siguientes características de ES9 o ES2018 que aprenderás son: método finally para 
promesas y generadores asíncronos.

Método finally en promesas

El método finally para promesas consiste en ejecutar código después que una promesa haya 
sido ejecutada como resuelta o rechazada. */
//usamos este codigo de la clase 6, promesas
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve("yeah   se ha resuelto la promesa")
        } else {
            reject("woooops.....error, se ha rechazado la promesa")
        }
    })
}
anotherFunction()
.then(response => console.log(response))//con el console.log mostramos lo del response, si se ejecuta resolve
.catch(err => console.log(err))//console.log del mismo error, si se ejecuta .catch
.finally(() => console.log('finally, ya termino!!'));//finally nos permite traer una funcion anonima que hara
                                                     // lo que nosotros necesitemos. Esto lo hace cuando termina
                                                    // de pasar por la promesa. 