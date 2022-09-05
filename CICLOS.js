/*CICLO
Son una forma de ejcutar el codigo hasta cumplir una condición
WHILE, FOR, DO WHILE

 FOR: obliga a definir que pasa al inicio y final de cada ejecución de ciclo
for (let i=0; i<n; i++){
       1       2     3  

       1: variable y valor de la misma (que empiece en "x" valor o posición)
       2: validación (que sea ....)
       3: suma que se hay en cada vuelta hasta cumplir
}

CICLO INFINITO
Cuando la validación de los condicionales nunca se cumplen y terminan
dañando (toteando) la aplicación

*/
//Ejercicio de FOR  a   WHILE
for (let i=0; i <5; i++){
    console.log("El valor de i es: "+i);
}
//El valor de i es 0....  mismo resultado hasta que llegue a 4

//declaramos la variable
let i = 0;

while (i<5) { //ingresamos la condicional o validación
    console.log("El valor de i es: "+i);
    //agregamos el i++ para que avance de uno en uno hasta el 5, sino se haria infinito
    i++;
}
//Pro
let respuesta; 
while (respuesta != "4") {//condición ejecutable: respuesta incorrecta para ejecutar, cuando sea correcta se cansela while 
    let pregunta = prompt("¿Cuanto es 2+2?");//variable que muestra el prompt con pregunta 
    respuesta = pregunta;
    
}

