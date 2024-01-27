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
        placeholder="Search with order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchOrder;
