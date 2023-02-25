// operadores de comparacion

const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

// palabra reserva if
// evalua una condicion
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1){
    console.log(`Pasaje disponible para viajar`);
} else {
    console.log(`Ciudad no disponible para viajar`);
}

const valorPasaje = "1000";

if (valorPasaje === 1000) {
    console.log(`El pasaje vale 1000`);
}

// operadores logicos
// Y (AND) - O (OR) - NO (NOT)
// ANDQ - && = se deben cuplir las 2 condiciones
// OR - || = se debe cuplir una condicion al menos
// NOT ! = no se cumple la condicion
let edadPasajero = 19;
let estaAcompanado = false;

console.log(`verificando pasaje para ${ciudadDestino}`);
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado))) {
    console.log(`Pasaje disponible para venta`);
} else {
    console.log(`Ciudad no disponible para viajar or pasajero no cuimple las reglas`);
}

edadPasajero = 17;
estaAcompanado = false;
// aplicando logica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18) || estaAcompanado)) {
    console.log(`Ciudad no disponible para viajar or pasajero no cuimple las reglas`);
} else {
    console.log(`Pasaje disponible para venta`);
}
