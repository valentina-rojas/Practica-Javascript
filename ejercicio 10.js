// Ingresar una palabra e identificar la letras distintas y sus repeticiones.
// Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

const fin = "computadora"


function contarLetras(palabra) {

    let CantidadLetras = {}; // objeto literal para contar letras
    
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i];
      if (CantidadLetras[letra]) {
        CantidadLetras[letra]++;
      } else {
        CantidadLetras[letra] = 1;
      }
    }
    return CantidadLetras;
  }
  
  let resultado = contarLetras(fin);
  console.log(resultado); // { P: 1, A: 2, L: 1 }
