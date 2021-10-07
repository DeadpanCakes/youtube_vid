import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (change) => {
    setSearch(change);
  };
  return (
    <form>
      <input
        value={search}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button onClick={(e) => e.preventDefault()}>Search</button>
      <button onClick={(e) => e.preventDefault()}>Voice</button>
    </form>
  );
};

export default SearchBar;
