let nombre = "Victor";
let apellido = "Vazquez";
let username = "VcitorVR";
let edad = 22;
let mail = "victoruaemqgmai.com"
let mayorEdad = true;
let dineroAhorrado = 900; 
let deudas = 0;

/*
Las funciones noms permiten encapsular bloques de cogido para resultarlos y
ejecutarlos en el futuro 

Las funciones nos sirven al tener variables o bloques de codigo parecidos
(con cambios que pueden ser parametros o argumentos) que encapsulamos para reutilizarlo 
cuando sea cuantas veces sea
*/

//los parametros estan dentro de los parentesis
function nombreComp (nombre, apellido){
    return nombre+" "+apellido;
}
//se ejecuta la función hasta que se lo solicitemos con "nombreComp()"

///PARAMETROS Y ARGUMENTOS///
/*En una función,  las funciones reciben parametros al crearlas y les enviamos  
argumentos cuando las ejecutamos*/

/*Convertir lo siguente en una función pero cambando las variables constantes (CONST) 
cunado sea necesario por parametros y argumentos*/

const namee = "Victor Manuel";
const lastName = "Vazquez Ramirez";
const nameCompl = namee + lastName;
const nickname = "VcitorVR";

console.log("Mi nombre es: "+nameCompl+"pero puedes llamarme "+nickname+".");

function nombreComp (namee, lastName){
    return namee+" "+lastName;
}

function saludo(namee,lastName) {
    //name y lastName ya se borran porque ahora estan en los parametros y definidos tambien
    //aqui se manda a llamar la funcion anterior dentro de la función actual para el trabajo de completeName
    const nameCompl = nombreComp(namee,lastName);
    const nickname = "VcitorVR";
}
//Mi nombre es: Manuel Vazquez, pero puedes llamarme Manuelito.

