// = asignacion
// == comparacion solo valida valor
// === comparacion que valida tanto valor como tipo de dato.

// console.log (3 == "3");
// console.log (3 === "3");

// Estructura del if(si en ingles).

// if (una condicion algo booleanos, algo que se cumpla mo que no se cumpla){

// 		codigo de la consicion en caso de que sea verdadera
// }
// jemplo1: se cumple la condicion

// if(true) {
//     console.log("entramos al if");
//   }
  
//   console.log("fin del proceso");

// ejemplo2: no se cumple la condicon

// if(false) {
//   console.log("entramos al if");
// }

// console.log("fin del proceso");

// ejemplo 3:

// let nombre = "daiana";

// if(nombre === "daiana"){
// 	console.log("hola daiana");
// }
// 	console.log("chau daiana");


//     ejemplo 4:

//     let nombre = "daiana";
    
//     if(nombre === "carola"){
//         console.log("hola daiana");
//     }
//         console.log("chau daiana");

// ejemplo 5:


// if( ""){
// 	console.log("entramos");
// }

// En este ejemplo como el string vacio es false, javascript no lo representara, poprque nunca paso por algo falso. como que no existio.

// ejemplo:6.

// let numero = 5;

// if (numero === 5){
// 	console.log("hola 5");
// }
// 	console.log("intermedio");

// if (numero === 6){
// 	console.log("hola 6");
// }
// 	console.log("terminamos");

// En este ejercicio va a salir por consola;

// hola 5,
// intermedio,
// terminamos.

// porque al false que seria el 6 no lo toma, como que la condicion no es verdad.

// ejemplo:7

// let numero = 19;

// if (numero === 5){
// 	console.log("hola 5");
// }
// 	console.log("intermedio");

// if (numero === 6){
// 	console.log("hola 6");
// }
// 	console.log("terminamos");

//     ejemplo:7

// let numero = 19;

// if (numero === 5){
// 	console.log("hola 5");
// }
// 	console.log("intermedio");

// if (numero === 6){
// 	console.log("hola 6");
// }
// 	console.log("terminamos");

// consola: ninguna de las condiciones son ciertas.
 
// intermedio,
// terminamos

// Estructura if(){}else{};

// ejemplo: 8

// let numero = 10;

//  if (numero === 30){
//  	console.log("eres ighual a 30");

//  } else {

// 	console.log("no eres 30")
//  }

// 	console.log("terminamos");

//     en consola:

//     no eres igual a 30
//     terminamos

// en este caso que la primera condicoon es verdadera solo pone la respuesta del if
// y de lo que esta afuera del if, porque el else solo actua si la condicion de arriba no es  verdadera
//  let numero = 30;

//   if (numero === 30){
//   	console.log("eres ighual a 30");

//   } else {

//  	console.log("no eres 30")
//   }

//  	console.log("terminamos");

    //  en consola:

    //  eres igual a 30
    //  terminamos

     
// let respuesta = prompt("terminaste la tarea");

// if (respuesta === "si" ){
//     alert("puede salir a jugar");

// } else {
//    alert("no puede salir a jugar");
// };
   
// QUE PASA SI LA RESPUESTA ESTA EN MAYUSCULA?? USAMOS toLowerCase()

// let respuesta = prompt("terminaste la tarea");

//  if (respuesta.toLowerCase() === "si"){
//  	alert("puede salir a jugar");

//  } else {
// 	alert("no puede salir a jugar");
// }
	

//Condicones anidadas, es usar varios if, cuando entra un if, ya no enmtra en ninguno mas, a penas se cumple una condicon se termina el ciclo, y pasa a la que esta afuera de las condiciones.

// let edad = parseInt(prompt("ingresa tu edad"));

// if(edad < 15) {
// 	alert("no puedes entrar");
// }else if(edad < 18) {
// 	alert("puedes entrar con un adulto");
// }else{
// 	alert("puedes entar");
// }
// 	alert("gracias por ingresar tu edad");


//Tambien se puede ingresar un booleano en una variable.

// let numero = 5;

// let valor = true;

// let valorUno = numero === 10;

// console.log(valorUno);

//nota: para cuando reponde una respuesta con un tilde lo que tengo que hacer es, lo tendriamos que transformar con logica.
// de esta forma estamos avalando que si a la palabra la pone con tilde o sin tilde va a poder entrar.

// let comentario = prompt("ingrese comentario");

// if (comentario === "descripción") {
//     comentario = "descripcion"
// }


// if (comentario === "descripcion") {
//     console.log("entramos");
    
// }

// pero tambien existe la forma y que se escribe con dos lineas rectas
// sino ponemos en la condicion este y ||, que son las dos barritas, ahi 
//tendriamos dos condiconmes  en una, ya que la palabra tiene tilde y sin
// tilde, de las dos formas entra, y si la escribe con mayuscula le ponmdriamos un tolowerCase().

// let comentario = prompt("ingrese comentario");

// if (comentario=== "descripción" ||  comentario === "descripcion") {
//     console.log("entramos");
// }

// toLowerCase

// let comentario = prompt("ingrese comentario");

// if (comentario.toLowerCase() === "descripción" ||  comentario.toLowerCase() === "descripcion") {
//     console.log("entramos");
// }

//para ingresar el nombre que sea diferente a nada y a la vez large un menssje por consola.

// let nombre = prompt("ingrese su nombre");

// if (nombre != "") {
//     let mensaje = `hola ${nombre}`;
//     console.log(mensaje);
//    // alert(mensaje);
// }



//OPERADORES LOGICOS

// && las dos condicones  tienen que ser verdderas

// || aunque sea una sola de las conmdiciones tiene que ser verdades


// &&
// let respuestaTarea = prompt("terminaste la tarea");
// let respuestaCasa = prompt("oraganizaste la tarea");

//   if (respuestaTarea.toLowerCase() === "si" && respuestaCasa.toLowerCase() === "si"  ){
//   	alert("puede salir a jugar");

//   } else {
//  	alert("no puede salir a jugar");
// }

// || Y &&, aca hicimos un prompt donde tienes que ingresa el 
// nombre, y las condiones para las repuestas son; si el nombre
// es iguaL a endres en minuscula o|| nombrer es igual a andres
//en mayuscula y&& el nombre tiene que ser distinto a nada. 

// let nombre = prompt("ingrese nombre");

// if ((nombre == "andres" || nombre == "ANDRES") &&(nombre !== ""))  {
//     alert("hola andres")
// } else {
//     alert("no ingresaste los datos correctamente");
// }

// let numero = parseInt(prompt("diga un numero mayor a mil"));

// if ( numero > 1000 ) {
// 	alert("ya tiene su numero")
// }else { 
// 	alert (" ingrese otro numero")
// }	


// let tarea = prompt("hiciste la tarea?");
// let casa = prompt("ordenaste la casa");

// if (tarea === "si" || casa === "si") {

//     if (tarea === "si") {
//         if (casa == "si") {
//             console.log("puedes salir");
//         }else {
//             console.log("organizar la casa");  
//         }
//         }else {
//             console.log("tienes que hacer la tarea"); 
//         }  
//     }else {
//         console.log("no puedes salir tienes que hacer las dos cosas"); 

// }




