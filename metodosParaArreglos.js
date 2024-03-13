const colores = ["Rojo", "Verde", "Azul"];

/*
    .lenght
    (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo
*/

console.log(colores.length);

/*
    .toString()
    Nos permite transformar un arreglo a una cadena de texto
    Por ejemplo para poder mostrarlo en el navegador
*/

//document.body.innerHTML = colores.toString();

/* 
    .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento
*/

console.log(colores.join("-"));

/*
    .sort()
    Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/

const letras = ["c", "b", "d", "a"];
console.log(letras.sort());

const numeros = ["3", "2", "4", "1"];
console.log(numeros.sort());

/*
    .reverse()
    Nos permite ordenar un arreglo de forma descendente
*/ 

console.log(letras.reverse());
console.log(numeros.reverse());

/*
    .concat()
    Nos permite juntar dos arreglos en uno solo.
*/

const arreglo1 = [1,2,3];
const arreglo2 = ["a","b","c"];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);

/*
    .push()
    Nos permite agregar un elemento al final del arreglo
*/

colores.push("Amarillo");
console.log(colores);

/*
    .pop()
    Nos permite eliminar el ultimo de los elementos de un arreglo
*/

colores.pop();
console.log(colores)

/*
    .shift()
    Elimina el primer elemento de un arreglo y recorre los elementos.
*/

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabados", "Domingos"];
//const diaEiminado = dias.shift();
//console.log(diaEiminado);
console.log(dias[0]);


/*
    .unshift()
    Agrega un elemento al inicio del arreglo y empuja los elementos.
*/

dias.unshift("Carlos");
console.log(dias);

/*
    .splice()
    Nos permite insertar elementos a un arreglo donde le especifiquemos.
    - 1er parametro - Posición donde queremos comenzar a insertar los elementos.
    - 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada
    - Resto de parametros - Los elementos a insertar.
*/

const amigos = ["Alejando", "Cesar", "Manuel"];
amigos.splice(0, 0, "Rafael", "Roberto");
console.log(amigos);

/*
    .slice()
    Nos permite copiar una parte de un arreglo a otro.
    - 1er parametro - Posición desde donde queremos copiar
    - 2do parametro - Hasta antes de que elemento copiar
*/

const frutas = ["fresa", "manzana", "guanabana", "pera", "uva", "naranja","melon"];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);