function sumar(a,b){ //a y b son parametros
    console.log(a + b);
}

sumar(2,3);//2 y 3 son argumentos //da 5

sumar(200,184); //384

function saludar(nombre, apellido){
    console.log(`Hola ${nombre}${apellido}`);
}

saludar('Ivette', 'Valdivia');
saludar(); //hola , undefined undefined