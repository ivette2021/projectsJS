const aprendiendo = function(){
    console.log('Aprendiendo Js');
};
// const aprendiendo2 = function(){
//     console.log('Aprendiendo Js');
// };
//una forma de hacer mas corta nuestra funcion transformarlo a un arrow function
//1° reduccion: function se transforma => ,
//2° reduccion: cuando la funcion es de una sola linea puedes sacar las llaves
//3° cuando son una linea tambien los arrow function vuelven implicito el return borra el concole.log()

const aprendiendo2 = ()=>'Aprendiendo Js';

console.log(aprendiendo2());