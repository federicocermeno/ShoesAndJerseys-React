import { Link } from 'react-router-dom'

import React from 'react'
import { CartWidget } from './CartWidget/CartWidget'
import './NavBar.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown}  from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" >
        <Container>
          <Link to='/'>
            <Navbar.Brand >
              <img
                alt=""
                src="src\logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React E-commerce
            </Navbar.Brand>
          </Link>
          <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <Link to='/detalle' className='link-detail'>
                <p>Jordan shoes</p>
              </Link>
              <NavDropdown.Divider />
              <Link to='/detalle' className='link-detail'>   
                  <p>T-Shirts</p>   
              </Link>
            </NavDropdown>
            <Link to='/cart'>
              <CartWidget/>
            </Link>
        </Container>
      </Navbar>
  )
}

export default NavBar