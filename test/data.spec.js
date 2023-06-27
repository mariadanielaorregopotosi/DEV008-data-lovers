import {buscarPeliculas, ordenarPeliculas, filtrarPeliculas } from '../src/data.js';
  
describe('buscarPeliculas', () => {
  const peliculas = [
    { title: 'Pelicula 1', director: 'Director 1' },
    { title: 'Pelicula 2', director: 'Director 2' },
    { title: 'Otra', director: 'Director 3' },
    { title: 'Pelicula 18', director: 'Director 6' },
    { title: 'Pelicula 19', director: 'Director 7' },
    { title: 'Pelicula 20', director: 'Director 8' },
  ];

  it('debería devolver las películas que contengan el título especificado', () => {
    const resultado = buscarPeliculas(peliculas, 'Pelicula');
    expect(resultado).toEqual([
      { title: 'Pelicula 1', director: 'Director 1' },
      { title: 'Pelicula 2', director: 'Director 2' },
      { title: 'Pelicula 18', director: 'Director 6' },
      { title: 'Pelicula 19', director: 'Director 7' },
      { title: 'Pelicula 20', director: 'Director 8' },
    ]);
  });
});

describe('ordenarPeliculas', () => {
  const peliculas = [
    { title: 'Pelicula C', release_date: '2022-01-01' },
    { title: 'Pelicula B', release_date: '2020-01-01' },
    { title: 'Pelicula A', release_date: '2021-01-01' },
  ];

  const resultadosEsperados = {
    year: [
      { title: 'Pelicula B', release_date: '2020-01-01' },
      { title: 'Pelicula A', release_date: '2021-01-01' },
      { title: 'Pelicula C', release_date: '2022-01-01' },
    ],
    az: [
      { title: 'Pelicula A', release_date: '2021-01-01' },
      { title: 'Pelicula B', release_date: '2020-01-01' },
      { title: 'Pelicula C', release_date: '2022-01-01' },
    ],
    za: [
      { title: 'Pelicula C', release_date: '2022-01-01' },
      { title: 'Pelicula B', release_date: '2020-01-01' },
      { title: 'Pelicula A', release_date: '2021-01-01' },
    ],
  };

  Object.entries(resultadosEsperados).forEach(([tipoDeOrden, resultadoEsperado]) => {
    it(`debería ordenar las películas ${tipoDeOrden}`, () => {
      const resultado = ordenarPeliculas(peliculas, tipoDeOrden);
      expect(resultado).toEqual(resultadoEsperado);
    });
  });
});

describe('filtrarPeliculas', () => {
  const peliculas = [
    { title: 'Pelicula 1', director: 'Director 1' },
    { title: 'Pelicula 2', director: 'Director 2' },
    { title: 'Otra Pelicula', director: 'Director 3' },
  ];

  it('debería devolver las películas con el director especificado', () => {
    const resultado = filtrarPeliculas(peliculas, 'director 1');
    expect(resultado).toEqual(expect.arrayContaining([{title:'Pelicula 1', director: 'Director 1' }]));
  });

  it('debería devolver un array vacío si no se encuentran películas con el director especificado', () => {
    const resultado = filtrarPeliculas(peliculas, 'Director 4');
    expect(resultado).toEqual([]);
  });
});