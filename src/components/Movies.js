import { movies } from '../data';

function Movies() {
  return (
    <>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Movies;