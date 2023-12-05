
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado;

resultado = carrito.filter(producto  => producto.precio > 400);
resultado = carrito.filter(producto  => producto.precio < 600);//da arreglo todos los menos 600 ejemplo en airbnb lo usan para ver el tema de baño alberga etc
resultado = carrito.filter(producto => producto.nombre != 'Audifomos') //decimos traeme todos excepto audifonos
resultado = carrito.filter(producto => producto.nombre === 'Audifonos')//trae elq ue es igual a audifonos


console.log(resultado);