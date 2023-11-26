//operador mayor que y menor que 

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (cheque) {
    console.log('Si tengo un cheque');
}
else if (tarjeta) {
    console.log('Si puedo pagar´porque tengo una tarjeta');
}


else{
    console.log('Fondon Insuficiente');
}