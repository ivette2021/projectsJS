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

console.log(producto);
console.log(producto).informacion;
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
console.log(producto.informacion.fabricacion.ciudad);
