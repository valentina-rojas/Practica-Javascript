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

    {
    nombre: "lucia",
    edad: 59,
    sexoBiologico: "mujer",
    },

];



// promedio general de edad

let acumulador = 0

persona.map(( item) => {
    acumulador = acumulador + item.edad;
})

const promedio = acumulador/persona.length

console.log ("El promedio de todas las edades es de " + promedio)






//nombre de la mujer con mayor edad

let MujerMayor = 0;
let NombreMM = "";

persona.filter((item) => item.sexoBiologico === "mujer").map((item) => {

if  (item.edad > MujerMayor) {
    MujerMayor = item.edad
    NombreMM = item.nombre
}

})

console.log("Nombre de la mujer con mayor edad: " + NombreMM);






//nombre del hombre con menor edad

let HombreMenor = Infinity;
let NombreHM = {};

persona.filter((item) => item.sexoBiologico === "hombre").map((item) =>  {

if (item.edad < HombreMenor){
    HombreMenor = item.edad;
    NombreHM = item.nombre
}

}) 

console.log("Nombre del hombre con menor edad: " + NombreHM);





// el promedio de edad de las mujeres.

let acumulador2 = 0
let contadorM = 0


persona.filter(( item) => item.sexoBiologico === "mujer").map(( item) => {
    acumulador2 = acumulador2 + item.edad;
        contadorM++
})


const promedioM = acumulador2/contadorM

console.log ("El promedio de las edades de las mujeres es de " + promedioM)










