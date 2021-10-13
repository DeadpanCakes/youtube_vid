import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (change) => {
    setSearch(change);
  };
  return (
    <form className={style.searchBar}>
      <input
        className={style.searchInput}
        value={search}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button onClick={(e) => e.preventDefault()} className={style.searchBtn}>
        Search
      </button>
      <button onClick={(e) => e.preventDefault()} className={style.voiceBtn}>
        Voice
      </button>
    </form>
  );
};

export default SearchBar;
