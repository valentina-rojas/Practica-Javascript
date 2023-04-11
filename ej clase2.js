//sumar menores a 15 y mayores a 20

let a = [10, 8, 4, 15, 21, 18, 19]
let suma = 0



a.filter ((item) =>  item >= 15 && item <= 20).map((item) => {

    suma = suma + item;

})

console.log (suma);



