const pendientes = ['Tarea','Comer','Proyecto', 'Estudiar Js'];

const carrito = [
    {nombre: ' Monitor 27 Pulgadas', precio:500},
    { nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200, descuento:true},
    {nombre:'Audifonos', precio: 300},
    {nombre:'Teclado', precio: 400},
    {nombre: ' Celular', precio: 700},
];


//for of itera sobre arreglos

for (let pendiente of pendientes) { //forma ma simplificada de un for , le damos un alia a cada elemento del arreglo para que vaya iterando sobre el arreglo original
    console.log(pendiente);

}

for (let producto of carrito) {
    console.log(producto.nombre);

}