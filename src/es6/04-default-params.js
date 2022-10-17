function newUser (name, age, country) {   //la forma de hacerlo antes es así
    var name = name || 'Teo';
    var age = age || 35;
    var country = country || 'MX';
    console.log(name, age, country);
}
newUser();  //mandamos llamar a la funcion pero sin argumentos
newUser('David', 15, 'CO');  //aqui la mandamos llamar pero aqui si con argumentos.


//NUEVA FORMA EN ECMAScript6

function newAdmin (name = 'Kyo', age = 21, country = 'Japon') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Ana', 28, 'PE');


// OTRA FORMA EN COMENTARIOS:

function users (name, age, country) {
    console.log(name??'user', age??0, country??'default');
}
users();
users('Marco', 25, 'Nicaragua');