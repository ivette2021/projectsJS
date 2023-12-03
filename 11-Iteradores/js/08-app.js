const pendientes = ['Tarea', 'Comer','Proyecto','Estudiar JS']

//for in itera sobre objetos

for (let pendiente in pendientes) { //esta forma a diferencia de for of te trae los indices en vez de los nombres de los elementos dentro del arreglo
    console.log(pendiente);

}

for (let producto of carrito) {
    console.log(producto.nombre);

}

// otro ejemplo con objetos 

const automovil ={
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let  propiedad in automovil){
    console.log(propiedad);// te traera modelo , year , motor
    console.log(`${automovil[propiedad]}`); //este es si quieres los valores , ahi te daria camaro , 1969, 6.0
}

//js 7  se creo una forma mas corta de iterar

for(let[llave,valor] of Object.entries(automovil)){
    console.log(valor); //camaro, 1969, 6.0
    console.log(llave);//camaro, modelo, 1969, year, 6.0, motor
}