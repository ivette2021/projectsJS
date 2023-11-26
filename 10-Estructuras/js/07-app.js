
const efectivo = 300;
const credito= 400;
const disponible = efectivo + credito;
const totalpagar = 600;

if (efectivo > totalpagar || credito > totalpagar || disponible > totalpagar) {
    console.log('Si podemos pagar');
}else{
    console.log('Fondos Insuficientes');
}
