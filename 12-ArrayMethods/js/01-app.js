const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglossss

meses.forEach(mes=> {
   if (mes == 'Enero') {
     console.log('Enero si existe');
   }
})

//En el mundo real deberias array method

const resultado = meses.includes('Diciembre');
console.log(resultado);

//EN UN ARREGLO DE OBJETOS SE UTILIZA .some
const existe = carrito.some(producto => producto.nombre=== 'Monitor Curvo');
console.log(existe);

//en un arreglo tradicional con .some
const existe2 = carrito.some(mes => mes === 'Febrero');
console.log(existe2);
