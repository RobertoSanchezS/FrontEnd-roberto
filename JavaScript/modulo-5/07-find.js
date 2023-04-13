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


// indexOf
// busca un elemento de mi arreglo y si existe me devuelve o retorna su posicion, en caso de no existir me devuelve un -1
let nombres2 = ["Juan","Maria","Diana","Gaby","Javky","Diego","Marcos","Danny"]
let position = nombres2.indexOf("Diana")
console.log(position)
