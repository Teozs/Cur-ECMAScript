/* 
ES11: BigInt y Nullish        clase 27/35

Operador Nullish Coalescing
El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para 
asignarle un valor.

El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, 
asígnale un valor por defecto "Andres", caso contrario asigna el valor 
de usuario.name.

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'
*/

//EJEMPLO DE LA CLASE:
/* const anotherNumber = 1;
const validate = anotherNumber ?? 5;

console.log(validate);
// retorna: 1     evalua si anotherNumber es null, pero como es 1 lo deja asi.
 */

const anotherNumber = null;
const validate = anotherNumber ?? 5;

console.log(validate);
 
//retorna: 5
//Aqui nos retorna 5 porque como evalua si es null y si lo es, entonces le asigna lo que 
//nosotros le indiquemos, en este caso 5.

/*
Diferencia entre el operador OR y el Nullish coalescing
El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto 
booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no 
sea null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.

const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId ) // 0 */ 