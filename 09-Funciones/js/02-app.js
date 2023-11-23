// declarcion de Funcion (Function Declaration)


sumar();//si funciona se imprime en 4

function sumar(){ 
    console.log (2+2);
}


//Expresion de Funcio(Fuction Expression)  2° forma

sumar2(); //no podemos usar antes de inicializarlo

const sumar2 = function(){ //esta funcionno esta declarada como tal 
    console.log(3 +3);
};

//js se ejecuta en 2 vueltas, se conoce como hosting , 
//la primera vuelta registra todas las funciones(etapa de creacion),
// en la segunda vuelta la ejecutamos, esa funcion ya esta registrada
