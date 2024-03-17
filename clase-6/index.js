
//Arrays
//sirve para almacenar valores en forma de una lista.

// const arreglo1 = [];
// const arreglo2 = [5, 6, 7, 3, 5];
// const arreglo3 = ["andres", "pepeito", "german"];
// const arreglo4 = [true, false, false, true];
// const arreglo5 = ["pepito", 5, true];


// console.log(arreglo1);


// //y como puedo acceder a esos datos???

// console.log(arreglo2[1]); //aca la respuesta va a ser un 6 debido a que empieza desde el 0.
// console.log(arreglo1[-1]); //undefine
// console.log(arreglo2[1] + arreglo2[4]);// aca la respuesta va a ser 11, ya que los suma.

//recorriensdo un array

// const arreglo2 = [5, 6, 7, 3, 5];

// for (let index = 0; index < 5; index++) {
//     console.log(arreglo2[index]);
    
// }

//Para saber cuanto es el contenido de un array lo que hago el .length


// const arreglo3 = ["andres", "pepeito", "german"];
// 	console.log(arreglo3.length);


// const arreglo3 = ["andres", "pepeito", "german"];

// 	for (let index = 0; index < arreglo3.length; index++) {
//     console.log(arreglo3[index]);
    
// }



//Y si yo le pongo .toUpperCase() lo que va hacer es devolverme a los datos con su descripcion pero en mayuscula
 

// const arreglo3 = ["andres", "pepeito", "german"];

// 	for (let index = 0; index < arreglo3.length; index++) {
//     console.log(arreglo3[index].toUpperCase());
    
// }

// Se pueden agregr elementos a los arrays?? le ponemos el .push, esto agregara un alemento, si primero pedimos la longitud y despues pedimos el arreglo3, nos dara el arreeglo con el que agregamos con el push.


// const arreglo3 = ["andres", "pepeito", "german"];
// 	arreglo3.push("camila");
// 	console.log(arreglo3.length);
// 	console.log(arreglo3);


//Y si yo quiero agregsarlo al principio tengo que ponerle al .unshift


// const arreglo3 = ["andres", "pepeito", "german"];
// 	arreglo3.unshift("camila");
// 	console.log(arreglo3.length);
// 	console.log(arreglo3);

//Ahora como hago para sacar el elementop deñ final?? agrego .pop

	// const arreglo3 = ["andres", "pepeito", "german"];
	// arreglo3.pop();
	// console.log(arreglo3.length);
	// console.log(arreglo3);
// Y para sacar elementos del principio es con el .shift

	// const arreglo3 = ["andres", "pepeito", "german"];
	// arreglo3.shift();
	// console.log(arreglo3.length);
	// console.log(arreglo3);

    //Hay otro elemento que se llama el .splice(), este elemento me quita los elementos por posiciones

	// const arreglo3 = ["andres", "pepeito", "german", "camila"];
	// arreglo3.splice(0,2);
	// console.log(arreglo3.length);
	// console.log(arreglo3);

    // si hacemos una constante con el nombre buevo por ejemplo, que sea igual al recorte, por consola nos va a dar el arreglo sin lo recortado, pero si hacemos un console.log de la constante nuevo, nos retornara lo que ya recorto con el metodo splice.


	// const arreglo3 = ["andres", "pepeito", "german", "camila"];


	// const nuevo = arreglo3.splice(1,3);

	// console.log(arreglo3);
	// console.log(nuevo);

//el join  lo que hace es unir los elementos y dentro de los parentesis por lo que queremos que esten separados.


    // const arreglo3 = ["andres", "pepeito", "german", "camila"];

	// console.log(arreglo3.join("-"));

    // Hay otro elemento es concatenar es el concat, que une a dos arreglos en BeforeUnloadEvent.

//     const arreglo3 = ["andres", "pepeito", "german", "camila"];
// const numeros = ["1, 2, 3, 4, 5"];

// const varios = arreglo3.concat(numeros);

// console.log(varios);

//Otro metodo es el slice, es para hacer copias, pero el slice copia desde el que pone hasta el ante ultimo que dice entre parentesis.


//    const arreglo3 = ["andres", "pepito", "german", "camila"];
// 	console.log(arreglo3.slice(1, 2));


//Tambien esta el indexOf() este me indica en que posicion de un elemento en especial dentro de un  arrays. tiene que ser escrito igual a como esta en el areglo, sin maayuscula ni signo.



//    const arreglo3 = ["andres", "pepito", "german", "camila"];
// 	console.log(arreglo3.indexOf("pepito"));

//     Hay otro que se llama el includes, usamos este metodo para saber si esta o no el elemento en el arreglo, si el elemento esta, saldra true, y si no esta saldra false.+


    // const arreglo3 = ["andres", "pepito", "german", "camila"];
    //  console.log(arreglo3.includes("pepito"));

    //  Tambien esta el reverse, este voltea los elemento del arreglo


//    const arreglo3 = ["andres", "pepito", "german", "camila"];
// 	console.log(arreglo3.reverse());

 // Para elimeinar un elemento del arreglo
//  const arreglo3 = ["andres", "pepito", "german", "camila"];

// const eliminar = (nombre) => {

// let posicion = arreglo3.indexOf(nombre);

// 	if(posicion != -1){
// 	arreglo3.splice(2, 2);
// }

// console.log(arreglo3);
// }

// eliminar("camila");

//Si tenemos un array con objetos


// const array = [
// 	{nombre: "camisa", percio: 100},
// 	{nombre: "gorra", percio: 200}
// ]	

// console.log(array);

// // y si queremos agregar un objeto usamos el push

// array.push({nombre: "campera", percio: 300});
// console.log(array);


//creamos un array y le ingresamos objetos a traves de prompt


// const array = [];

// for (let i = 0; i < 3; i++) {

//     let nombre = prompt("ingresar nombre");
//     let precio = prompt("ingresar precio");
//     let obj = {
//         nombre: nombre,
//         precio: precio
//     }
    
//     array.push(obj);
// }

// console.log(array);

// for of

// const productos = [
//     {id: 1, producto:"fideos", precio: 100},
//     {id: 2, producto:"salsa", precio: 50},
//     {id: 3, producto:"queso", precio: 80}
// ];

// for (const producto of productos) {
    
//     //console.log(producto.id);
//     // console.log(producto.producto);
//     console.log(producto.precio);
// }


// podemos meter un new productos de la clase constructo, y hace lo mismo pero mas largo



// class Producto{
// 	constructor(nombre, precio){
// 	this.nombre=nombre;
// 	this.precio=precio;

// }

// }

// const array = [];

// for (let i = 0; i < 3; i++) {

//     let nombre = prompt("ingresar nombre");
//     let precio = prompt("ingresar precio");
//     let obj = new Producto (nombre, precio) 
    
//     array.push(obj);
// }

// console.log(array);


// el for recorre lo que sea, el for of recorre arreglos


// let numero = [1, 2, 3, 4 ]

// for (const item of numero) {
//     console.log(item);
// }


// tambien se puede recorer de esta manera

// const productos = [
//     {id: 1, producto:"fideos", precio: 100},
//     {id: 2, producto:"salsa", precio: 50},
//     {id: 3, producto:"queso", precio: 80}
// ];

// for (let index = 0; index < productos.length; index++) {
//     const element = productos[index];
    
//     console.log(element);
// }


// Tambien se puede hacer con un alert

const obj = {nombre: "german", edad: 38} 
let mensaje = `persona ${obj.nombre} edad ${obj.edad}`;

alert(mensaje);