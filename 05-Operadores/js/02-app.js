const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si 2 numeros son iguales
console.log(numero1 == numero3);//false
console.log(numero3 == numero2);//true aunque sea string y int no es estricto
//Comparador estricto

console.log(numero1 === numero2);//false , es estricto se fija en el valor y tipo de dato 
console.log(typeof numero1);//diciendo este es int 
console.log(typeof numero2);//string
console.log(numero1 === parseInt(numero2));//true


//diferente
const  password1 = "admin";
const  password2 = "Admin";

console.log(password1 != password2);//true
console.log(numero1 != numero2);//false , omite el tipo de dato 
//comparador estricto
console.log(numero1 !== parseInt(numero2));//true , porque ve el tipo de valor 
