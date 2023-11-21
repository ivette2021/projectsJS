"use estrict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
};


Object.seal(producto);//metodo sellar el objeto, no se puede agregar ni eliminar propiedades pero si se puede MODIFICAR las existentes

producto.disponible = false;


console.log(producto);

console.log(Object.isSealed(producto));//para saber si un objeto esta sellado