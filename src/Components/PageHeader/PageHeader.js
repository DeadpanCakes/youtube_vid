import SearchBar from "../SearchBar/SearchBar";
import AccountNav from "../AccountNav/AccountNav";

const PageHeader = () => {
  return (
    <header>
      <button>Hamburger</button>
      <h1>Logo</h1>
      <SearchBar />
      <nav className="accountNav">
        <button>Apps</button>
        <button>Settings</button>
        <button>Sign In</button>
      </nav>
      <AccountNav />
    </header>
  );
};

export default PageHeader;
