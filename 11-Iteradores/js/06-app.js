//forEach, es ideal para recorrer un arreglo

const pendientes = ['Tarea','Comer','Proyecto', 'Estudiar Js'];

pendientes.forEach( (pendiente, indice) => { //creamos pendiente para representar cada uno de los elementos del arreglo
    //console.log(pendiente);
    console.log(`${indice} : ${pendientes}`);
});

pendientes.forEach( pendiente => console.log(pendiente)); //version corta 

const carrito = [
    {nombre: ' Monitor 27 Pulgadas', precio:500},
    { nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200, descuento:true},
    {nombre:'Audifonos', precio: 300},
    {nombre:'Teclado', precio: 400},
    {nombre: ' Celular', precio: 700},
];

carrito.forEach( producto => console.log(producto.nombre));

const nuevoArreglo = carrito.forEach( producto => producto.nombre);

const nuevoArreglo2 = carrito.map((producto)=> producto.nombre);//map crea un arreglo nuevo y foreach no lo hace

console.log(nuevoArreglo);
console.log(nuevoArreglo2);