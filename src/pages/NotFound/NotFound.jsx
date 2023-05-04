import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import NotFoundImage from '../../assets/NotFound.jpg';

const NotFound = () => {
  return (
    <div className="not-found-section">
      <Container>
        <Row>
          <Col xs={12} md={6} className="not-found-text">
            <h1 className="not-found-title"><span className="text-danger">404</span> - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Button variant="success"><Link to="/">Go Back Home</Link></Button>
          </Col>
          <Col xs={12} md={6} className="not-found-image">
            <img src={NotFoundImage} alt="404 Error" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
