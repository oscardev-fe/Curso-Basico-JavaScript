//Es una regla para validar verdadero o falso
//entre parentesis la condición
//entre las llaves, la tarea si la condición es verdad
//Lo que este en la condición tiene que ser verdad para que se ejecute el if
if (true){
    console.log("Hola");
}

//Imprime hola

if (false){
    console.log("Hola");
}

//No imprime nada

//Si es falso que va a pasar, para eso se usa el ELSE
if (false){
    console.log("Hola");
}else{
    console.log("Soy falso")
}

//Validar mas de una condición
//Si es esto has esto, pero tambien podria ser esto.
//Sino es esto y esto has esto ya que es falso
var edad = 18;

if (edad === 18){
    console.log("Puedes votar");
}else if(edad > 18){
    console.log("Puedes votar, otra vez")
}else{
    console.log("no tienes edad suficiente para votar")
}

//Operador ternario
//Condición ? true : false;
var numero = 1;
var resultado = numero === 1 ? "Si soy un 1" : "No soy un 1"