const enlace = document.createElement('A'); // seria igual a una etiqueta A
//const enlace = document.createElement('img'); // puedes colocar un div, p, h1 etc para crear

//agregandole el texto 
enlace.textContent= 'Nuevo Enlace';

//añadiando href
enlace.href = '/nuevo-enlace';

enlace.target ="_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase')
enlace.onclick = miFuncion;

console.log(enlace);

//seleccionar la navegacion, ¿donde quieres mostrarlo?
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); //agregar un hijo nuevo, y por defecto lo colocara al final
console.log(navegacion.children);// para saber la posicion de sus hijos
navegacion.insertBefore(enlace, navegacion.children[1]);//si quieres especificar que lo quieres colocar entre dos a espacificos 

function miFuncion() {
    alert('Diste click')
}


//crear un Card
const parrafo1 = document.createElement('P');
parrafo1.textContent ='Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent ='Concierto';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent ='Concierto';
parrafo3.classList.add('precio');


// crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
//orden importa
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)


console.log(info);

//crear la imagen 
const imagen = dopcument.createElement('img');
imagen.src ='img/hacer2.jpg'

console.log(imagen);

//crear un Card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen 
card.appendChild(imagen);

//asignar la info 
card.appendChild(info);

console.log(card);


//insertar enm el html
const contenedor = document.querySelector('.hacer .contenedor-card');
contenedor.appendChild(card);//inserta al final de todas las card

contenedor.insertBefore(card, contenedor.children[0]);//inserta al inicio de todas las card

