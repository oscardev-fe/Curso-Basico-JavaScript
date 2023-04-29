En este desafío tu función solution recibirá 3 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.

Ejemplo 1:

El array estudiantes contiene los elementos "Nico" y "Zulle". El número deathCount es igual a 0. Y el nuevo estudiante es "Santi". Al deathCount ser igual a 0, "Nico" y "Zulle" se quedan. Y agregamos "Santi" al final.

// Input
solution(["Nico", "Zule"], 0, "Santi")

// Output
["Nico", "Zule", "Santi"]

Ejemplo 2:

El array estudiantes contiene los elementos "Juan". "Juanita" y "Daniela". El número deathCount es igual a 1. Y el nuevo estudiante es "Julian". Al deathCount ser igual a 1, el último elemento del array de estudiantes ("Daniela") se debe ir. Y agregamos "Julian" al final.

// Input
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

// Output
["Juan", "Juanita", "Julian"]

Ejemplo 3:

El array estudiantes contiene los elementos "Nath". "Luisa" y "Noru". El número deathCount es igual a 2. Y el nuevo estudiante es "Cami". Al deathCount ser igual a 2, los últimos 2 elementos del array de estudiantes ("Luisa" y "Noru") se deben ir. Y agregamos "Cami" al final.

// Input
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

// Output
["Nath", "Cami"]



export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) { // creamos un ciclo ya que decaunt no es =0
      estudiantes.pop(); // la funcion .pop elimina el ultimo elemento de un arreglo
    deathCount--; // este codigo sirve para disminuir -1 al deathcount hasta que este en 0 y se cumpla la condicion de arriba(linea 2)
  }
  estudiantes.push(nuevo); // una vez deathcount es 0 el ciclo while termina , una vez deathcount es = 0 , se ejecuta este codigo , la funcion .push agrega un nuevo elemento al arreglo
  return estudiantes; // se retorna el arreglo
  }


  var estudiantes = [“Nico”, “Zule”, “deylyn”, “beatriz”];
var deathCount = 2;
var nuevo = “eilyn”;
export function solution(estudiantes, deathCount, nuevo) {
// Tu código aquí 👈
if (deathCount == 0) {
estudiantes.push(nuevo);
return estudiantes;
} else if (deathCount > 0) {
estudiantes.splice(-deathCount, deathCount);
estudiantes.push(nuevo);
return estudiantes;
}
}

solution(estudiantes, deathCount, nuevo);