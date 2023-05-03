import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
  return (
    <div className="banner-section">

      <Row>
        <Col lg={6} md={6} sm={12} className="banner">
          <div className="banner-image"></div>
        </Col>
        <Col lg={6} md={6} sm={12} className="banner-text text-center d-flex align-items-center">
          {/* Use 'd-flex' and 'align-items-center' classes to vertically center the content */}
          <div>
            <h2 className='text-success'>Delicious Chef Recipes</h2>
            <p>Discover hundreds of mouthwatering recipes created by professional chefs from around the world. Whether you're a beginner or an experienced home cook, we've got something for everyone.</p>
            <Button variant="outline-success">Get started</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};


export default Banner;
