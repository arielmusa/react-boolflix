import { createContext, useContext, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_HOST;
const apiKey = import.meta.env.VITE_API_KEY;

const getResults = createContext();

function SearchProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("");

  const search = () => {
    axios
      .get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`)
      .then((res) => {
        const data = res.data.results.map((movie) => ({
          id: movie.id,
          poster: movie.poster_path,
          title: movie.title,
          original_title: movie.original_title,
          language: movie.original_language,
          vote: Math.ceil(Math.ceil(movie.vote_average) / 2),
        }));
        setMovies(data);
      });
    axios
      .get(`${apiUrl}/search/tv?api_key=${apiKey}&query=${query}`)
      .then((res) => {
        const data = res.data.results.map((serie) => ({
          id: serie.id,
          poster: serie.poster_path,
          title: serie.name,
          original_title: serie.original_name,
          language: serie.original_language,
          vote: Math.ceil(Math.ceil(serie.vote_average) / 2),
        }));
        setSeries(data);
      });
  };

  const searchData = {
    movies,
    series,
    search,
    query,
    setQuery,
  };
  return (
    <getResults.Provider value={searchData}>{children}</getResults.Provider>
  );
}

function useSearch() {
  return useContext(getResults);
}

export { SearchProvider, useSearch };
