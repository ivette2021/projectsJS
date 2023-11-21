
//object literal
const producto = {   //este es mas estatico , se utiliza mas
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    
};

//object constructor

function Producto(nombre, precio){ //este es mas dinamico , pero se utiliza menos
    this.nombre = nombre;
    this.precio = precio;
    this,disponible = true;
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Television', 100);
console.log(producto3);