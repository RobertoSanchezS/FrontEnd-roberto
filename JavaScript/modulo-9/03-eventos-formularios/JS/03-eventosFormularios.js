const fullName = document.querySelector("#fullName");
const countries = document.querySelector("#countries");
const contactForm = document.querySelector("#contactForm");

//submit - es unico y exclusivo para el formulario tambien es para validar un formulario antes de enviarlo a un servidor
contactForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(event);
    console.log("Ok, se va a enviar la informacion a algun lugar");
} );

// focus - cuando seleccionas el elemento correspondiente (solo se puede usar para input)
fullName.addEventListener("focus", () =>{
    console.log("Hiciste foco sobre el full name");
} );

// blur - cuando seleccionas fuera del elemento correspondiente (solo es para un input)
fullName.addEventListener("blur", () =>{
    console.log("Sacaste el foco sobre el full name");
} );

// input - cuando estamos haciendo algo dentro del elemento ademas captura el valor que va cambiando en el elemento (se puede usar para el select input textArea)
fullName.addEventListener("input", (event) =>{
    console.log(event.data);
    console.log("Esto aparece cuando se escribe dentro del campo");
} );

// change - se registra cuando el usuario modifica el valor del elemento
// - cambia cuando sacamos el cursor del campo y cuando el valor a sido cambiado (se puede usar con input select textArea)
fullName.addEventListener("change", () =>{
    console.log("El valor del campo cambio");
} );

countries.addEventListener("change", () =>{
    console.log("Cambio el país");
} );
