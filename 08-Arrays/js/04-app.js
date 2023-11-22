const meses = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//apesar de estar declarado const un arreglo sus arreglos si se pueden modificar
meses[0]= 'nuevo mes'; //en vez de enero aparecera el valor nuevo mes
meses[10]= 'ultimo mes'; //como no hay nada despues del 6 se salta y crea la posicion 10 //esta es una forma de agregar elementos
console.table(meses);