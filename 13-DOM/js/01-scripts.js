let elemento;
//document es todoe l html que vemos , selecciona todo cuando colocas f12
elemento = document; //selecciona todo la pagina
elemento = document.all; //trae todos los elementos que conforman el html del proyecto
elemento = document.head;// trae head meta y las diferentes hojas de estilo
elemento = document.body;//traer todo lo que este dentro de la etiqueta body

elemento = document.domain; //ip 
elemento = document.forms;//trae los arreglos HTML COLLECTION
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;

console.log(elemento);