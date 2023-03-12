//find -- devuelve el valor del primer elemento del array que cumpla la funcion de prueba proporcionada
/*
  * distingue entre mayusculas y minusculas
  * si no hay coincidencia devolvera undefined
  * si hay coincidencia devolvera true o false
*/

const nombres = ["Aylin", "Roberto", "Pablo", "Diego", "Fiorella"];

const encontrandoNombre = nombres.find((nombre) => {
    return nombre === "Diego";
})

console.log(encontrandoNombre);