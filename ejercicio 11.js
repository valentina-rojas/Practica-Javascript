//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad.
// Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad,
//  el promedio de edad de las mujeres.


const persona = [

    {
    nombre: "juan",
    edad: 25,
    sexoBiologico: "hombre" ,
   
    },

    {
    nombre: "jorge",
    edad: 35,
    sexoBiologico: "hombre",
   
    },

    {
    nombre: "maria",
    edad: 84,
    sexoBiologico: "mujer",
   
    },
]


//promedio de las edades

let acumulador = 0

persona.map(( item) => {
    acumulador = acumulador + item.edad;
})

const promedio = acumulador/persona.length


// promedio personas de sexo femenino

persona.filter((item) => item.edad).map ((item) =>

   map((i) => {
    acumulador = acumulador + item;
  })

  






let mayor = 0

if persona.map((item) => item > item.edad && item.sexoBiologico === "mujer") {

    item = item.edad

    console.log(mujer de mayor edad) (nombre)
}







