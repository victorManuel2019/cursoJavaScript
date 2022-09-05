/*ARRAYS
Se les conocen como una lista de elementos
: const arrat = [true, false, limon, q, x];

Objeto: Es una lista de elementos, la cual cada uno tiene un nombre clave
 const Obj = {
    nombre: "nameBoy",
    color: "rojo",
 };

 ¿Array u Objetos? 
 cuando todo lo que se hace en un elemeto se realiza par atodos los elementos, 
 es mejor un ARRAY, ya que contiene mismas caracteristicas para todos

 En cambio, al realizar cosas diferentes como el contener un eoemento unico e importante, es mejor
 utilizar OBJETOS para contener elementos unicos.

LOS ARRAYS PUEDEN GUARDAR OBJETOS Y LOS OBJETOS PUEDEN GARDAR ARRAYS
ENTRE SUS PROPIEDADES.

*/
//EJERCICIO
function printArray1 (array1) {
    console.log(array1[0]);//imprime el elemento que se va a encontrar en la primer posicion del aaray

}
printArray1(["X","Y","Z"])
//: X

//uno por uno
arr = ["a","b","c","d"];
function imprimir(arr) {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}

//OBJETOS: Transformar un Objeto en Array
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values

const objeto = {
    nombre: "victor",
    edad: 22,
    altura: 1.78,
    lentes: true,
    sexo: "H",
    nacion: "Mexicano",
    materias: ["POO","aws"],
}
//undefined

Object.values(objeto)//dentro de los parentesis va el nombre del objeto elejido
/* 
['victor', 22, 1.78, true, 'H', 'Mexicano', Array(2)]
0: "victor"
1: 22
2: 1.78
3: true
4: "H"
5: "Mexicano"
6: (2) ['POO', 'aws']
length: 7
*/

//Ahora, para que nos devuelva uno por uno los atributos del objeto...
function printObject(objeto) {
    //aqui se consigue que los valores del objeto se conviertan en un Array (arr)
    const arr = Object.values(objeto);
    //ahora podemos crear el mismo metodo con el devido Array que contiene los valores del Objeto
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}
//--resultados en imegenes

