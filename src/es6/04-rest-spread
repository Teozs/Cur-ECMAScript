// ARRAY DESTRUCTURING

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);//opcion 1 para ver lo del array
/* console.log(a, fruits[1]); */// opcion 2 para ver lo del array, usando el indice.

//OBJECTS DESTRUCTURING

let user = {username: 'Teo', age: 35};
let {username, age} = user;
console.log(username, age);//asi para ver los datos
/* console.log(user.username, user.age); */ //otra opcion, es mejor la uno

//LA FORMA ANTES DE ES6

var usuario = {nombre:'Teo', edad:35, plataforma: 'Platzi'};
var nombre = usuario.nombre;
var edad = usuario.edad;
var plataforma = usuario.plataforma;
console.log(nombre, edad, plataforma);

//SPREAD OPERATOR

let person = {name: 'Teo', age: 35};
let country = 'MX';
let data = {...person, country};
console.log(data);
/* let data = {id: 1, ...person, country};//2-podemos jugar y agregar nuevos valores de la misma forma.
console.log(data); */

//REST  :como hacerlo en una funcion y como pa sar parametros con este concepto de REST perameters.
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3);