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


// function Producto(tabla){
// 	this.img=tabla.img;
// 	this.precio= tabla.precio;
// 	this.nombre= tabla.nombre;
// }

// let producto1 = new Producto ({
//     img: "http/..",
//     precio:40000,
//     nombre: "monitor samgsun"
// })

// console.log(producto1);

// metodo

//console.log("lina".toUpperCase());//LO CONVIERTE EN MAYUSCULA

//console.log("lina".length);//TE DICE LA LONGITUD DEL STRIG, en este caso 4

// function Persona(nombre, edad, direccion){
// 	this.nombre=nombre;
// 	this.edad= edad;
// 	this.direccion= direccion;
//     this.hablar= function () { console.log("hola soy " + this.nombre);
        
//     }
// }

// let persona1 = new Persona("maria", 45, "av");
// persona1.hablar();

//llamo a la persona con el this hablar.

// let persona = { 
// 	nombre: "pepito",  
// 	edad: 23,
// 	direccion: "av"	
// };

// for (const propiedad in persona) {
// 	console.log(persona[propiedad]);
// }


// construictora:

// class Persona {
//     constructor (nombre, edad, direccion){
//         this.nombre= nombre;
//         this.edad= edad;
//         this.direccion= direccion;
//     }


//     hablar(){
//         console.log("Hola hija" + this.nombre);
//         }

// }

// let persona1 = new Persona("maria", 34, "av");
// console.log(persona1.edad);

// Creando un objeto constructor con un booleano en el this. vendido





//ejemplo con cantidad

// class Producto{
//     constructor (nombre, precio, cantidad){
//         this.nombre= nombre;
//         this.precio= precio;
//         this.cantidad= cantidad;
//     }
//     vender(){

//         this.cantidad = this.cantidad -1;
//     }
    

// }

//     let producto1 = new Producto("televisor", 340000, 5);
//     let producto2 = new Producto("camara", 40000, 4);
//         console.log(producto1);
//         producto1.vender();
// 		console.log(producto1);
//         console.log(producto2);
//         producto1.vender();
//         console.log(producto1);
//         console.log(producto2);
//         producto1.vender();


const german = {
	nombre: "german",
	apellido: "gauna",
	edad: 38,
	pasatiempo: [ "correr", "hacer ejercicio", "dar clases"],
	soltero: false,
	contacto: { 
		email:"germangauna88Qgamil.com.ar",
		twitter:"gaunager",
		movil: "011272537",
		},
	saludar: function(){
		console.log(`hola`);
		}
}

console.log(german);
console.log(german["nombre"]);
console.log(german["apellido"]);
console.log(german.edad);
console.log(german.soltero);
console.log(german.pasatiempo);
console.log(german.pasatiempo);
console.log(german.contacto.twitter);
german.saludar();