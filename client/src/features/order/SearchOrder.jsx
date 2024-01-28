import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="sm:w-64 sm:focus:w-72 rounded-full px-4 py-2 text-sm transition-all focus:outline-none focus:ring-opacity-50 focus:ring-sky-500 duration-300 bg-sky-200 placeholder:text-gray-400"
        placeholder="Search with order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
