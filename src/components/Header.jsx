import { useSearch } from "../contexts/SearchContext";

export default function Header() {
  const { search, query, setQuery } = useSearch();

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setQuery(searchInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    setQuery("");
  };

  return (
    <div className="container py-4">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="rounded-1"
              type="text"
              name="query"
              value={query}
              onChange={handleSearch}
            />
            <button className="btn btn-primary">Invia</button>
          </div>
        </form>
      </div>
    </div>
  );
}
