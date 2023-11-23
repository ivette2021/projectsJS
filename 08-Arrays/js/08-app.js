const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
};
// const nombre = producto.nombre;//extrayendo el valor del nombre y se la estoy asignando a la variable
// console.log(nombre);

//Destructutring 

const{nombre}= producto;//si traes mas de una cosa del objeto asi seria mas corto
console.log(nombre);

//Destructutring con arreglos
const numeros = [10, 20, 30, 40, 50];
//su valor esta definida por la posicion y no puedes crear variables que tengan corchetes
//const [primero, segundo, tercero]= numeros; //si quieres acceder al 30 desbes colocar los anteriores puesto para que se asignen, aqui estamos creando dos variables inecesarias
//const[tercero]= numeros;//si haces esto se asigna al 10 y no al 30 que queremos sacar 
//asi que para hacerlo colocamos comas entre campos vacios para los campos que no queremos traer 

const[ ,  ,tercero]= numeros; 
const[ first,  ,thrid]= numeros;//tenemos el 10 y el 30 el 20 no lo traeria 
const[ Primero,Segundo  , ...Tercero]= numeros;//

console.log(tercero);//trae el 30
console.log(first);//trae el 10 del ultimo arreglo
console.log(Tercero);// trae en un arreglo 30, 40 ,50 (todos los demas valores que no hayan sido parte del array destructuring)//usado en react