const PageHeader = () => {
  return (
    <header>
      <button>Hamburger</button>
      <h1>Logo</h1>
      <form className="searchBar">
          <input></input>
          <button>Search</button>
          <button>Voice</button>
      </form>
      <nav className="accountNav">
        <button>Apps</button>
        <button>Settings</button>
        <button>Sign In</button>
      </nav>
    </header>
  );
};

export default PageHeader;
