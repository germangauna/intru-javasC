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

function carrito(nombre) {
    return `en 5 min su hijo ${nombre} va a estar en la escuela`;

}
    let mensaje = carrito ("carlitos");
    alert(mensaje);