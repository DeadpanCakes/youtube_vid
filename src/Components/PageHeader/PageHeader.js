import SearchBar from "../SearchBar/SearchBar";
import AccountNav from "../AccountNav/AccountNav";

const PageHeader = () => {
  return (
    <header>
      <button>Hamburger</button>
      <h1>Logo</h1>
      <SearchBar />
      <AccountNav />
    </header>
  );
};

export default PageHeader;
