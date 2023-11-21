const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de:${this.precio} `);//this refiere a los valores que existen en el mismo objeto
    }
};
//this es una forma para referirse el objeto en si mismo.

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de:${this.precio} `);//this refiere a los valores que existen en el mismo objeto
    }
};

producto.mostrarInfo();
producto2.mostrarInfo();