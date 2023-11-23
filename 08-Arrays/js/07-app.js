const carrito = [];//iniciamos con un carrito vacio

//Definir un prodcuto
const producto = {
    nombre:"Monitor 32 Pulgadas",
    precio: 400
};

const producto2 = {
    nombre:"celular",
    precio: 800
};

carrito.push(producto);//si quiero agregarlo al carrito
carrito.push(producto2);//agrego otro producto al carrito


const producto3 = {
    nombre:"Teclado",
    precio: 50
};

carrito.unshift(producto3);//agrega al producto al inicio del arreglo

console.table(carrito);//si lo quiero elistar

// eliminar ultimo elemento de un arreglo

// carrito.pop();

// console.table(carrito);//ya se elimino teclado

//Eliminar del principio del arreglo
// carrito.shift();
// console.table(carrito)

//eliminar del medio

carrito.splice(1,1);//1° es la posicion donde vas iniciar el corte y 2° cuantos elementos quieres eliminar ejeplo elimina index 1 por completo es celular,nombre y precio
carrito.splice(1,2);//borramos teclado y monitor de 32 pulgadas , desde su index hasta los valortes nombre y precio (que se van 2 row o filas)
console.table(carrito);