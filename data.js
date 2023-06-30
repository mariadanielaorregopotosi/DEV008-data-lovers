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

  return peliculasEncontradas;
}

export function ordenarPeliculas(peliculas, tipoDeOrden) {
  if (tipoDeOrden === "year") {
    peliculas.sort(function (a, b) {
      const parametroa = a.release_date.toLowerCase();
      const parametrob = b.release_date.toLowerCase();

      if (parametroa === parametrob) {
        return 0;
      }
      if (parametroa < parametrob) {
        return -1;
      }
      return 1;
    });
  }
  if (tipoDeOrden === "az") {
    peliculas.sort(function (a, b) {
      const parametroa = a.title.toLowerCase();
      const parametrob = b.title.toLowerCase();

      if (parametroa === parametrob) {
        return 0;
      }
      if (parametroa < parametrob) {
        return -1;
      }
      return 1;
    });
  }
  if (tipoDeOrden === "za") {
    peliculas.sort(function (a, b) {
      const parametroa = a.title.toLowerCase();
      const parametrob = b.title.toLowerCase();

      if (parametroa === parametrob) {
        return 0;
      }
      if (parametroa > parametrob) {
        return -1;
      }
      return 1;
    });
  }
  return peliculas;
}
export function filtrarPeliculas(peliculas, tipoFiltrado) {

  return peliculas.filter(
    (pelicula) => pelicula.director.toLowerCase() === tipoFiltrado
  );
}
