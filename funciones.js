//Declarativas
function miFuncion() {
    return 3;
}

//se manda a llamar
miFuncion();

//Expresion: necesita un nombre, parametro dentro de ()
var miFuncion = function(a, b) {
    return a + b;
}

//se manda a llamar
miFuncion();

//Version1
function saludar(estudiante) {
    console.log(estudiante)
}

saludar("Diego")

//Version 2
function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludar("Diego")

//Version 4
function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

sumar(1, 3)

//Version 5
function sumar(a, b) {
    return a + b;
}

sumar(3, 4)


//Funcion para saber el tipo de dato que se ingresa
function solution(valor) {
    return typeof(valor);
}

solution();