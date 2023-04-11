//Sumar solo los elementos pares de un array.

const a = [ 2, 5, 6, 11];
let suma = 0;

a.map((item) => {

    if (item % 2 === 0) {
        suma = suma +item
    }

})

console.log(suma);


//filter array 

a.filter ( (item) => item % 2 == 0).map((item) => {
    suma = suma + item;
}

console.log(suma);






//acumulador

console.log (a.length);

a.map((item) => console.log(item));


let acumulador = 0;
a.map ((i) => {

    acumulador = acumulador + i;

})


