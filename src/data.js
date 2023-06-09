// importa data de ghibli.js//
import ghibli from "./data/ghibli/ghibli.js";
//se crea const=getData
export const getData = () => {
  return ghibli.films;
};

export function buscarPeliculas(pelis, titulo) {
  const peliculasEncontradas = pelis.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(titulo.toLowerCase())
  );

  console.log(peliculasEncontradas);

  return peliculasEncontradas;
}
