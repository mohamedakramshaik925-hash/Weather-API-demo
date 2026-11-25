
import { Search } from "lucide-react";

function SearchBar({ city, setCity, onSearch, loading }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        <Search size={18} />
        {loading ? "Searching..." : "Search"}
      </button>

    </form>
  );
}

export default SearchBar;
