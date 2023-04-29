//
4 + "7"; //47
4 * "7"; //28
2 + true; //3
false - 3; //-3

//Implicita, cuando el lenguaje nos ayuda y cambia un tipo de valor de numero a string y viceversa
var a = 4 + "7"; //Aca realiza una concatenación
typeof a;


var b = 4 * "7";
typeof b; //Supone que no querimaos un string sino un numero

//Explicita, nosotros lo obligamos para que sea de otro tipo
var c = 1
var d = a + ""

typeof d;

var e = String(c);
typeof e;

//Con este metodo se obliga a convertirlo a otro valor
var f = Number(e);
typeof f;

//Cuando se mete info en un input se debe hacer eso para manejar los datos como un numero o string