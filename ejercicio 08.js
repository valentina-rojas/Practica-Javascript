//Obtener la suma de los elementos de un array.

const a = [2, 5, 6, 1];

const suma1 = a.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  }, 0);
  
  console.log(suma1);