const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");
console.log(ciudadesDisponibles);

// Definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina"];
console.log(paisesDisponibles);


    paisesDisponibles.push(`Uruguay`);
    ciudadesDisponibles.push(`Montevideo`);

    

    paisesDisponibles.unshift(`Ecuador`);
    ciudadesDisponibles.unshift(`Quito`);

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

    // mostrando el primer elemento
    console.log(ciudadesDisponibles[0]);
    console.log(paisesDisponibles[0]);

    paisesDisponibles.splice(1,2,`Venezuela`);
    console.log(paisesDisponibles);
    



