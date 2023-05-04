import React, { useContext } from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="success" variant="dark">
        <Container>
          {/* Logo */}
          <h3 className='text-white d-flex items-center justify-content-center'> <a href="/">Mister Kitchen</a> </h3>
          {/* Navigation Links */}
          <Nav className="mx-auto">
            <Nav.Item className='d-flex'>
              <Link className='text-dark' to="/blogs">Home</Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="blogs">Blogs</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Login Button */}
          {/* <h3 >{user.displayName}</h3> */}
          <button className='btn btn-light ms-3'> <Link className='text-success' to='/login'>Login</Link> </button>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
