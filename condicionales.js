/*Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna 
condicion o validacion */

// if, else, elseif, switch
/*
El condicional if (con else y elseif) nos permite hacer alidaciones completamente
distintas si asi se quiere en cada validación condicional.
En el SWITCH todos los casos se COMPARAN con la misma variable o condición definida en el SWITCH
 */

//Combinación de funciones y condicionales
/*
Las fucniones encampsulan cualquier bloque de codigo, incluyendo condicionales
 */

/////////// EJECICIO SWITCH

const tipoSubscripcion = prompt();


    switch (tipoSubscripcion) {
        case "Basic":
            console.log("Solo tienes cursos gratis");
            break;
        case "Expert":
            console.log("Acceso a todos los cursos");
            break;
        case "ExpertDuo":
            console.log("Acceso a todos los cursos para ti y otra persona");
            break;    
        default:
            console.log("Plan no valido");
            break;
    }

//////////// EJERCICIO IF

if (tipoSubscripcion == "Free") {
    console.log("Acceso unicamente a cursos gratis");
}else{
    console.log("No valido");
}

//Como hacer un break en un IF con function
function name(params) {
    if (tipoSubscripcion == "Free") {
        console.log("Acceso unicamente a cursos gratis");
        return;
        //Si se cumple la condicional del IF, return termina la función hasta ahi

    }else{
        console.log("No valido");
    }
    // ....
}


if (tipoSubscripcion == "Free") {
    console.log("Acceso unicamente a cursos gratis");

}else if(tipoSubscripcion == "Basic"){
    console.log("Acceso a cursos basicos");

} else if(tipoSubscripcion == "Expert"){
    console.log("Acceso a todos los cursos");

}else{
    console.log("No valido");
}

///////////  EJERCICIO EXTRA  ////////
/* Crear un codigo creado con condicionales para su ejecución
pero sin utilizar ELSE ni ELSE IF 
Recordar el uso del Return con condicionales
*/

function nivelDificult (dificultad) {
    if (dificultad == "Informal") {
        console.log("Hordas 1-10: "+ dificultad);
        return;
    }
    if (dificultad == "Normal") {
        console.log("Hordas 11-20: "+ dificultad);
        return;
    }
    if (dificultad == "Elevada") {
        console.log("Hordas 21-30: "+ dificultad);
        return;
    }
    if (dificultad == "Locura") {
        console.log("Hordas 31-50: "+ dificultad);
        return;
    }
    //console.warn: nos manda mensajes de alerta en la ejecución del codigo con su respectivo mensaje
    console.warn("La dificultad "+dificultad+ "no existe");

}

///////////  EJERCICIO EXTRA  ////////
/* Recrear el codigo anterior ya realizado, con la condicion de que solamente
se pueda utilizar solo un IF, se pueden incluir ARRAY o OBJETO
*/
//creamos un objeto con los niveles
const nivelesTipo ={
    informal: "Hordas 1-10",
    normal: "Hordas 11-20",
    elevada: "Hordas 21-30",
    locura: "Hordas 31-50",
}
//Creamos una function para que ejecute un solo condicional
//Recordar que el parametro de la función es lo que nosotros introducimos
function nivel (dificultad) {  //el parametro es el nivel que nosotros vamos a validar (introducir)
    if (nivelesTipo[dificultad]) {//si el nivel introducido (parametro) coincide en el objeto (nivelesTipo), pasamos al console....
        console.log(nivelesTipo[dificultad]);
        return;
    }
    console.warn("La dificultad "+dificultad+" no existe");
}



