/* ES11: globalThis y matchAll          clase 29/35

Las siguientes características de ES2020 que aprenderás son: el objeto global para cualquier
plataforma y el método matchAll para expresiones regulares.

Objeto global para cualquier plataforma
El motor de JavaScript, aquel que compila tu archivo y lo convierte en código que entiende el 
computador, al iniciar la compilación crea un objeto global.

El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. 
Dependiendo la plataforma, este objeto global tendrá un nombre diferente.

En el navegador el objeto global es window, para Node.js es global, y así para cada entorno. 
Sin embargo, en Node.js no podrás acceder a window, ni en el navegador podrás acceder a global.

Para estandarizar el objeto global se creó globalThis, un objeto compatible para 
cualquier plataforma.

// Ejecuta el siguiente código y observa que muestra
console.log(window)
console.log(globalThis)

// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true
 */

//EJEMPLO DE LA CLASE; 

console.log(window);//navagador.    al correr esto aqui no lo reconoce, en navagador si
console.log(global);//node,    aqui si reconoce el objeto global. En el navagador no.
console.log(self); //webworker

console.log(globalThis); //Este corre en todos lados, y funciona igual. Trae el objeto 
                        //no importa donde se ejecute. Los tres son el mismo objeto, 
                        //solo depende el lugar donde se llame.