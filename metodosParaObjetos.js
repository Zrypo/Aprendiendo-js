const usuario = {
    nombre: "Carlos",
    edad: 27,
    amigos: ["Alejandro", "Cesar", "Manuel"],
    saludo: () =>{
        console.log("Hola");
    },
};

/*
    Métodos propios
    Los objetos pueden tener métodos personalizados.
*/

usuario.saludo();

/*
    Object.keys()
    Nos devuelve un arreglo con las llaves (keys) del objeto.
*/

/*const resultados = Object.keys(usuario);
console.log(resultados);*/

/*
    Object.values()
    Nos devuelve un arreglo con los valores (values) del objeto
*/

/*const resultados2 = Object.values(usuario);
console.log(resultados2);*/

/*
    Object.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto
*/

const resultados = Object.entries(usuario);

console.log(resultados);
