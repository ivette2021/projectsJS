const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
 };

aprendiendo('JavaScript');//pasando parametros

//una forma de hacer mas corta nuestra funcion transformarlo a un arrow function

//const aprendiendo2 = (tecnologia)=>`Aprendiendo ${tecnologia}`;

//podemos simplificar aun mas...ArrowFuction
const aprendiendo2 = tecnologia=>`Aprendiendo ${tecnologia}`;

console.log(aprendiendo2('JavaScript'));




//   Ejemplo con 2 parametros

const aprendiendo3 = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
};

aprendiendo3('JavaScript', 'NodeJs');//pasando parametros

//Un arrow function con 2 parametros

const aprendiendo4 = (tecnologia, tecnologia2)=>`Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo4('JavaScript', 'NodeJs'));