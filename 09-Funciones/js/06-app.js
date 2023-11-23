// function saludar(nombre, apellido = 'No tiene apellido'){
    function saludar(nombre = Desconocido, apellido = ''){    //por defecto podemos dejar un campo vacio
    console.log(`Hola ${nombre}${apellido}`);
}

saludar('Ivette', 'Valdivia');
// saludar(); //hola , undefined undefined

 saludar(); //ahora con los valores por defecto diria Hola, Desconocido y el espacio 

 saludar('Ivette');//diria Hola Ivette + espacio