let resultado;

//PI
resultado = Math.PI;

//Redondear
resultado = Math.round(2.8);//redondea 3
resultado = Math.round(2.2);//redondea a 2
resultado = Math.round(2.5);//redondea a 3

//redondear hacia arriba 
resultado = Math.ceil(2.1);//redondea a 3

//redondear hacia abajo 
resultado = Math.floor(2.9);//redondea 2

// Raiz cuadrada
resultado = Math.sqrt(144); // daria 12

// absoluto
resultado = Math.abs(-500); //queda 500

//potencia
resultado = Math.pow(2,4); // 2x2x2x2 = 16

// Minimo
resultado = Math.min(3,5,1,12,-3);// cual es el minimo = -3

resultado = Math.max(3,5,1,12,-3);// cual es el maximo = 12

//aleatorio raro (pocas veces da numeros enteros)
resultado = Math.random() * 20;// con el 20 agregado dara numeros mayores a 1 seria asi el limite 0][20 decimal

//aleatorio dentro de un rango , este es el mas recomendable
resultado = Math.floor(Math.random() * 30 ); //de esta forma tendras un valor que va de 0 a 30 entero 

console.log(resultado);