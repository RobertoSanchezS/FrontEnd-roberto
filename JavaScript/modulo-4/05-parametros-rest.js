const sumar = (n1, n2, ...params) => {
    console.log(params);
    return n1 + n2;
}

console.log(sumar(34, 67, 2, 3, 4, "aaaa"));

const datosPersonales = (nombre, documento, ...datos) => {
    console.log(datos);
    return `Nombre: ${nombre} / Documento ${documento}`;
};

console.log (datosPersonales ("pedro", "ABC123", 32, "Argentina", 1.65));