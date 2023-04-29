//Generar un template de un objeto para hacer nuevas instancias con un operador

//Como paramentro a la función le pondremos lo que queremos del auto
function auto(marca, modelo, annio){

    //Para este caso nuestro objeto es la función auto
    this.marca = marca; //this = al objeto, .marca = palabra clave, = marca; es la propiedad del objeto
    this.modelo = modelo;
    this.annio = annio;
}

//Generar una nueva instancia para la función / genera un objeto de otro objeto
//En el parametro se le asigna el valor de las propiedad del objeto auto
var autoNuevo = new auto("Honda", "LX", "2022")

console.log(autoNuevo)

//Se pueden crear todos los objetos que deseemos
var autoNuevo2 = new auto("Kia", "Rio", "2011")