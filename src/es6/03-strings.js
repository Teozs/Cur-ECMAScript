let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!'; //la forma de concatenar de antes//
/* console.log(epicPhrase); */

//Template Literals
let epicPhrase2 = `${hello} ${world}!`; //asi la nueva forma
console.log(epicPhrase2);

// MULTI-LINE STRINGS
let lorem = 'Esto es un string \n' + 'esto es otra linea'; //asi se hacia anteriormente
let lorem2 = `Esta es una frase epica
la continuacion de esa frase epica.
`;                                 //Esta es la nueva forma de hacer el salto de linea.
console.log(lorem);
console.log(lorem2);