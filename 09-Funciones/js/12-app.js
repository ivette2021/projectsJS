const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
];

//foreah y map son igales en sintaxis, la diferencia es .map te crea un arreglo nuevo(llenma una variable con un arreglo nuevo) y foreach no
const nuevoArreglo = carrito.map(producto => //se reemplazo el function(producto) por ()=>
 `${producto.nombre} - Precio: ${producto.precio}`);

carrito.forEach( producto =>`${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArreglo);//.map crea un arreglo 