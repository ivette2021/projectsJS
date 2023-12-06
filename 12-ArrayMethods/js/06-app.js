const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
//todos los elementos de un arreglo deben cumplirse para retornar un true  = .every

const resultado = carrito.every(producto => producto.precio < 500); //version AND
console.log(resultado);}

const resultado2 = carrito.some(producto => producto.precio < 500); //some revisa que al menos 1 rcumpla con la condicion para que nos de true  // version del OR
console.log(resultado2);