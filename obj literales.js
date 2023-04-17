//objetos literales
//permiten asignar mas de una propiedad por entidad
//ej nombre y edad



const persona1 = {
    nombre: "Juan",
    edad: 25,
    telefono: 123456789,
    direccion: "calle falsa 123",
  };
  
  const persona2 = {
    nombre: "Juan",
    edad: 25,
    telefono: 123456789,
    direccion: "calle falsa 123",
  };
  
  const personas = [persona1, persona2];
  
  //console.log(persona.edad);
  //console.log(persona.nombre);
  
  const guiaTelefonica = [
    {
      nombre: "Juan",
      telefono: 123456789,
      direccion: "calle falsa 123",
      ciudad: "Rafaela",
    },
    {
      nombre: "Pedro",
      telefono: 987654321,
      direccion: "calle falsa 456",
      ciudad: "Rafaela",
    },
    {
      nombre: "Maria",
      telefono: 123456789,
      direccion: "calle falsa 789",
      ciudad: "Sunchales",
    },
  ];
  
  guiaTelefonica.map((item) => {
    if (item.ciudad == "Rafaela") {
      console.log(item.nombre);
    }
  });
  
  //console.log(guiaTelefonica.filter((item) => item.ciudad == "Rafaela"));
  guiaTelefonica
    .filter((item) => item.ciudad == "Rafaela")
    .map((item) => {
      console.log(item.nombre);
    });
  
  //Crear un objeto literal con las siguiente propiedades:
  //nombre, sexo biológico y edad.
  // Obtener el promedio de edad,
  // el nombre de la mujer con mayor edad,
  // el nombre del hombre con menor edad,
  // el promedio de edad de las mujeres.
  
  const gente = [
    {
      nombre: "Juan",
      sexo: "M",
      edad: 25,
    },
    {
      nombre: "Pedro",
      sexo: "M",
      edad: 30,
    },
    {
      nombre: "Maria",
      sexo: "F",
      edad: 20,
    },
  ];
  
  // Obtener el promedio de edad,
  let acumulador = 0;
  let acumuladorF = 0;
  gente.map((item) => {
    acumulador = acumulador + item.edad;
    if (item.sexo == "F") {
      acumuladorF = acumuladorF + item.edad;
    }
  });
  console.log("La suma es " + acumulador);
  const promedio = acumulador / gente.length;
  console.log("El promedio es " + promedio);
  
  const promedioF = acumuladorF / gente.filter((item) => item.sexo == "F").length;
  console.log("El promedio de mujeres es " + promedioF);