const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true,
    },
    coloresFavoritos: ['Negro','Rojo'],
    saludo: function () {
        alert('Hola!');
    },
};

//console.log(persona.nombre);

const variable = "suscripciones";

persona.saludo();