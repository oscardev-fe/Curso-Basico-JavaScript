var pregunta = prompt("juguemos piedra papel o tijera elije: "); 
var user = pregunta.toLowerCase();
var opción = ["piedra", "papel", "tijera"];
var machine = opción[Math.floor(Math.random() * 2)];




switch (true){
    case (user === machine):
        alert(user +" vs "+ machine + " "+  "empate") 
        break;
    // piedra 
    case (user === "piedra" && machine === "papel" ):
        alert(user +" vs " + machine + " "+ "perdiste")
        break;
    case (user === "piedra" && machine === "tijera" ):
        alert(user +" vs "+ machine + " "+ "ganaste")
        break;
    // tiejera
    case (user === "tijera" && machine === "piedra" ):
        alert(user +" vs "+ machine + " "+ "perdiste")
        break;
    case (user === "tijera" && machine === "papel" ):
        alert(user +" vs "+ machine + " "+  "ganaste")
        break;
    // papel 
    case (user === "papel" && machine === "tijera" ):
        alert(user +" vs "+ machine + " "+  "perdiste")
        break;
    case (user === "papel" && machine === "piedra" ):
        alert(user +" vs "+ machine + " "+ "ganaste")
        break;
    default: 
        alert("error de elección")
        break;
}