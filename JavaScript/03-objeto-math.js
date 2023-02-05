// math.random muestra numeros aleatorios decimales
let numeroRandom = Math.random();
console.log(numeroRandom);

// math.round toma un valor decimal y lo redondea a su siguiente valor entero
let precioBoletoDelTren = 3.75;
let precioBoletoDelTrenRedondo = Math.round(precioBoletoDelTren);
/*
console.log(precioBoletoDelTrenRedondo);
console.log(Math.round(6.3));
console.log(Math.round(6.4));
console.log(Math.round(6.5));
console.log(Math.round(6.6));
*/

// Math.max da la posibilidad que yo le pase varios valores, eligiendo el valor maximo
// Math.min da la posibilidad que yo le pase varios valores, eligiendo el valor minimo considerando los numeros negativos como menores
console.log(Math.max(2, 4, 56, 31, 793, 651));
console.log(Math.min(2, 4, 56, 31, 793, 651));

// Math.pow(base, exponente) devuelve la base X a la potencia del exponente Y
console.log(Math.pow(3, 2));

// devuelve el numero mas pequeño mayor o igual a X
console.log(Math.ceil(4.63));

// devuelve el numero mas grande menor o igual a X
console.log(Math.floor(4.63));