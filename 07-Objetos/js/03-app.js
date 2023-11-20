const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
};
//agregar nueva propiedad al objeto
producto.imagen = "imagen.jpg";
//para eliminar propiedades del objeto, no afecta a la DB
delete producto.disponible;

console.log(producto);