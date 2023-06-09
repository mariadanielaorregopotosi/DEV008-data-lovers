import { getData, buscarPeliculas } from "./data.js";
const peliculas = getData();
//console.log(peliculas);


function mostrarPeliculas(dataset) {
  
  const contenedor = document.getElementById("peliculas-container");
  contenedor.innerHTML= "";
  for (let i = 0; i < dataset.length; i++) {
    const plantilla = `<li><img src = ${dataset[i].poster}></img><p></p> ${dataset[i].title} </li>`;
    contenedor.innerHTML += plantilla;

     }
   
}

mostrarPeliculas(peliculas);

function inicio() {
  const botonbusqueda = document.getElementById("buscar");
  botonbusqueda.addEventListener("click", function (evento) {
    evento.preventDefault();
    const titulo = document.getElementById("listaPeliculas").value;

    const encontrarPeliculas = buscarPeliculas(peliculas,titulo);
    mostrarPeliculas(encontrarPeliculas);
  });
}
inicio();

function ordenarPeliculas(){

}


mostrarPeliculas(peliculas);

