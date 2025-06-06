import { useSearch } from "../contexts/SearchContext";
import ResultSection from "./ResultSection";

export default function Main() {
  const { movies, series } = useSearch();
  return (
    <>
      <div className="container">
        <div className="row">
          <ResultSection data={movies} sectionTitle={"Movies"} />
          <ResultSection data={series} sectionTitle={"Series"} />
        </div>
      </div>
    </>
  );
}
