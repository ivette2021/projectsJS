const meses = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[2]);
console.table(meses[3]);

//Cuanto mide el arreglo
console.log(meses,length); //6


//este for se adapta a si tu arreglo se eliminan o agregan datos de ej tu carrito de compras o amigos o seguidores en redes sociales}
//o dar like y quitar like

for(let i = 0; i < meses.length; i ++){//iterador para recorrer el arreglo inicio, cuantas veces y si se incr o decr
console.log(i); //mostra 0,1,2,3,4,5
console.log(meses [i]);//aqui obtenermos : enero, feb, mar, abr, may, jun
}