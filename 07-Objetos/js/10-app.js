const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
};

//crear un segundo objeto
const medidas ={
    peso:'1Kg',
    medidas: '1m'
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);//une los dos objetos en una variable en este caso resultado

//Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas }; //copia las variables y las une, da el mismo resultado que la anterior

console.log(resultado);
console.log(resultado2);
