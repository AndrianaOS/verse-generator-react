import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/identity" className="nav-item">
        God's Identity
      </Link>
      {/* <Link to="/quotes/search" className="nav-item">
            Search Quotes
          </Link> */}
    </nav>
  );
}

export default NavBar;
