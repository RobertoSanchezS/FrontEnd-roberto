// palabra const
// espacio de la memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";

console.log(nombrePasajero);
console.log(apellidoPasajero);

// palabra let
// espacio de memoria que pueda cambiar durante la ejecucion
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombrePasajero);

// palabra var
// espacio ded memoria que pueda cambiar durante la ejecucion
// alcance
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero

//Bloque
{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: "+ nombrePasajero);
    console.log("Variable con var: "+ nombreCompletoDelPasajero);
}