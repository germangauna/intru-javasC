//Funciones

//Estructura de una funcion
/* 
function nombreFuncion (parametros) {

    codigo de la funcion
}

*/
//una funcion para que salude a la persona que entre en su plataforma


// function saludar() {
//     let nombre = prompt("inmgrese su nombre");
//     let mensaje = `hola ${nombre}`;
//     alert(mensaje);
// }


// saludar();


//para que no se repita codigo se usan las funciones, en lugar de repetir codigo
// solamente la llamo, si no la llamo no va aparecer. si en algun momento la quieren que la llamen
// y la tengo que invocar o     ue se ejecute, lo hace con los parentesis.

// funciones con parametros
/*
funcion nombreFuncion ( par1, par2, par3...){
        codigo a ejecutar de la funcion

}

*/ 
//funcion sumar

// function sumar(numero1, numero2) {
//     let suma = numero1 + numero2;
//     console.log(suma);
    
// }

// sumar(1, 15);

// en los parentesis donde llamo a la funcion tengo que poner el valor los paramtros 
// vamos hacerlo mas a ser dinamico


// function sumar(numero1, numero2) {
//     let suma = numero1 + numero2;
//     console.log(suma);
    
// }

// let numero1 = parseInt(prompt("ingrese el numero1"));
// let numero2 = parseInt(prompt("ingrese el numero2"));


// sumar(numero1, numero2);



//alert


// function sumar(numero1, numero2) {
//     let suma = numero1 + numero2;
//     alert(suma);
    
// }

// let numero1 = parseInt(prompt("ingrese el numero1"));
// let numero2 = parseInt(prompt("ingrese el numero2"));


// sumar(numero1, numero2);


// calculadora


// function calculadora(numero1, numero2, operacion) {
//     switch (operacion) {
//         case "+":
//             console.log(numero1 + numero2);
//             break;

//             case "-":
//                 console.log(numero1 - numero2);
//                 break; 
//             case "*":
//             console.log(numero1 * numero2);
//                 break;  

//             case "/":
//             console.log(numero1 / numero2);
//                 break;

//             default:
//                 console.log("operacion no definida");
//                 break;
//     }
// }

// calculadora(2, 4, "+"); ponemmos entre comillas xq sino no funciona al

// RETURN

// function suma(x, y) {
//     console.log(x + y);
// }

// console.log(suma(3,4));

//si le popnemos return 

// function suma(x, y) {
//     return x + y;
// }

// console.log(suma(3,4)); 

//ahgora vamos a observar en la consola que no va a aparecer el undefine.
//Si en la variable siguiente le pongo que es igual a la funcion y en esa
//  funcion le pongo valores en este caso a x , y, y luego un console.log
//   de esa variable, me va a dar el resultado de de la funcion que esta guardada.

// function suma(x, y) {
//     return x + y;
// }

// let resultado = suma(3, 5);
// console.log(resultado);

//funcion con parametro, mensaje en el return con la variable afuera de la funcion llamandola

// function carrito(nombre) {
//     return `en 5 min su hijo ${nombre} va a estar en la escuela`;

// }
//     let mensaje = carrito ("carlitos");
//     alert(mensaje);

  //  -si queremos que le pongamos un prompt lo hacemos con una variable arriba

//   function carrito(nombre) {
//     return `en 5 min su hijo ${nombre} va a estar en la escuela`;

// }
//     let nombre = prompt("ingrese el nombre")		
//     let mensaje = carrito (nombre);
//     alert(mensaje);



//Calculadora hecha con una funcion, sacandole el console.log por el return

//  function calculadora(numero1, numero2, operacion) {
//      switch (operacion) {
//          case "+":
//              return numero1 + numero2;
//              break;

//              case "-":
//                  return numero1 - numero2;
//                  break; 
//              case "*":
//              return numero1 * numero2;
//                  break;  

//              case "/":
//              return numero1 / numero2;
//                  break;

//              default:
//                  return "operacion no definida";
//                  break;
//      }
//  }

//  let resultado = calculadora(2, 6, "/"); 
//  console.log(resultado);

//segundo ejemplo, si yo al return lo pongo al final de los log, van a salir los dos mensajes, pero si lo pongo al meio sale solo uno.


// function saludar() {
//     console.log("hola");
//     console.log("chau");
//     return
// }

// saludar();

// si lo queremos hgacer mas dinamico podemos poer las variable con alert y prompt para hacer la calculadora en alert

// function calculadora(numero1, numero2, operacion) {
//          switch (operacion) {
//              case "+":
//                  return numero1 + numero2;
//                  break;
    
//                  case "-":
//                      return numero1 - numero2;
//                      break; 
//                  case "*":
//                  return numero1 * numero2;
//                      break;  
    
//                  case "/":
//                  return numero1 / numero2;
//                      break;
    
//                  default:
//                      return "operacion no definida";
//                      break;
//          }
//      }
    
//      let numero1 = parseInt(prompt("imgrese su numero"));
//      let numero2 = parseInt(prompt("imgrese su numero"));
//      let resultado = calculadora(numero1, numero2, "+"); 
//      alert(resultado);

//como hacer una funcion que me diga si el numero que ingrreso es par o impar

// function esPar(numero) {
//     let resultado;
//     if (numero % 2 === 0) {
//         resultado = "El numero es par";    
//     } else {
//         resultado = "El numero es impar"
//     }

//     return resultado;    
// }
 

// let mensaje = esPar(11);
//     console.log(mensaje);


//scole cuando y donde se reconoce la function, local dentro de las lñlaves y global fuera de las llaves o sea del bloque


// function saludar() {
//     let resultado = "hola";
    
//     return resultado;// nos da por resultado undefine
// }
 
// console.log(resultado);


// let resultado;
// function saludar() {
//      resultado = "hola";
    
//     console.log(resultado);
// }
 
// saludar();
// console.log(resultado);


//  ejmeplo
// {
//   let nombre = "pepeto";
// }

// console.log(nombre);//no  lo reconoce porque lña variable esta afuera, la reconoce en bloque

// si le ponemos var la reconoce, por eso no es recomndable, porque la reconoce a las variables fuera y si nuesatro codigo es grande te puede confuncir el resultado, no respeta los bloques

// {
//   var nombre = "pepeto";
// }

// console.log(nombre);

// con let se puede hacer este y las variables solo tienen valor en el bloque

// function sumar() {
//   let resultado = 5 + 6;
//   return resultado;

// }


// function restar() {
//   let resultado = 5 - 6;
//   return resultado;

// }

// funciones anonimas, no tieen nombre, 

// const suma = function (a,  b) { return a + b};
// const resta = function (a,  b) { return a - b};

// console.log(suma(4,5));// fun ciona normalmente



// funciones flechas => es anonima tambien pero tiene flecha se las puedes asignar a la funcion o a una variable

// let resta = (num1, num2) => {return num1 - num2;};

// console.log(resta(4,5));// funciona perectamente y si no tiene parametros no es necesario poner parentesis

// si tiene una flecha no es necesario póner el return, retorna sola


// let resta = num1 => {return num1 - num2;}; // no es necesario el parentesis si tiene solo un parametro


// console.log(resta);


// let resta = (num1, num2) => num1 - num2;

// console.log(resta(4,5));// tambien esta bien sin return ni llaves, implicito, lo tiene por detras.
// pero si le ponemos llaves si tenemos que ponerle return, solo cuando son funciones muy cortas

// /7 funciones largas si le ponemos

// let resta = (num1, num2) => {
//   kgjbfkjhsajkfs
//   lkjlksjdlkd
//   mlkjdlkjaskl
  
  
//   return num1 - num2;};

// console.log(resta(4,5));


// saludo()

// function saludo() {
//   console.log("hola");// funciona normalmente
// }


// arrown function, me va a decir que no puedo declararla y despues llamarla.

saludo()
const  saludo = () => "hola";