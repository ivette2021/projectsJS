
//object literal
const producto = {   //este es mas estatico , se utiliza mas
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    
};
//3 metodos para objetos

console.log(Object.keys(producto));//retorna un arreglo con los llaves(nombre, precio, diponible) lado der
//tambien objectkeys sirve para saber si un objeto esta vacio , ej la consulta de DB a un cliente fue exitosa o no ?

console.log(Object.values(producto));//retorna los valores(Monitor 20 pulgadas, 300, true)lado izq

console.log(Object.entries(producto));//retorna todo en pares (nombre, monito de 20 pulgadas; etc)