import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const options = [
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

function Links({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const toggleShow = () => setShow((s) => !s);

  return (
    <nav>
      <Button variant="primary" onClick={toggleShow} className="menu-btn">
        Click for Verses Link
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Verses Menu</Offcanvas.Title>
          <FontAwesomeIcon icon={faXmark} />
        </Offcanvas.Header>
        <Offcanvas.Body>
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
          <Link to="/discipline" className="nav-item">
            Discipline
          </Link>
          {/* <Link to="/discipline" className="nav-item">
            Discipline
          </Link>
          <Link to="/discipline" className="nav-item">
            Discipline
          </Link>
          <Link to="/discipline" className="nav-item">
            Discipline
          </Link>
          <Link to="/discipline" className="nav-item">
            Discipline
          </Link>
          <Link to="/discipline" className="nav-item">
            Discipline
          </Link> */}
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

function NavBar() {
  return (
    <>
      {options.map((props, idx) => (
        <Links key={idx} {...props} />
      ))}
    </>
  );
}

export default NavBar;
