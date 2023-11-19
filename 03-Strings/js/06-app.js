const producto = ' Monitor 20 Pulgadas';
//.repeat te va a permitir repetir una cadena de texto...

const texto= 'en Promocion.repeat(3)';//repite el texto 3 veces
//const texto= 'en Promocion.repeat(2.4)'; // lo redondea a 2 veces

console.log(texto);
console.log(`${producto} ${texto} !!!`);// se concateno y se agrego la repeticion anterior

//Split, dividir un string 

const actividad = "Estoy Aprendiendo javaScript Moderno";
console.log(actividad.split(" "));//esto dice que dividira la frase por espacio encontrado, te lo dara en un listado

const hobbies = 'Leer, caminar, escuchar musica, bailar, escribir, aprender algo nuevo';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo a programar #JS";
console.log(tweet.split('#'));//divimos por el # , saldria [Aprendiendo a programar],[JS]
