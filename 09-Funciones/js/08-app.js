function sumar(a, b){
    return(a+b);//retorna un valor para asignar
}

const resultado = sumar(2,3); //asignamos el valor a una variable resultado
console.log(resultado);

//Ejemplo mas avanzado

let total= 0; 
function agregarCarrito(precio){

return total +=precio;

}
function calcularImpuesto(total){
return total * 1.15;
}

total =  agregarCarrito(300); //se agrega el total porque es un return 
total =  agregarCarrito(100); // seran 400
total =  agregarCarrito(600); //tengo 1000

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar} `);

console.log(total);