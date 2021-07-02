const filterFilmsByGenre = (filmsss, genre) => filmsss.filter((film) => (film.genre === genre || genre === 'All genres'));

export { filterFilmsByGenre };
