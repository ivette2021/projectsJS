// cuando quieres borrar algo de tu carrito de compras o eliminar un like por error

const primerEnlace = document.querySelector('a');//seleccionar el primer elemento
primerEnlace.remove();//eliminar un elemento con .remove



//eliminar desde el padre
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);//identifica el indice

navegacion.removeChild(navegacion.children[2]); //permite eliminar en base al indice del hijo