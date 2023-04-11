//objetos literales
//permiten asignar mas de una propiedad por entidad
//ej nombre y edad


const persona = {
    nombre: "juan",
    edad: 25,
    telefono: 123456789,
    direccion: "calle falsa 123"
};

console.log(persona.edad);
console.log(persona.nombre);



const guiaTelefonica = [

    {
    nombre: "juan",
    edad: 25,
    telefono: 123456789,
    direccion: "calle falsa 123",
    ciudad: "rafaela",
    },

    {
    nombre: "jorge",
    edad: 35,
    telefono: 12365646,
    direccion: "calle falsa 548",
    ciudad: "sunchales",
    },

    {
    nombre: "ñoki",
    edad: 84,
    telefono: 12546654,
    direccion: "calle falsa 981",
    ciudad: "rafaela",
    },

]


guiaTelefonica.map((item) => (
    console.log (item.nombre)
)
)

guiaTelefonica.map((item) =>)