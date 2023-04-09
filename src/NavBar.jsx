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
      <Link to="/covenant" className="nav-item">
        Covenant
      </Link>
      <Link to="/deliverance" className="nav-item">
        Deliverance
      </Link>
      <Link to="/salvation" className="nav-item">
        Salvation
      </Link>
      <Link to="/transformation" className="nav-item">
        Transformation
      </Link>
      <Link to="/blessings" className="nav-item">
        Blessings
      </Link>
      <Link to="/ministry" className="nav-item">
        Ministry
      </Link>
      <Link to="/governance" className="nav-item">
        Govern Our Bodies
      </Link>
    </nav>
  );
}

export default NavBar;
