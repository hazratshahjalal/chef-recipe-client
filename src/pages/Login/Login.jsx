import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGolfBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Login = () => {
  return (
    <Row className="justify-content-center ">
      <Col xs={12} md={6} lg={4}>
        <h1>Login</h1>
        {/* {error && <Alert variant="danger">{ }</Alert>} */}
        <Form >
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              // value={email}
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              // value={password}
              required

            />
          </Form.Group>

          <Button className='my-4' variant="success" type="submit">
            Login
          </Button>
        </Form>

        <div className="mt-3">
          <Button variant="outline-success" >
            <FontAwesomeIcon icon={faGoogle} className="mx-2" />
            Sign in with Google
          </Button>{' '}
          <Button variant="outline-warning" o>
            <FontAwesomeIcon icon={faGithub} className="mx-2" />
            Sign in with GitHub
          </Button>
        </div>

        <p className="mt-3">
          Don't have an account? <Link to="/signup"><span className='text-success'>Sign up</span></Link>
        </p>
      </Col>
    </Row>
  );
};

export default Login; 