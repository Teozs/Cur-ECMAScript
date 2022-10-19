function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//OTRO EJEMPLO

function* generator(){
    yield 1;
    yield 2;
    yield 3;
}
const generador = generator();
(generador.next().value);//con un console.log que tenga dentro esto nos mostrara los numeros que tiene dentro, si esta bien

(generador.next().value);
(generador.next().value);
(generador.next().value);