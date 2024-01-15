const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor ='red';
encabezado.style.fontFamily ='Arial';
encabezado.style.textTransform = 'uppercase';

// para hacer el codigo mas corto 

const card = document.querySelector('.card');
card.classList.add('nueva-clase');//se agrega en el html
card.classList.remove('card');
console.log(card.classList);