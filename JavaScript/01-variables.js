// scope => es el alcance maximo que tiene un dato (variable)
// hoisting => es algo que hace referencia a la manera que este motor organiza nuestro codigo antes de ejecutarlo

var nombre = "Roberto";

{
    var nombre = "Aylin";
    
}

console.log(nombre);

let apellido = "Sanchez";
apellido = "Santa Cruz";


{
    let apellido = "Perez";
    apellido = "Gonzalez";

    console.log(apellido);
}

console.log(apellido);

const edad = 35;

{
  const edad = 12;

}

console.log(edad);

 
