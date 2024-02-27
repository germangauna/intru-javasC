//Ciclos estructuras que nos permiten repetir interacciones.
//for, while y do while.

// ciclos por conteo y por condiconal

// estructura del for 

// for(desde; hasta; actualizacion) {
//     codigo a repetir
// }

//supongamos que queremos poner 100 veces hola en la consola =>

// empezamos desde cero; hasta que la i sea menos de 100, como quiero que se vaya sumando, como va a ir oincrementando.

// for (let i = 0; i < 100; i ++){

//     console.log("hola", i );
// }

// si al console.log("hola"); no le pongo la i no me va a mostar como fuer subiendo sino quie me va a mostrar el resultado.
 // la i primero tomo el primeo el valor de cero, si queremos ue empiece de 1 empezaremos el bucle del 1 let i = 1
// console.log ("terminamos");
//Y termina en 99 porque cuando le ponemos hasta el ultimo menor de 100, por lo 	uw no pondra el  el numero 100. oporque no entra en la condicion.

// for (let i = 1; i <= 100; i ++){

//     console.log("hola", i );
// }

// console.log ("terminamos");

// con este codigo si ven la estructura, pusimos que empiece desde el 1 y hasta incluso el 100, y que vaya aumentando de a uno.


// Haremos un ciclo con un alert, que tenga tres interacciones y incrementando de a 2.


// for (let i = 0; i < 3; i = i +2){

//     alert("hola" );
// }

//     alert("terminamos");

 // en este caso, pusimos que empiece de 0, hasta 3 veces, y aumentado de a 2, esto va hacer que diga hola 1 vez, otra vez y termine.

 //Tabla para que incremenete

//  let numero =parseInt(prompt("ingrese un  numero"));

//  for (let i = 0; i <= 10; i++) {
//       let resultado = numero * i;  
//       let mensaje = ` ${numero} * ${i} = ${resultado} `;
//       alert(mensaje);

//  }

//  alert("termino la tabla");

 // ingresamos un numero, este numero que ingresemos pasara por el for,
 // donde la la sintaxis del for va a ser, que el numero ingresado se multiplique
 // por 1, 2, 3.... hasta llegar a 10, y en el resultado le mostraremos 
 // el numero x la y que sea igual al rersultado que psuimos arriba-.

//solo mostraremos el resultado, el valor que ingresemos recorrera, se multiplicara y saldra el resultado nada mas.

//  let numero =parseInt(prompt("ingrese un  numero"));

//  for (let i = 0; i <= 10; i++) {
//       let resultado = numero * i;  
  
//       alert(resultado);

//  }

// Vale aclarar que el ciclo sucede y despue stemdremos que poner que queremos mostar, porque si le ponemos en consola let resultado, nos motraria solo los resultados

//supongamos que tenemos que trabnajmos para un medico que solo puede dar 10 turnos.

// for (let i = 0; i < 10; i ++) {
   
//    let nombre = prompt("ingrese su nombre ");
//     let mensaje = `Turno #${i} Nombre : ${nombre}`;
//     alert(mensaje);   
// }


//sentencia break, esta lo que hace es quebrar el bucle, es por ejemplo para sacar turnos que no tenes
// sirve para que cuando estamos buscando algo, cuando aprece en la lista se terminan los turnos 
// es para poner una condicion que quiebre el ciclo
// for (let i = 0; i < 10; i ++) {

//     if (i === 5 ) {
//         break;
//     } 
//     console.log("hola");

// }
// console.log("terminamos");

//sentencia continuo, incrementa la interaccion, lo saltea y sigue con la interaccion

// for (let i = 0; i < 10; i ++) {

//     if (i === 5) {
//         continue; // si se cumple esta condicion saltea el console.log de i y vuelve otra vez al ciclo, con el numero que sigue
        
//     }
//     console.log(i);//para que se vean los numeros ponemos i.
// }

// console.log("terminamos");



// WHILE

//BUBLE INFINITO NO HACERLO

// let repetir = true;

// while (repetir) {
//     console.log("hola");
// } 

//No es einfinito

//  let repetir = false;

//  while (repetir) {
//     console.log("hola");
//  }

// este es un ciclo donde mientras el usuario sea diferente a andres va a salir el alerte que diga ingrese su usuario
//se puede usar para un usuario con su contraseña.

//  let usuario = prompt("ingrese un usuario");

//  while (usuario != "andres") {
//     alert("usuario incorrecto");
//     usuario = prompt("ingrese su usuario");
//  }

//  alert("bienvenido");

//do .. while

// let nuemro;

// do {
//     numero = parseInt(prompt("ingrese un numero"));
// } while (numero != 5);

// estructura del switch

// switch (valor) {
//     case value1:
//         codigo a ejecutar
//         break;

//     case value1:
//         codigo a ejecutar
//         break;      

//     default:
//         codigo a ejecut
//         break;
// }

// es muy util cunado tenemos valores ya definidos, por ejemplo para elegir u8na m oneda
//en este bucle lo hacemos por consola, se puede hacer con prompt

// let moneda = "ars";

// switch (moneda) {
//     case "cop":
//         console.log("peso colombiano");
//         break;

//     case "ars":
//         console.log("peso Argentino");
//         break;

//     case "clp":
//         console.log("peso chileno");
//         break;

//     default:
//         console.log("no ingresaste una moneda valida");
//         break;
// }


// let moneda = prompt("infgrese la moneda, cop, ars, clp");

// switch (moneda) {
//     case "cop":
//         alert("peso colombiano");
//         break;

//     case "ars":
//         alert("peso Argentino");
//         break;

//     case "clp":
//         alert("peso chileno");
//         break;

//     default:
//         ("no ingresaste una moneda valida");
//         break;
// }

// ejemplo, DE WHILE CON SWITCH

// let entrada = prompt("ingrese un nombre");
// // SE VA A REPETIR HASTA QUE SE INGRESE ESC.

// while (entrada != "ESC") {
//     switch (entrada) {
//         case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;   
//         case "DOMINGO":
//             alert("HOLA DOMINGO");
//             break;
//         default:
//             alert("QUIEN SOS");
//             break;
//     }
    
//     entrada = prompt("ingresa un nombre");
// }

//Tambien podemos hacer un for con un while

// let i = 0;

// while (i < 10) {
// 	console.log(i);  //si solo ponemos esto sin el i++ solo dara 10 i.

// 	i++; // si ponemos un solo + se hace un bucle infinito. 
// }

// console.log("termino el for while");

// let nombre   = "Homero";
// let apellido = "Simpsons";
// let edad     =  39;
// console.log(nombre);
// console.log(apellido);
// console.log(edad);

let persona    = "BART SIMPSON";
let domicilio  = "742 EVERGREEN";
let pais       = "USA";
let nacimiento = "02-11-70";
const codigo   = "B47U89RE243";
let carnet = "Codigo: "+codigo+" "+
             "Nombre: "+persona+" "+
             "Pais: "+pais+" "+
             "Nacimiento: "+nacimiento+" "+
             "Domicilio: "+domicilio;
console.log(carnet);