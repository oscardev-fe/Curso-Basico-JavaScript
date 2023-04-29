var frutas = ["Manzanas", "Platano", "Fresas"];

console.log (frutas);

//Para ver la longitud de un array, utilizamos length
console.log(frutas.length);

//como acceder al array, en progra el conteneo inica en cero no en 1. 0 1 2 3 4 etc.
console.log(frutas[0]);

//Agregar items al array. Con metodos para mutar. Push empuja un elemento al final del array
var masFrutas = frutas.push("Uvas");

//Elimina el ultimo elemento del array
var ultimo = frutas.pop("Uvas");

//Agregar un nuevo valor al inicio del array
var nuevoElemento = frutas.unshift("Inicio");

//Elimina el elemento del inicio
var borraFruta = frutas.shift("Uvas");

//Ayuda a saber la posicion de los elementos del array
var posicion = frutas.indexOf("Platano")
