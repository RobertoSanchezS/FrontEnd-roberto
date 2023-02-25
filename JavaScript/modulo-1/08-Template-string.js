// concatenacion 
let nombre = "Roberto";
let apellido = "Sanchez";
let nombreCompleto = nombre + " " + apellido;
let edad = "24";
let intereses = "JavaScript, HTML, CSS"
console.log(nombreCompleto);

let saludo = "Hola mi Nombre es " + nombreCompleto + " y Tengo " + edad + " años y me Gusta " + intereses;

// formato template String  se usa " `` " las comillas dobladas y para indicar al sistema de la variable debes colocarlo en llaves " {} " y adelante el signo " $ " a esto se le llama Interpolación
 let saludos = `Hola mi Nombre es ${nombreCompleto}, tengo ${edad} años y me gusta ${intereses}`;
console.log(saludos);
