// Estructura de un objeto

//  let nombre="pepito";
//  let esdad= 23;
//  let = direccion;


//objeto

// const persona = { 
// 	nombre: "pepito",  
// 	edad: 23,
// 	direccion: "av"	
// };

// console.log(persona.nombre);
// console.log(persona["edad"]);

// persona["nombre"] = "juan";
// console.log(persona);

//funcion constructora

// function Persona (nombre,edad, direccion) {
// 	this.nombre= nombre;
// 	this.edad= edad;
// 	this.direccion= direccion;
// };

// const persona1 = new Persona("pepito", 23, "av");
// console.log(persona1); 

// si contruyo en este caso dos objetos de persona1 y persona2, seran independientes.



// const persona1 = new Persona("pepito", 23, "av");
// const persona2 = new Persona("ramiro", 21, "lp");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

//Entonces a esto lo traemos de est manera:( y asi queda mas ordenado)

// function Persona(info) {
// 	this.nombre= info.nombre,
// 	this.edad= info.edad,
// 	this.direcion= info.direccion,
// 	this.colorDeCabello= info.colorDeCabello,
// 	this.colorDeOjos= info.colorDeOjos
// }

// let persona1 = new Persona({
// 	nombre: "Damian",
// 	edad: 34,
// 	direccion: "av",
// 	colorDeCabello:"negro",
// 	colorDeOjos: "azul"

// })

// console.log(persona1.nombre);


//Producto de una cardfs de mercado libre

// function Producto(img, precio, nombre){
// 	this.img=img;
// 	this.precio= precio;
// 	this.nombre= nombre;
// }

// let producto1 = new Producto("http/... ",  40000, " monitor samgsum");


// console.log(producto1);
//y de esta manera hicimos una de las cards que puede llegar a tener un ecommerce.


function Producto(tabla){
	this.img=tabla.img;
	this.precio= tabla.precio;
	this.nombre= tabla.nombre;
}

let producto1 = new Producto ({
    img: "http/..",
    precio:40000,
    nombre: "monitor samgsun"
})

console.log(producto1);