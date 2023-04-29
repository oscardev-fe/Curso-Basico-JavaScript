//algo que se repite sin que lo tengamos que hacer manual, mientras sea verdad va a seguir pasando la tarea hasta que sea falso y se rompa
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

//Tarea a realizar, Saludar a cada uno de los estudiantes
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//Loop, la var puede ser cualquiera pero de forma sitaxica se usa la i
//Se genera una variable con valor 0 y le dice que mientas i sea menor a la longitud de estudiantes, entonces i++ incrementa un numero
for(var i = 0; i < estudiantes.length; i++){
    //Se manda a llamar al array en la posición del index de i, como i vale 0 tendrá que regresar 0 y 0 es Maria
    
    saludarEstudiantes(estudiantes[i]);
}

//Explicación
//var es = 0, 0 es menor a 4?, si es verdad, entonces entra la función Saludar en la posición 0
//Para la siguiente vuelta del ciclo el i++ va hacer que var i ya no sea = 0 sino que le aumenta 1
// i = 1 es menor que la longitud del array (4), si, se cumple la condición
//Entra la tarea y como la i ya no vale 0 no trae a Maria sino a Sergio que tiene la posición 1 en el array
//Sigue el ciclo hasta que i sea igual o mayor a la longitud de nuestro array
//Cuando i valga 4 se rompera el loop por que no sera true sino false la condición y ya no trae nada

//Opción 2
//Se manda a llamar al estidiante del array estudiantes
for(var estudiante of estudiantes){
    //se manda a llamar a la función
    saludarEstudiantes(estudiante);
    //Esto hace que el ciclo tenga que ir por cada elemento / Estudiante del array
}

//Explicación
//En el array estudiantes se esta hablando en plural
//Y en el parametro en forma singular y se va a convertir en el index y se manda a llamar en el parametro al index (estudiante) y se convierte en 0

