// const todosLosParrafos = document.getElementsByTagName ("p")
// console.log(todosLosParrafos)

// const todoLoVerde = document.getElementsByClassName("verde")
// console.log(todoLoVerde)

// const primerBordeRojo = document.querySelector("#borde-rojo")

// console.log(primerBordeRojo)


const quitarVerde = document.querySelector(".verde")

quitarVerde.classList.remove("verde")

console.log(quitarVerde)


const agregarRosaARojo = document.querySelector(".rojo")

agregarRosaARojo.classList.add("rosa")

console.log(agregarRosaARojo)

const darToggleARosa = document.querySelector(".rosa")

darToggleARosa.classList.toggle("rosa")

console.log(darToggleARosa)

const parrafoAmarillo = document.querySelector(".amarillo")

console.log(parrafoAmarillo.classList.contains("amarillo"))
