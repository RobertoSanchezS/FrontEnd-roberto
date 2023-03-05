const mascotas = ["Koen", "Muñeca", "Azabache", "atena", "rochelle"];
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];


// console.log(meses[9]);
// console.log(meses.length);
for (let index = 0; index < meses.length; index++) {
    const mes = meses[index];
    console.log(`El mes ${mes} está en el indice ${index}`);
}

for (let mes of meses) {
    console.log(`el mes: ${mes}`);
}

for (const mascota of mascotas) {
     console.log(`Tengo una mascota que se llama ${mascota}`);     
}