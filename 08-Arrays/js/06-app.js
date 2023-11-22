const carrito = [];

//Definir un prodcuto
const producto = {
    nombre:"Monitor 32 Pulgadas",
    precio: 400
};

const producto2 = {
    nombre:"celular",
    precio: 800
};

const producto3 = {
    nombre:"Teclado",
    precio: 50
};

//forma imperativa es cuando modificamos la variable original (casos anteriores)
//forma declarativa no queda tan claro lo que se hace pero no modifica directamente la variable(crea una nueva) //programacion funcional

let resultado;
resultado = [...carrito, producto]; //copia de carrito y queremos agregar el primer carrito 
resultado = [...carrito, producto2]; 
resultado = [producto3,...carrito]; //es como unshift , nos coloca el objeto al inicio de la copia//aqui importa el orden en como le pases los valores


console.table(resultado);//aqui se vee efectuado el cambio
console.table(carrito);//esta variable no se toco