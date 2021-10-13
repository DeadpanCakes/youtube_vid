import SearchBar from "../SearchBar/SearchBar";
import AccountNav from "../AccountNav/AccountNav";
import style from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <header className={style.pageHeader}>
      <button>Hamburger</button>
      <h1>Logo</h1>
      <SearchBar />
      <AccountNav />
    </header>
  );
};

export default PageHeader;
