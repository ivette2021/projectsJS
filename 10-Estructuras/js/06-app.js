const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes pagar');
}else if (!puedePagar && ! usuario){
    console.log('No no puedes comprar');
}
else if (!usuario){
    console.log('Inicia sesion o sacar una cuenta');
}
else if (!puedePagar){
    console.log('Fondos Insuficientes');
}