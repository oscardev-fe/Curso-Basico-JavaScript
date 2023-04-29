var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

//Mientras lo que este dentro de los parentesis sea verdad, la condición va a estar pasando
//Mientras la variable estudiantes sea mayor a 0 el while va a pasar
while(estudiantes.length > 0){
    console.log(estudiantes)
    //Cada vez que se cumpla un loop, Shift va a sacar un elemento del array
    //El ciclo se rompe cuando el valor de estudiantes es menor a cero
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}