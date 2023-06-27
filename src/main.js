<<<<<<< HEAD
import { getData, buscarPeliculas, ordenarPeliculas, filtrarPeliculas} from "./data.js";
=======
import { getData, buscarPeliculas, ordenarPeliculas } from "./data.js";
>>>>>>> 12bd721f716702f78e388f77820fc71221c36dee
const peliculas = getData();
//console.log(peliculas);

function mostrarPeliculas(dataset) {
  const contenedor = document.getElementById("peliculas-container");
  contenedor.innerHTML = "";
  for (let i = 0; i < dataset.length; i++) {
    const plantilla = `<li><img src = ${dataset[i].poster}></img><h1> ${dataset[i].title}</h1<p2>${dataset[i].director}</p2> <details>
    <summary>Historia</summary>
    <p3>${dataset[i].description}</p3>
  </details></li>`;
    contenedor.innerHTML += plantilla;
  }
}

<<<<<<< HEAD
document.addEventListener("mousemove", function (event) {
  const gif = document.getElementById("gif");
  const x = event.clientX - gif.width / 1;
  const y = event.clientY - gif.height / 1;
=======
document.addEventListener("mousemove", function(event) {
  const gif = document.getElementById("gif");
  const x = event.clientX - gif.width / 2;
  const y = event.clientY - gif.height / 2;
>>>>>>> 12bd721f716702f78e388f77820fc71221c36dee
  gif.style.left = x + "px";
  gif.style.top = y + "px";
});

<<<<<<< HEAD
=======

>>>>>>> 12bd721f716702f78e388f77820fc71221c36dee
mostrarPeliculas(peliculas);
const peliculasOrdenadas = ordenarPeliculas(peliculas, "year")
mostrarPeliculas(peliculasOrdenadas);

const peliculasOrdenadas = ordenarPeliculas(peliculas, "year")

mostrarPeliculas(peliculasOrdenadas);

function inicio() {
  const botonbusqueda = document.getElementById("buscar");
  botonbusqueda.addEventListener("click", function (evento) {
    evento.preventDefault();
    const titulo = document.getElementById("listaPeliculas").value;

    const encontrarPeliculas = buscarPeliculas(peliculas, titulo);
    mostrarPeliculas(encontrarPeliculas);
  });
}
inicio();

const selectOrdenar = document.getElementById("ordenar");
selectOrdenar.addEventListener("change", function () {
  const tipoDeOrden = document.getElementById("ordenar").value;
<<<<<<< HEAD
  
  const orden = ordenarPeliculas(peliculas, tipoDeOrden);

  mostrarPeliculas(orden);
  
});

const selectDirectores = document.getElementById("director");
selectDirectores.addEventListener("change", function () {
  const tipoDirector = document.getElementById("director").value;
  
  const directores = filtrarPeliculas(peliculas,tipoDirector);

  mostrarPeliculas(directores);
  
} );
=======
  console.log(tipoDeOrden);
  const orden = ordenarPeliculas(peliculas, tipoDeOrden);

  mostrarPeliculas(orden);
  console.log(orden);
});
>>>>>>> 12bd721f716702f78e388f77820fc71221c36dee
