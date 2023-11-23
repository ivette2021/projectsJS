const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
];


for(let i = 0; i < carrito.length; i ++){//iterador para recorrer el arreglo inicio, cuantas veces y si se incr o decr
    console.log(carrito [i]);//aqui obtenermos todo el listado
    console.log(carrito [i].nombre);//aqui accedemos al nombre
    console.log(`${carrito [i].nombre} - Precio: ${carrito[i].precio}`);//saldria un lista :Monitor 27 Puladas - Precio:500 etc...
}
//hola(); esto seria una funcion (estructura)
//"Juan".hola(); esto seria un metodo(estructura)
carrito.forEach(function(producto){ //array method
    console.log(`${producto.nombre} - Precio: ${producto.precio}`); //es lo mismo que con el for soloq ue con un poco menos de codigo
});