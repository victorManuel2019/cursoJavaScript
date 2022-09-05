//Funciones para leer elementos HTML, obtenidas desde el navegador

/* Ejercicios con imput INTERACCIÓN CON USUARIOS*/
//hacer que exista una interacción entre HTML y JS
//los de verde de lado derecho son los id de elementos en html
const input1 = document.querySelector("#datos1");
const input2 = document.querySelector("#datos2");
const btn1 = document.querySelector("#calcular");
const result1 = document.querySelector("#resultado1");
const form1 = document.querySelector("#form1");
//importante el # para los identificadores 


//addEventListener: Escucha un evento y cada vez que suceda ejecuta lo indicado
//btn1.addEventListener("click", clickbuton1);
//el primer parametro es el evento que escuchará, y el segundo es el metodo que ejecutará

//ahora con el form
form1.addEventListener("submit", sumaValores);

function sumaValores(event) {
    /*event se toma como parametro de la funcion para
    hacer fererencia al evento de la linea 19*/
    console.log({event});
    event.preventDefault();
    //esta función indica al evento que no recarge la pagina (en capturas estan las propiedades de la funcion .preventDefault)
    const sumaInputs = Number(input1.value) + Number(input2.value);
    result1.innerText = "Respuesta: " + sumaInputs; 
    //innerText es una función que muestra este codigo en html
}



