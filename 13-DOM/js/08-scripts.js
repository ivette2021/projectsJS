const navegacion = document.querySelector('.navegacion')

comsole.console.log(navegacion);
//acceder a los nodos  en este caso son los <a ref ...
comsole.console.log(navegacion.childNodes);  // los espacio en blanco son considerados elementos ej los saltos de lineas
comsole.console.log(navegacion.children);  // los espacio en blanco son considerados elementos

//forma limpia donde no incluya los espacios en blanco

//console.log(navegacion.children[1].nodeName) //da como resultado una A  que seria la etiqueta 
//console.log(navegacion.children[1].nodeType) //Node.nodetype sale mas en detalle en la documentacion de firefox, los elemento relacionados con el tipo de elementos por que es el numero 1 

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM'// aqui modifico el nombre de uno de los titulos de la seccion

card.children[0].src = '/img/hacer2.jpg';


//console.log(card.children[1].children[1].textContent);//llamas posicion 1 y su primer hijo ,
card.children[0].src='img/hacer3.jpg'
console.log(card.children[0]);

//traversing the hijo al padre

console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling);//esto es como para recorrer de un card hijo a su hermano de al lado 
console.log(card.nextElementSibling.nextElementSibling);//esto es como para recorrer de un card hijo a su hermano de al lado y el siguiente a este