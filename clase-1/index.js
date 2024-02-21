
// nombre ="andres";

// puedo declarar y tambien asignar:

// let nombre ="andres";

//  O tambien lo que podemos hacer  es:

// let apellido = "fernandez";

// Hay varios tipos de datos, en este caso dimos number y string.

// para la deficion de las variables hay que usar camelCase.

// ejemplo:

// let numeroUno = 2;

// let numeroDos = 10;

// // let suma = 2 + 10;

// let suma = numeroUno + numeroDos; 

//  const NUMEROTRES = 20; 
// // console.log(suma);

// console.log("aca vemos el valor de la suma", suma * NUMEROTRES);
//el console.log() sirva para mostrar en pantalla informacion de los calculos que hago en el vsc. y 
//esta informacion se va a aver en la consola.


// ponemos una variable y para sumar los valores, no es necesario que pongamos los numeros, sino sus variables.

//Tambien 

// let saludo = "hola";
// let nombre = "Camilo";

// let mensaje = saludo + nombre;

// console.log(mensaje);

// concatenacion de los dos variable, las une y si son nmumeros las suma, en la consola nos aparecera hola camilo.

// No se puede cambier el valor de las constantes pero mde las variables si.

// const NUMERO = 5;
// NUMERO = 10;

// let NUMERO = 5;
// NUMERO = 10

// console.log(NUMERO);

// Cuando tengo un espacio y lo concateno con el el mas, queda el mensaje sin espacio, para eso, usamos 
// el mas y dos comillas y devuelta el mas.

//  let saludo = "hola";
//  let nombre = "Camilo";

//  let mensaje = saludo + " " + nombre;

//  console.log(mensaje);

//  Tambien podria poner "Hola " y el espacio al aldo, pero no 
//  quedaria prolijo en el codigo.


// El comando prompt


// prompt("ingrese una palabra");


// Si yo a esto le asisgo una de las cajitas, por ejemplo pongo designo una variable y esta variable le pongo que sea igual a este comando prompt,
//  cuando escriba la palabra automaticamente se guardara en esa cajita.

// let nombre = prompt("ingrese una palabra");
// console.log(nombre);


// Tambien podemos concatenar un string con otras variables y mostarlo en consola.
 
// let saludo = "Hola ";
// let nombre = prompt("ingrese una palabra");
// console.log(saludo + nombre);


// Otro comando es el Alert, lo que hace es motrar en otra pestañita, sin tener que usar la consola.

// let saludo = "Hola ";
// let nombre = prompt("ingrese una palabra");
// let  mensaje = saludo + nombre;
// alert(mensaje);


// Los bastics se usan tambien para poner variables en los mensajes, 
//en los alert o console.log, sin el mas ni comillas

// let saludo = "Hola ";
// let nombre = prompt("ingrese una palabra");
// let  mensaje = `${saludo}  ${nombre}`;
// alert(mensaje);


// let nombre = prompt("ingrese su nombre");
// let apellido = prompt("ingrese su apellido");
// let edad = parseInt(prompt("ingrese su edad"));
// let ciudad = prompt("ingrese su ciudad de residencia");
// let  ingreso = `Se le perimte el ingreso al señor ${nombre}
//                ${apellido} de edad de ${edad} años,  proveniete de la ciudad de ${ciudad} , Muchas Gracias por venir!!! `;
// alert(ingreso);

//SweetAlert, el script se pone al final del html o sino en la terminal. por medio del npm .

// Este es un alert de Buen trabajo"!!! a penas se abre la pagina

// Swal.fire({
//     title: "Buen trabajo!",
//     text: "You clicked the button!",
//     icon: "success"
//   });

//Alert de hay un error algo salio mal, con un ancor de centro de ayuda

// Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Algo salio Mal!",
//     footer: '<a href="#">centro de ayuda</a>'
//   });

// Alert de si quieres guardar los cambios o Los cambios no nsean guardado.


// Swal.fire({
//   title: "quieres guardar los cambios??",
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: "Guardar",
//   denyButtonText: `No guardar`
// }).then((result) => {

//   /* Read more about is Confirmed, is Denied below */

//   if (result.isConfirmed) {
//     Swal.fire("Guardado!", "", "success");
//   } else if (result.isDenied) {
//     Swal.fire("Los cambios no se han guardado", "", "info");
//   }
// });

//Alert de Tu trabajo se ha guardado.

// Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Tu trabajo se ha guardado",
//     showConfirmButton: false,
//     timer: 5000 // tiempo en el que dura el cartel
//   });

//Animaciones. desaparece el alert al final.<!-- link de animaciones animar.css para que se pueda usar hay que instalar el link en el head -->

// Swal.fire({
//     title: "Se hizo con  Animate.css",
//     showClass: {
//       popup: `
//         animate__animated
//         animate__fadeInUp
//         animate__faster
//       `
//     },
//     hideClass: {
//       popup: `
//         animate__animated
//         animate__fadeOutDown
//         animate__faster
//       `
//     }
//   });

//Alertyy si queremos borrar, estas seguro que quieras borrar??, y desopues ok.

Swal.fire({
    title: "Estas seguro?",
    text: "no podras revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Borrar!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Borrado!",
        text: "Su archivo ha sido eliminado.",
        icon: "success"
      });
    }
  });