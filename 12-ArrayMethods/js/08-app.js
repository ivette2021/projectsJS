const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// meses.push('Agosto'); //esto si modifica el arreglo


//Spread operator con arreglo de indices
const meses2 = [...meses, 'Agosto']; //si colocaras ...'Agosto'  esto haria que te separara en arreglo por letra  indice 1 A , indice 2 G , y asi sucesivamente
console.log(meses2); //esto no modifica el arreglo original tiene que ver con el arreglo funcional y coloca el agosto al final de mi arreglo ojo con el orden 


//Spread operator en un  arreglo con objetos
const producto = { nombre: 'Disco Duro', precio: 300};
const carrito2 = [ ...carrito, producto]; // se agrega el disco duro 
//const carrito2 = [...prodcuto, ...carrito]; //te va arrojar una inconsistencia ya que un objeto no es iterable, no se puede asignar un spread a un objeto
console.log(carrito2);
