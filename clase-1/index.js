
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

// Swal.fire({
//     title: "Estas seguro?",
//     text: "no podras revertir esto!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Si, Borrar!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Borrado!",
//         text: "Su archivo ha sido eliminado.",
//         icon: "success"
//       });
//     }
//   });

//Modal con una imagen, mensaje y la imagen cambia segun la pagina en la cual le ponmemos, podemos cambiar la pagina.


// Swal.fire({
//     title: "Hasta luego",
//     text: "modal copm imagen.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image"
//   });

// Un mensaje con ancho, relleno, fondo personalizado y Nyan Cat animado

// Swal.fire({
//     title: "Custom width, padding, color, background.",
//     width: 600,
//     padding: "3em",
//     color: "#716add",
//     background: "#fff url(/images/trees.png)",
//     backdrop: `
//       rgba(0,0,123,0.4)
//       url("/images/nyan-cat.gif")
//       left top
//       no-repeat
//     `
//   });

//aleta con ciere automatico con cuanta regresiva, tiene un error en la conmsola.




// let timerInterval;
// Swal.fire({
//   title: "Alerta de cierre automatico!",
//   html: "Se cerrara en los proxs segundos.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */

//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log("I was closed by the timer");
//   }
// });

//enviar el usuario de git hub

// Swal.fire({
//     title: "Submit your Github username",
//     input: "text",
//     inputAttributes: {
//       autocapitalize: "off"
//     },
//     showCancelButton: true,
//     confirmButtonText: "Look up",
//     showLoaderOnConfirm: true,
//     preConfirm: async (login) => {
//       try {
//         const githubUrl = `
//           https://api.github.com/users/${login}
//         `;
//         const response = await fetch(githubUrl);
//         if (!response.ok) {
//           return Swal.showValidationMessage(`
//             ${JSON.stringify(await response.json())}
//           `);
//         }
//         return response.json();
//       } catch (error) {
//         Swal.showValidationMessage(`
//           Request failed: ${error}
//         `);
//       }
//     },
//     allowOutsideClick: () => !Swal.isLoading()
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: `${result.value.login}'s avatar`,
//         imageUrl: result.value.avatar_url
//       });
//     }
//   });

//alert de iniciando sesion con temporizador y barra con el tilde de ok-


// const Toast = Swal.mixin({
//     toast: true,
//     position: "top-center",
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.onmouseenter = Swal.stopTimer;
//       toast.onmouseleave = Swal.resumeTimer;
//     }
//   });
//   Toast.fire({
//     icon: "success",
//     title: "Iniciando sesion!!"
//   });

// Ingreso con creador de ip

// const ipAPI = "//api.ipify.org?format=json";
// const response = await fetch(ipAPI);
// const data = await response.json();
// const inputValue = data.ip;
// const { value: ipAddress } = await Swal.fire({
//   title: "Enter your IP address",
//   input: "text",
//   inputLabel: "Your IP address",
//   inputValue,
//   showCancelButton: true,
//   inputValidator: (value) => {
//     if (!value) {
//       return "You need to write something!";
//     }
//   }
// });
// if (ipAddress) {
//   Swal.fire(`Your IP address is ${ipAddress}`);
// }

//ingreso com imal

// const { value: email } = await Swal.fire({
//     title: "Input email address",
//     input: "email",
//     inputLabel: "Your email address",
//     inputPlaceholder: "Enter your email address"
//   });
//   if (email) {
//     Swal.fire(`Entered email: ${email}`);
//   }

// Estoy de acuerdo con terminos y condiciones

const { value: accept } = await Swal.fire({
    title: "Terms and conditions",
    input: "checkbox",
    inputValue: 1,
    inputPlaceholder: `
      I agree with the terms and conditions
    `,
    confirmButtonText: `
      Continue&nbsp;<i class="fa fa-arrow-right"></i>
    `,
    inputValidator: (result) => {
      return !result && "You need to agree with T&C";
    }
  });
  if (accept) {
    Swal.fire("You agreed with T&C :)");
  }