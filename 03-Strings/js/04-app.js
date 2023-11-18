
const producto = ' Monitor 20 Pulgadas';
//eliminar espacios al inicio y al final

console.log(producto);
console.log(producto.length);

//eliminar del inicio...
console.log(producto.trimStart());

console.log(producto.trimEnd());//elimina en el final del texto
console.log(producto.trimStart().trimEnd());//elimina en ambas direcciones

console.log(producto.trim());//elimina en ambas direcciones