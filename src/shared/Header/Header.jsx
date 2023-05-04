import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="success" variant="dark">
        <Container>
          {/* Logo */}
          <h3 className="text-white d-flex items-center justify-content-center">
            <NavLink to="/">Mister Kitchen</NavLink>
          </h3>
          {/* Navigation Links */}
          <Nav className="mx-auto">
            <Nav.Item className="d-flex">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                className="nav-link"
                activeClassName="active"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
            </Nav.Item>
          </Nav>
          {/* Login Button */}
          <button className="btn btn-light ms-3">
            <NavLink to="/login" className="text-success">
              Login
            </NavLink>
          </button>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
