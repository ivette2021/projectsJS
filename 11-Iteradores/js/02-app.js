  //crea un for loop que al detectar un elemento 5 detenga su eejcuccion

 for (let i = 0; i < 10; i++) { //i++ lo colocamos i+=2 se incrementa en 2
    
    if (i === 5) {
        console.log(`Este es el 5`);
        break;
    }
    console.log(`Numero:${i}`);
 }

 //cuando llegue al numero 5 se debe cambiar el int por string cinco y seguir el loop 

 for (let i = 0; i < 10; i++) { //i++ lo colocamos i+=2 se incrementa en 2
    
    if (i === 5) {
        console.log('cinco');
        continue;
    }
    console.log(`Numero:${i}`);
 }

 //otro ejemplo con continue quieres informar que hay articulos de descuento en tu carrito

 const carrito = [
    {nommbre:'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200, descuento:true},
    {nombre:'Audifonos', precio: 300},
    {nombre: ' Celular', precio: 700},
 ];

 console.log(carrito.length);

 for (let i = 0; i< carrito.length; i++ ) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
 }