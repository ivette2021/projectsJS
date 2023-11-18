const producto = ' Monitor 20 Pulgadas';

//.replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice para cortar
console.log(producto.slice(0,10)); 
console.log(producto.slice(8)); 
console.log(producto.slice(2,1)); //en este caso como esta de reves slice no hace nada

// Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));//substring es mas inteligente y te lo da vuelta en el orden correcto

//icono de chrome del correo aparece con tu inicial es asi:
const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
