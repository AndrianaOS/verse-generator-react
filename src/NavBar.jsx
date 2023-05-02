import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((s) => !s);

  const handleClose = () => setShowMenu(false);

  return (
    <div>
      {!showMenu && (
        <aside className="menu">
          <button onClick={toggleMenu} className="menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </aside>
      )}
      {showMenu && (
        <nav showMenu={showMenu} className="navbar">
          <section className="btn">
            <button onClick={handleClose} className="close-btn">
              <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
            </button>
          </section>
          <section className="menu-items">
            {/* <select>
              <option value="home">
                <Link to="/" className="nav-item">
                  Home
                </Link>
              </option>
              <option>
                <Link to="/identity" className="nav-item">
                  God's Identity
                </Link>
              </option>
            </select> */}
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
            <Link to="/help" className="nav-item">
              Help
            </Link>
            <Link to="/healing" className="nav-item">
              Healing
            </Link>
            <Link to="/purpose" className="nav-item">
              Purpose
            </Link>
            <Link to="/boundaries" className="nav-item">
              Boundaries
            </Link>
            <Link to="/discipline" className="nav-item">
              Discipline
            </Link>
            <Link to="/standards" className="nav-item">
              Standards
            </Link>
            <Link to="/repentance" className="nav-item">
              Repentance
            </Link>
            <Link to="/promises" className="nav-item">
              Promises
            </Link>
            <Link to="/grace" className="nav-item">
              Grace
            </Link>
            <Link to="/freedom" className="nav-item">
              Freedom
            </Link>
            <Link to="/marriage" className="nav-item">
              Marriage
            </Link>
            <Link to="/fellowship" className="nav-item">
              Fellowship
            </Link>
            <Link to="/leadership" className="nav-item">
              Leadership
            </Link>
          </section>
        </nav>
      )}
    </div>
    // <nav className="container-fluid">
    //   Click for Verses Link
    //   <FontAwesomeIcon icon={faXmark} />

    //   {/* <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link>
    //       <Link to="/discipline" className="nav-item">
    //         Discipline
    //       </Link> */}
    // </nav>
  );
}

export default NavBar;
