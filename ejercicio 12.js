//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad.
// Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad,
//  el promedio de edad de las mujeres.

// Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.


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





function promedioEdad(persona) {

  let acumulador = 0;

  persona.map((item) => {
    acumulador = acumulador + item.edad
  });

  const promedio = acumulador / persona.length;

  return "El promedio de todas las edades es de " + promedio
}






function promedioEdadMujeres(persona) {

  let acumuladorM = 0;
  let contadorM = 0;

  persona.map((item) => {

    if (item.sexoBiologico === "mujer") {
      acumuladorM = acumuladorM + item.edad;
      contadorM++;
    }   
});

  const promedioM = acumuladorM / persona.length;

  return "El promedio de las edades de las muejres es " + promedioM
}





function hombreMenorEdad(persona) {

  HombreMenor = 9999;
  NombreHM = {};

  persona.map((item) => {

    if (item.sexoBiologico === "hombre"){

      if (item.edad < HombreMenor) {
        HombreMenor = item.edad
        NombreHM = item.nombre

      }

    }
  })
  
  return "el nombre del hombre de menor edad es " + NombreHM
}





function mujerMayorEdad(persona) {

  MujerMayor = 0;
  NombreMM = "";

  persona.filter((item) => item.sexoBiologico === "mujer").map( (item) => {

    if (item.edad > MujerMayor) {
      MujerMayor = item.edad
      NombreMM = item.nombre
    }
  })

  return "el nombre de la mujer de mayor edad es " + NombreMM
}




console.log (promedioEdad(persona))
console.log (promedioEdadMujeres(persona))
console.log (hombreMenorEdad(persona))
console.log (mujerMayorEdad(persona))