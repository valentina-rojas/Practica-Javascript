//determinar el numro mas grande dentro de un array.

const a = [ 2, 5, 6, 11];



let mayor = 0;

a.map((item) => {
  if (item > mayor) {
    mayor = item;
  }
});
console.log("el mayor es: " + mayor);
