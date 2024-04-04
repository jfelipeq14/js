// Comentarios = // Comentario de una sola línea o /* Comentario de varias líneas */

// Variables
var nombre = "Juan"; // String
var edad = 30; // Number
var mayor = true; // Boolean
var hijos = null; // Null
var hijos; // Undefined
var fecha = new Date(); // Object
var simbolo = Symbol("mi simbolo"); // Symbol

// Arrays
var frutas = ["manzana", "pera", "uva"]; // Array

// Objetos
var fruta = {nombre: "Manzana", color: "Roja"}; // Object

// Arrays de objetos
var frutasArrayObject = [
    {nombre: "Manzana", color: "Roja"},
    {nombre: "Pera", color: "Verde"}
]; // Array de objetos

// Funciones
function miFuncion(a, b){
    return a + b;
}

// Funciones de tipo flecha
const miFuncionFlecha = (a, b) => a + b;

// Funciones de tipo flecha con un solo parámetro
const miFuncionFlechaUnParametro = a => a * 2;

// Funciones de tipo flecha sin parámetros
const miFuncionFlechaSinParametros = () => 2;

// Funciones de tipo flecha con múltiples líneas
const miFuncionFlechaMultilinea = (stringNombre, numberEdad) => {
    console.log(stringNombre);
    console.log(numberEdad);
}

// Funciones de tipo flecha con retorno de objeto y parámetros
const miFuncionFlechaObjetoParametros = (a, b) => ({nombre: a, edad: b});
