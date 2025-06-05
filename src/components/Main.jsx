import { useSearch } from "../contexts/SearchContext";

export default function Main() {
  const { movies } = useSearch();
  return (
    <>
      <div className="container">
        <div className="row">
          <ul>
            {movies.map((movie) => (
              <li>
                {movie.title},{movie.original_title}, {movie.original_language},{" "}
                {movie.vote_average}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
