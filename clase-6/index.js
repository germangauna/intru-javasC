
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

	const arreglo3 = ["andres", "pepeito", "german", "camila"];
	arreglo3.splice(0,2);
	console.log(arreglo3.length);
	console.log(arreglo3);