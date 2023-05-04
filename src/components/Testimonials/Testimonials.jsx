import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container>
        <h2 className="text-center text-success mb-5">What Our Customers Say</h2>
        <Row className="gx-5 gy-5">
          <Col md={6} lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <p className="testimonial-text">"I tried a recipe from this site for the first time and it was amazing! I've been recommending it to everyone I know."</p>
                <p className="testimonial-author text-success">- John Smith</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <p className="testimonial-text">"The recipes on this site are so easy to follow, even for someone like me who doesn't cook often. And they always turn out delicious!"</p>
                <p className="testimonial-author text-success">- Jane Doe</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <p className="testimonial-text">"I love trying new recipes and this site always has something interesting to try. Can't wait to make my next meal!"</p>
                <p className="testimonial-author text-success">- Michael Johnson</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
