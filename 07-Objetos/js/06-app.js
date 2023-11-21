const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
    informacion : { //otro objeto (dentro del objeto info), se puede hacer tan complejo como quieras
       medidas:{
        peso:'1kg',
        medida:'105mm'
       },
       fabricacion:{
        pais:'Korea',
        ciudad :'Busan'
       }
        
    }
};

const {nombre, informacion, informacion: {fabricacion: { pais } }}  = producto;//estas creando las variables nombre e informacion y accediendo a informacion y a fabricacion
console.log(nombre);
console.log(informacion);
// console.log(fabricacion);//este va a dar error, porque estoy extrayendo pais no fabricacion, se tendria que colocar {fabricacion, fabricacion: { pais } }}
console.log(pais);

