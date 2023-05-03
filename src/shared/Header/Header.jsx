import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <h3 className='text-white d-flex items-center justify-content-center'> <a href="/">Mister Kitchen</a> </h3>
          <Nav className="mx-auto">
            <Nav.Item className='d-flex'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="features">Features</Nav.Link>
              <Nav.Link href="pricing">Pricing</Nav.Link>
            </Nav.Item>
          </Nav>
          <button className='btn btn-primary'>Login</button>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;