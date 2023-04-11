//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.

const n1= 2
const n2 = 30

let i = n1 + 1

while (i<n2) {

    if ( i % 3 === 0) {
        console.log (i)
    }
   
    i++
}

