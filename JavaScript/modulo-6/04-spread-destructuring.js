const celularUno = {
    marca: "Samsung",
    modelo: "S22",
    precio:345,
};
// spread operator = hace una copia de las propiedades de un objeto   
const celularDos = {...celularUno};

celularDos.precio = 578;
celularDos.modelo = "A55";
celularDos.colores = ["Rojo", "Negro"];

console.log(celularUno);
console.log(celularDos);

//destructuring
// const modelo = celularDos.modelo;
const {modelo, precio: price} = celularDos;
console.log(modelo);
console.log(price);

const mascotasJavi = ["Koen", "Jacko"];

const mascotasCaro = [...mascotasJavi];
mascotasCaro.push("Muñeca");

console.log(mascotasCaro);
console.log(mascotasJavi);

// const mascotaTres = mascotasCaro[2];
const [, , mascotaTres] = mascotasCaro;
console.log(mascotaTres);