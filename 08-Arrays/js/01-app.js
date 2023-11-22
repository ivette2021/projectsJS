const numeros = [10, 20, 30] ; //arreglos a diferencia de objeto es "posicion" en vez de "llave" y despues el valor 

const meses = new Array('enero','feberero','marzo');//sintaxis menos comun

console.log(numeros); //array(3)

//arreglo que contiene datos de todo tipo

const deTodo =["Hola", 10, true,"si",null, {nombre:'Juan', trabajo:'Programador'}];

//tambien se puede colocar un arreglod dentro de otro arreglo
const deTodo1 =["Hola", 10, true,"si",null, {nombre:'Juan', trabajo:'Programador'}, [1,2,3]];

console.log(deTodo);
console.log(deTodo1);