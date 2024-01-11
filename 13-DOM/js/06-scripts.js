const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// console.log(encabezado.innerText);//si es el CSS - visibility:hidden;
// console.log(encabezado.textContent);//si lo va a encontrar
// console.log(encabezado.innerHTML);//se trae el HTML

// const encabezado = document.querySelector('.contenido-hero h1').textContent;//puedes usar este y omitir los anteriores
// console.log(encabezado);


// const nuevoHeading = 'Nuevo Headind';
// document.querySelector('.contenido-hero h1').textContent = 'Nuevo Encabezado';//este comando modifico el header que decia Encuentra tu hospedaje para tus proximas vacaciones por Nuevo encabezado

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'; //aqui estamos modificando la imagen
console.log(imagen);