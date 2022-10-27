/* ES10: try catch y fromEntries        clase25/35

Las siguientes características de ES10 o ES2019 que aprenderás son: parámetro opcional de catch y
un método para tranformar arrays a objetos

Parámetro opcional de catch
El parámetro opcional de catch permite omitir el error si es necesario.

try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}
*/
//EJEMPLO DE LA CLASE: forma anterior:

try {
    hello();  //en el try manejamos en codigo, aqui una funcion que no existe, para que nos devuelva el error
} catch (error) {  //se utiliza el error como parametro
    console.log(error);//para ver error
}; 
//nos retorna:   ReferenceError: hello is not defined

//nueva forma:

try {
    anotherFunction();//en el try manejamos en codigo,funcion que no existe, para que nos devuelva el error
} catch {       //ya no se necesita el parametro error para manejarlo                                                                     
    console.log('esto es el error');
};
//esto nos retorna:   esto es el error

//Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.