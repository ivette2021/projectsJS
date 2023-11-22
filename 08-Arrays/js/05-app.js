const meses = ['Enero', 'Febrero','Marzo'];

// meses[3] ='Abril';//tendrias que saber la psociion no es dinamico

//agregar al final del arreglo
meses.push('Abril');//se van agregando al final de cada value ingresado
meses.push('Mayo');//este vendria despues de abril


console.table(meses);

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