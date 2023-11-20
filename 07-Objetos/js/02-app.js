const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
};

//formas de acceder a los valores del objeto
console.log(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['nombre']); //menos comun
