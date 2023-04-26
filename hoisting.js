//Cuando se manda a llamara una variable sin declararla e inicializarla.

//Declarar variable
var miNombre;
//Inicializar variable
miNombre = "Oscar"

var miAppelido = undefined;
console.log(miAppelido + "Soy ese hoisting");

miAppelido = "Leon"

//Ejemplo con funciones
hey()

function hey(){
    console.log("Hola " + miAppelido2)
}

miAppelido2 = "Leon"