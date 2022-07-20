import React from 'react'
import { CartWidget } from './CartWidget/CartWidget'
import './NavBar.css'


import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src\logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React E-commerce
          </Navbar.Brand>
          <CartWidget />
        </Container>
      </Navbar>

    /* <nav className='navbar'>
      <div>
        <a href='#' className='navbar__item'>MARCA </a>
        <a href="#" className='navbar__item'>inicio</a>
        <a href="#" className='navbar__item'>contacto</a>
        <a href="#" className='navbar__item'>nosotros</a>
      </div>
      <CartWidget />
    </nav> */
    
  )
}

export default NavBar