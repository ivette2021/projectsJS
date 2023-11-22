const numeros = [10, 20, 30 , 40, 50,[1,2,3]];

console.log(numeros);
console.table(numeros);//te entrega en la consola un tabla columnas index y value

//Acceder al arreglo
console.log(numeros[2]);//index 2 esta el 30 debido a que se inicia desde el cero
console.log(numeros[0]);
console.log(numeros[20]);//dara un undefined 

//para acceder dentro de un arreglo
console.log(numeros[5][1]);//accedes a la posicion o index 5 y subposicion 1 // daria 2 , en este caso de ve una tabla que tiene 3 columnas extras en el index 5