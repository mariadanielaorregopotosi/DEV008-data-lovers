/* eslint-disable no-console */
import { getData } from "./data.js";
const   peliculas = getData();
console.log (peliculas)

function mostrarPeliculas(dataset){
  const contenedor = document.getElementById("peliculas-container");
  for (let i = 0 ; i < dataset.length; i++) {
    const plantilla = `<li><img src = ${peliculas[i].poster}></img><p></p> ${peliculas[i].title} </li>`;
    contenedor.innerHTML += plantilla;


  } 

  }
 mostrarPeliculas(peliculas);


const array =["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
array.forEach(function() {
  //console.log("array",array)
})
