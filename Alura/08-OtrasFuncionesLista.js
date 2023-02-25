// definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
// console.log(ciudadesDisponibles);

// definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina","Uruguay","Venezuela"];

const cantidadCIudades = ciudadesDisponibles.length;

console.log(` En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(` En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

// remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

// remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

// filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e.lentgh > 6);
console.log(paisesFiltrados);

// unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join(`-`));

// ordenar la lista
console.log(paisesDisponibles.sort());

// conociendo la posicion
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf(`peru`)}`);

// unificar dos listas
const listaPaisesCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(`Lista de paises y ciudades`);
console.log(listaPaisesCiudades);
console.log(`Lista de paises`);
console.log(paisesDisponibles);
