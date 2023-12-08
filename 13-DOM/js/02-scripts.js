//Seleccionar elementos por su clase...   es antiguo este metodo ya no se usa tanto

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);