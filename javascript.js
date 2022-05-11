//POR CONSOLA 

let input = [
  {
    nombre: "Pedro",
    edad: 20,
    ciudad: "Córdoba"

  },
  {
    nombre: "Paricia",
    edad: 22,
    ciudad: "Córdoba"
  },
  {
    nombre: "José",
    edad: 23,
    ciudad: "Mendoza"
  },
  {
    nombre: "María",
    edad: 20,
    ciudad: "Córdoba"
  },
  {
    nombre: "Juan",
    edad: 20,
    ciudad: "Córdoba"
  },
  {
    nombre: "Cna",
    edad: 22,
    ciudad: "Córdoba"
  },
  {
    nombre: "Bna",
    edad: 22,
    ciudad: "Córdoba"
  },
  {
    nombre: "Ana",
    edad: 22,
    ciudad: "Córdoba"
  },
];
let copia = JSON.parse(JSON.stringify(input)) // Creo una copia profunda del array de objetos
let ordenador = copia.filter(ubicacion => ubicacion.ciudad == "Córdoba").sort((a, b) => {
  if (a.edad < b.edad) {
    return -1;
  }
  if (a.edad > b.edad) {
    return 1;
  }
  if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
    return -1;
  }
  if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
    return 1;
  }
  return 0;
});
console.log("Lista ordenada",ordenador);




// FORMULARIO
 const forma = document.getElementById("forma")


const forma2 =document.getElementById("forma3")

const boton1 = document.getElementById("boton").addEventListener('click',function(event){
  event.preventDefault()
  forma.classList.toggle('active')
  forma2.classList.add('ver')

})
const boton2 = document.getElementById('boton2').addEventListener('click',function(){
  alert("Gracias por completar la encuesta - Sera dirigido al inicio")
})





