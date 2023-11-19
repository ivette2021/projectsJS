const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
// console.log(typeof numero1);//es para saber el tipo de dato

console.log(Number.parseInt(numero1));//String a int
console.log(Number.parseFloat(numero2));//String a float
console.log(Number.parseInt(numero3));//String a int , devolvera Nan = no es un numero, porque no es un numero entero 



//Revisar si un numero es entero o no
console.log(Number.isInteger(numero4)); // devolvera un true