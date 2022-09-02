import { Link } from "react-router-dom";
import { CustomizedBadges } from "./CartWidget/CartWidget";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";

const NavBar = () => {
  const { totalQuantity } = useCartContext();
  return (
    <Navbar expand="lg" fixed="top" id="navbar">
      <Container>

        <Link to="/" id="navbar-title__container">
          <Navbar.Brand><img src="./assets\logo.8bc31dcf.svg" id="navbar-logo"/> </Navbar.Brand>
          <Navbar.Brand id="navbar-title__title">Shoes & Jerseys</Navbar.Brand>
        </Link>
        <div className="display-none_cart-landscape">
          <Link to="/cart">
            <CustomizedBadges />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link to="/categoria/sneakers" id="dropdown-categories">
                <p>Sneakers</p>
              </Link>
              <NavDropdown.Divider />
              <Link to="/categoria/jerseys" id="dropdown-categories">
                <p>Jerseys</p>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="display-none_cart-portrait">
        <Link to="/cart">
          <CustomizedBadges />
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
