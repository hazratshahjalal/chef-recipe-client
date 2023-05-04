import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGolfBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';




const Login = () => {

  const auth = getAuth(app)

  const githubProvider = new GithubAuthProvider();
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(

    )
  }

  const googleProvider = new GoogleAuthProvider();
  const HandleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(
    )
  }


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
          <Button onClick={HandleGoogleSignIn} variant="outline-success" >
            <FontAwesomeIcon icon={faGoogle} className="mx-2" />
            Sign in with Google
          </Button>{' '}
          <Button onClick={handleGithubSignIn} variant="outline-warning" >
            <FontAwesomeIcon icon={faGithub} className="mx-2" />
            Sign in with GitHub
          </Button>
        </div>

        <p className="mt-3">
          Don't have an account? <Link to="/registration"><span className='text-success'>Sign up</span></Link>
        </p>
      </Col>
    </Row>
  );
};

export default Login; 