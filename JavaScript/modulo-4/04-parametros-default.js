const saludar =(nombrePersona = "persona desconocida") => `Hola ${nombrePersona}`;

console.log(saludar());

const getUserAge = (yearBirth, name = "unkown person") => {
     const currentAge = 2023 - yearBirth;
     return `Hello ${name}, your current age is ${currentAge}`;
};

console.log(getUserAge(1998));
console.log(getUserAge(1988,"Diego"));

