/*
for (variable de control; condicion; modificacion variable de control){
    código a ejecutar 
}
*/
// i = i + 1
for (let  i = 1; i <= 5; i++){
  console.log(`El valor de i es: ${i}`);
}

for (let i = 1; i <= 12; i++) {
    let resultado = 5 * i;
    console.log(`5 * ${i} = ${resultado}`);
}

/*
  i |    condicion   | ejecucion  | incremento i
  -----------------------------------------------
  1 | 1 <= 25(true)  | si ejecuta | 1 + 1 = 2
  ----------------------------------------------
  2 | 2 <= 25(true)  | si ejecuta | 2 + 1 = 3
  ----------------------------------------------
  3 | 3 <= 25(true)  | si ejecuta | 3 + 1 = 4
  ----------------------------------------------
  ..|................|............|.............
  ----------------------------------------------
  24 |24 <= 25(true) | si ejecuta | 24 + 1 = 25
  ----------------------------------------------
  25 |25 <= 25(true) | si ejecuta | 25 + 1 = 25
  ----------------------------------------------
  26 |26 <= 25(false)| NO ejecuta | XXXXXXXXX


*/