"use estrict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
};

//una variable (const)al estar dentro de un objeto si se puede reasignar
// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// console.log(producto);

// para hacer que un objeto se comporte como una constante, no pueda ser modificado, habilitamos en modo estricto

//primero prevenir que modifiquen un objeto
Object.freeze(producto);//nos da un error porque estamos modificando propiedades del objeto, agregar o eliminar

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
//metodo para saber si un objeto esta congelado o no;
console.log(Object.isFrozen(producto));
