import { createContext, useContext, useEffect, useState } from "react";
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
      .then((res) => setMovies(res.data.results));
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
