import { useSearch } from "../contexts/SearchContext";

export default function Main() {
  const { movies, series } = useSearch();
  return (
    <>
      <div className="container">
        <div className="row">
          <ul>
            {movies.map((movie) => (
              <li>
                <strong>Titolo: </strong>
                {movie.title},<strong>Titolo originale: </strong>
                {movie.original_title}, <strong>Lingua originale: </strong>
                {movie.original_language},<strong>Voto: </strong>
                {movie.vote_average}
              </li>
            ))}
          </ul>
          <ul>
            {series.map((serie) => (
              <li>
                <strong>Titolo: </strong>
                {serie.name},<strong>Titolo originale: </strong>
                {serie.original_name}, <strong>Lingua originale: </strong>
                {serie.original_language},<strong>Voto: </strong>
                {serie.vote_average}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
