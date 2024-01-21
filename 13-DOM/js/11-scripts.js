//MENU FLOTANTE
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

/* btnFlotante.addEventListener('click', () => {
    console.log('diste click en el boton');
}); */

btnFlotante.addEventListener('click', mostrarocultarFooter);


function mostrarocultarFooter(){
    //hace que al presionar el boton se muestre u oculte el banner de abajo 
    if(footer.classList.contains('activo')){//verificar si una clase esta en html
        //btnFlotante.classList.remove('activo');//en caso que ya este para evitar dupliocarla
        footer.classList.remove('activo')
        this.classList.remove('activo');//es lo mismo  La linea comentada
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo'); //revismao la clase activo en css
       // btnFlotante.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
   
    console.log(footer.classList);
}