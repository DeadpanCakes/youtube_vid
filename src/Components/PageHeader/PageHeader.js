import SearchBar from "../SearchBar/SearchBar";

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
    </header>
  );
};

export default PageHeader;
