//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.

let inicio= 5
let fin = 50


//while

let i = inicio + 1

while (i<fin) {

    if ( i % 3 == 0) {
        console.log(i);
    }
   
    i++
}


//for

let inicio2= 50
let fin2 = 100


for (let i = inicio2; i <= fin2; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }

