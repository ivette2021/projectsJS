let i = 0; //inicio en cero 


// a diferencia de while, el Do While se va a ejecutar al menos una vez no importa si se cumple o no la condicion
do{ //este codigo se va a ejecutar mientras la condicion while se cumpla
    if (i % 15=== 0) {
        console.log(`${i} FIZZ BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`);
    }


    i++;//incremento
}while (i < 100); //Condicion