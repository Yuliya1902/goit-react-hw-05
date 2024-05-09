import MovieItem from "./movie-item/MovieItem";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies &&
        movies.map((movie) => <MovieItem key={movie.id} item={movie} />)}
    </ul>
  );
};

export default MovieList;