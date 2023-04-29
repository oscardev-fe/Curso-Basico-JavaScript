var miAuto = {
    //Propiedades y valores

    //Palabra clave, los strings deben ir entre comillas
    marca: "Toyota",
    modelo: "Corolla",
    //Cuando se llega al ultimo objeto no se coloca ",", se coloca annio porque no se acepta la ñ
    annio: 2020
};

console.log(miAuto) //Trae todos los objetos

//Traer un objeto especifico
console.log(miAuto.marca)


//Los objetos tienen metodos 
var miAuto = {
    //Propiedades y valores

    //Palabra clave, los strings deben ir entre comillas
    marca: "Toyota",
    modelo: "Corolla",
    //Cuando se llega al ultimo objeto no se coloca ",", se coloca annio porque no se acepta la ñ
    annio: 2020,

    //Metodo
    detalleDelAuto: function(){
        
        //this es una variable que hace referencia al objeto y con el punto le decimos que vamos queremos, es como poner miAuto.modelo
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//Como su valor es una función se manda a llamar como tal, con los dos parectesis
miAuto.detalleDelAuto()