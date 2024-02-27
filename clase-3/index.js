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

for (let i = 1; i <= 100; i ++){

    console.log("hola", i );
}

console.log ("terminamos");

// con este codigo si ven la estructura, pusimos que empiece desde el 1 y hasta incluso el 100, y que vaya aumentando de a uno.


// Haremos un ciclo con un alert, que tenga tres interacciones y incrementando de a 2.


// for (let i = 0; i < 3; i = i +2){

//     alert("hola" );
// }

//     alert("terminamos");

 // en este caso, pusimos que empiece de 0, hasta 3 veces, y aumentado de a 2, esto va hacer que diga hola 1 vez, otra vez y termine.

 //Tabla para que incremenete

 let numero =parseInt(prompt("ingrese un  numero"));

 for (let i = 0; i <= 10; i++) {
      let resultado = numero * i;  
      let mensaje = ` ${numero} * ${i} = ${resultado} `;
      alert(mensaje);

 }

 alert("termino la tabla");

 // ingresamos un numero, este numero que ingresemos pasara por el for,
 // donde la la sintaxis del for va a ser, que el numero ingresado se multiplique
 // por 1, 2, 3.... hasta llegar a 10, y en el resultado le mostraremos 
 // el numero x la y que sea igual al rersultado que psuimos arriba-.
