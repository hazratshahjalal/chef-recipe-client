import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const AboutUs = () => {
  return (
    <Container fluid className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-5">
          <span style={{ color: "#ff6f00" }}>Our</span> Story
        </h2>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/9_5wHw6l11o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Col>
          <Col lg={6}>
            <Card className="shadow-lg border-0 p-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Our Mission
                </Card.Title>
                <Card.Text>
                  At Chef's Recipes, we believe that cooking should be an
                  enjoyable experience for everyone. That's why we're committed
                  to providing you with easy-to-follow recipes, cooking tips,
                  and kitchen hacks that will help you become a better cook.
                  Whether you're a seasoned pro or just getting started, we're
                  here to help you create delicious meals that your friends and
                  family will love.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;
