//Scope Global
var nombre = "Diego";

//Scope local
function fun() {
    var apellido = "leon";
    return nombre + " " + apellido;
}

fun();

console.log(apellido);