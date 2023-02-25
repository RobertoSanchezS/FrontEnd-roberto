// 1. crear la función


function saludar() {
    return "¡Hola qué tal!";
}

// 2. Ejecutar la funcion (llamar / invocar)
const mensajeSaludo =saludar();
console.log(mensajeSaludo);

function saludarVersion2(nombreDeLaPersona){
    let mensaje;
    if (nombreDeLaPersona === undefined){
       mensaje = `Hola persona Desconocida`;
    } else {
        mensaje = `Hola ${nombreDeLaPersona}`;
    }
  return mensaje; 
  
}
const saludoUno = saludarVersion2("roberto");
console.log(saludoUno);
const saludoDos = saludarVersion2();
console.log(saludoDos);

