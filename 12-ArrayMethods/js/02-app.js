//veremos find index nos permitira saber enq ue lugar de nuestri arreglo se encuebntra un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//anteruiormente lo hariamos con foreach
meses.forEach((mes,i) =>{
    if (mes == 'Diciembre') {
        console.log(`Encontrado en el indice ${i}`); //encontrado indice 3
    }
})

//Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Diciembre');
console.log(indice);

//Encontrar un indice de un arreglo de objetos...
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice2);//1