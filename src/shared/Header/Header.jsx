import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

      <Navbar bg="success" variant="dark">
        <Container>
          <h3 className='text-white d-flex items-center justify-content-center'> <a href="/">Mister Kitchen</a> </h3>
          <Nav className="mx-auto">
            <Nav.Item className='d-flex'>
              <Link className='text-dark' to="/blogs">Home</Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="blogs">Blogs</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <button className='btn btn-light'>Sign Up</button> */}
          <button className='btn btn-light ms-3'> <Link className='text-success' to='/login'>Login</Link> </button>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;