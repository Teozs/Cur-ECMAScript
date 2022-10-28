/* ES11: BigInt y Nullish        clase 27/35

Las siguientes características de ES2020 o ES11 que aprenderás son: nuevo tipo de dato 
bigint y operador Nullish Coalescing (??).

- Big Int, enteros muy grandes:
El nuevo dato primitivo bigint permite manejar números enteros muy grandes. 
Existen dos formas de crear un bigint: el número entero seguido de n o mediante 
la función BigInt
 */
//EJEMPLO DE LA CLASE:

const aBigNumber = 3827287084378405340498409850n;  //al parecer esta es la forma anterior
const anotherBigNumber = BigInt(3827287084378405340498409850);

console.log(aBigNumber);
console.log(anotherBigNumber);

/* NO se porque no retorna exactamente el mismo numero, lo mismo paso al profe, pero no explico
si estaba bien o mal.
Esto nos retorna: 3827287084378405340498409850n
                  3827287084378405562449133568n
*/

/* JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un 
mínimo Number.MIN_SAFE_INTEGER.

const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991
Después de los límites, los cálculos muestran resultados erróneos. Los bigint ayudan a 
manejar operaciones de enteros fuera de los límites mencionados.

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(number) // 9007199254740992
console.log(bigInt) // 9007199254740993n
Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado 
diferente al esperado.
*/
