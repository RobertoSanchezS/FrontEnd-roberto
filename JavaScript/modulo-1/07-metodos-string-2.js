let nombreCompleto = "Aylin Santa Cruz";

// starWith empieza con la primera Letra
console.log(nombreCompleto.startsWith("a"));
console.log(nombreCompleto.startsWith("A"));

// trim podar, eliminar espacios antes y despues de una palabra o frase sin eliminar los espacios entre el string
let miMascota = "     rochelle sanchez      ";
let miMascotaSinEspacio = miMascota.trim();
console.log(miMascotaSinEspacio.length);
console.log(miMascotaSinEspacio);

// repeat - puedes repetir la palabra infinidad de veces
let nana = "Na na";
console.log(nana.repeat(5));
console.log("bataman");

//replace - reemplazar
let nombreErrado = "Huam Perez";
console.log(nombreErrado.replace("Huam", "Juan"));

//replaceAll - reemplazar todo
console.log(nombreErrado.replaceAll("e", "i"));

