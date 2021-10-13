import SearchBar from "../SearchBar/SearchBar";
import AccountNav from "../AccountNav/AccountNav";
import style from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <header className={style.pageHeader}>
      <span
        style={{
          flexGrow: 1,
          display: "flex",
          marginLeft: 10,
          alignItems: "center",
        }}
      >
        <button style={{ height: 40 }}>Hamburger</button>
        <h1>YouTube</h1>
      </span>
      <SearchBar />
      <AccountNav />
    </header>
  );
};

export default PageHeader;
