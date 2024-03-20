/*
    .toString()
*/

/*const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto)*/

/*
    .toFixed()
    Permite obtener un número con la cantidad de decimales especificados
*/

/*const numero = 3.1415;
console.log(numero.toFixed(3));*/

/*
    parseInt()
    Intenta transformar un valor a un entero
*/

/*const numero1 = parseInt(prompt("Escribe un número"));
const numero2 = parseInt(prompt("Escribe un número"));
console.log(numero1 + numero2);*/


/*
    .parseFloat()
*/

/*const numero1 = parseFloat(prompt("Escribe un número"));
const numero2 = parseFloat(prompt("Escribe un número"));
console.log(numero1 + numero2);*/

/*
    Math.random()
    Genera un número al azar entre 0 y 1
*/

/*const numero = Math.random();
console.log(numero);*/

/*
    Math.floor()
    Redondea hacia abajo un número
*/

console.log(Math.floor(19.5));

/*
    Math.ceil()
    Redondea haci arriba un número
*/

console.log(Math.ceil(19.5));

/*
    Math.round()
    Redondea al entero mas cercano
*/

console.log(Math.round(19.1));
console.log(Math.round(19.6));

/*
    Ejemplo de numero al azar de 0 a 100
*/

const numero = Math.random();
console.log(Math.floor(numero * 101));