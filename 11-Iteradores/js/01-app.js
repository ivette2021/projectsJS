// for (let i = 0; i < 10; i++) { //i++ lo colocamos i+=2 se incrementa en 2
//     console.log(`Numero:${i}`);
    
// }

// en un for loop como identificas los valores que son pares y lo que son nones

for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0){ 
        console.log(`Numero:${i} es PAR`);//todos los numeros que dejan residuo cero es par
    }else{
        console.log(`El numero ${i} es IMPAR`);
    }
 }

 const carrito = [
    {nommbre:'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200},
    {nombre:'Audifonos', precio: 300},
    {nombre: ' Celular', precio: 700},
 ];

 console.log(carrito.length);

 for (let i = 0; i< carrito.length; i++ ) {
    console.log(carrito[i].nombre);
 }