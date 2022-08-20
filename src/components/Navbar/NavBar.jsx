import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget/CartWidget";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";

const NavBar = () => {

  const {totalQuantity} = useCartContext()
  return (
    <Navbar expand="lg" fixed="top" id="navbar">
      <Container>
        <Link to="/" id="navbar-title__container">
          <Navbar.Brand id='navbar-title__title'>Shoes & Co</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link to="/categoria/shoes" id="dropdown-categories">
                <p>Jordan shoes</p>
              </Link>
              <NavDropdown.Divider />
              <Link to="/categoria/remeras" id="dropdown-categories">
                <p>T-Shirts</p>
              </Link>
            </NavDropdown>
          </Nav>
          <Link to="/cart">
            <section>
            {totalQuantity() != 0 && totalQuantity()}
            </section>
            <CartWidget />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
