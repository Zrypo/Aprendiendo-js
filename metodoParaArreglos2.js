/* 
    .indexOf()
    Obtenemos el primer index de un elemento.
    Si no hay elemento nos retorna -1.
*/

const nombres = ['Carlos', 'Rafael', 123, 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
//console.log(nombres.indexOf("David"));

/*
    .lastIndexOf()
    Obtenemos el último index de un elemento.
*/

//console.log(nombres.lastIndexOf("Rafael"));

/*
    forEach()
	Nos permite ejecutar una funcion por cada elemento
*/

/*nombres.forEach((nombre, index) => {
    console.log(`Hola ${nombre} (${index})`);
});*/

/*
    .find()
    Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/

/*const resultado = nombres.find((nombre) => {
    if (nombre[0] === "E"){
        return nombre;
    };
});

console.log(resultado);*/

/*
    .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en base a los resultados de esa funcion
*/

/*const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);*/

/*
    .filter()
    Nos permite ejecutar una función por cada elemento y luego crear un arreglo en base a los resultados de esa función
*/

/*
const nombres4Letras = nombres.filter((nombre) => {
    if(nombre.length === 5){
        return nombre;
    }
})
console.log(nombres4Letras)
*/

/*
    .includes()
    Nos permite saber si el arreglo contiene un elemento especificado
*/
//console.log(nombres.includes("Carlos"));

/*
    .every()
    Nos permite ejecutar un condicional sobre cada elemento y nos devulve true si TODOS los elementos cumplieron la condición
*/

/*const nombresValidos = nombres.every((nombre) => {
    if(typeof nombre === "string"){
        return true;
    } else { 
        return false;
    }
});

console.log(`¿Todos los nombres son validos? ${nombresValidos}`)*/

/*
    .some()
    Nos permite ejecutar un condicional sobre cada elemento y
    nos devuelve true si algun elemento cumplio la condición
*/

const nombresValidos = nombres.some((nombre) => {
    if(typeof nombre !== "string"){
        return true;
    } else { 
        return false;
    }
});

console.log(`¿El arreglo es invalido? ${nombresValidos}`)