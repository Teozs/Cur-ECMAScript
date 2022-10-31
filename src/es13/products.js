import fetch from "node-fetch";

const response = await fetch ("http://api.escuelajs.co/api/v1/products");//para traer a la API de platzi con le fetch
const products = await response.json();//para transformar a un objeto tipo json lo que trajo

export { products };  //para exportarlo al otro documento