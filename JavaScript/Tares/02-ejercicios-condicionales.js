// EJERCICIO 1
/**
 * Año bisiesto
    1. Si es que es divisible entre 4, que su residuo sea 0 es bisiesto

    2. Si es que es divisible entre 100 y tiene residuo 0, no es bisiesto.

    3. Si es que el año es divisible entre 400 y tiene residuo 0, es bisiesto
 */


    const anhoBisiesto = 2016;

    if ((anhoBisiesto % 4 == 0) && ((anhoBisiesto % 100 != 0) || (anhoBisiesto % 400 == 0)))
       console.log("El año es bisiesto");
    else
       console.log("El año no es bisiesto");










// Ejercicio 2
// Una sastreria tiene una promoción, a todos los trajes que cuesten más que S/800 se les aplicará un descuento del 15%, en caso de ser menor que S/800 solamente se les aplicará un descuento del 8%, cree el código necesario para preguntar al cliente cuanto es el precio original de su traje y según eso darle el precio final

/**
 * 1. que datos necesito
 * 2. como los obtengo
 * 3. tengoque hacer algún cambio a esos datos, convertirlo a un número 
 * 4. hay que evaluar el número y segun eso restarle el porcentaje indicado
 * 5. para obtener el precio final puedo multiplicarlo por el porcentaje en decimales
 * ej . 0.95 =>95%
 */











/**
 * Ejercicio 3
 * Escribs un programa que responda a un usuario que quiere comprar un helado, asu helado le puede agregar toppimgs, añadidos
 * el topping solo cuesta:5.00
 * el topping de oreo cuesta:1.50
 * el topping de sublime cuesta : 2.50
 * el topping de chispitas cuesta : 0.50
 * el topping de aguaymanto cuesta : 4.00
 * el topping de ositos cuesta : 3.50
 * 
 * Se tiene que elegir solo 1 topping
 * pregunta por opciones ej. : Ingrese 1 para elegir el topping 1 de oreo
 * El precio final con topping incluido
 */















/**Ejercicio 4
 * Un catering ofrece sus servicios para eventos y tonos, el costo base de c/platillo es de S/90
 * Pero si el numero de personas es mayor a 300 cobrara S/75, si es mayor a 200 pero menor a 300 sera S/85 y si es mayor a 100 pero menor a 200 cuesta S/88
 * cree un algoritmo qu eacepte la cantidad de personas/platillos y muestre el precio final.
 */






















/**Ejercicio 5 */

// let nro1 = 45;
// let nro2 = 10;
// let nro3 = 90;

// Necistamos saber cual de estos es el numero mayor
















/**Ejercicio 6
 * un supermercado compra uva para vender el kilo de uva lo compra a 5 soles
 * para venderla la divide en 02 tamaños 1 y 2
 * pero tambien la divide en 02 tipos tipo a y b
 * Considerando:
 * Si es de tipo A pero de tamaño 1 se le adicionara 0.20 a su precio de venta
 * Si es de tipo A pero de tamaño 2 se le adicionara 0.30 a su precio de venta
 * Si es de tipo B pero de tamaño 1 se le adicionara 0.35 a su precio de venta
 * Si es de tipo B pero de tamaño 2 se le adicionara 0.50 a su precio de venta
 * calcule el precio de venta considerando el tipo, el tamaño y la cantidad de kilos
 * Intenten utilizar if anidados
 */