console.log(saludo());

// Funcion declarada
function saludo(){
    return "hola";
}

// Funcion expresada
const despedida = function(lenguaje){
    let mensajeDespedida;
    switch (lenguaje){
        case "es":
            mensajeDespedida = "Adios";
            break;
        case "en":
            mensajeDespedida = "Good bye";
            break;
        case "fr":
            mensajeDespedida = "Au revoir";
            break;
        default:
            mensajeDespedida = "Tienes que elegir entre es / en / fr";
    }
    return mensajeDespedida;
    
}
console.log(despedida("fr"));

