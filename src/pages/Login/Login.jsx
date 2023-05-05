import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';




const Login = () => {

  const auth = getAuth(app)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passError, setPassError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        // Signed in 
        const loggedUser = userCredential.user;
        setPassError('')
        setEmail('')
        setPassword('')
        setSuccessMessage("Login Successful")
        console.log(loggedUser)
        // ...
      })
      .catch((error) => {
        console.error(error)
        setPassError(error.message)
        setSuccessMessage('')
      });
  }
  const googleProvider = new GoogleAuthProvider();
  const HandleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setSuccessMessage("Login Successful")
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      }
      )
  }


  const githubProvider = new GithubAuthProvider();
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setSuccessMessage("Login Successful")
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      }

      )
  }





  return (
    <Row className="justify-content-center ">
      <Col xs={12} md={6} lg={4}>
        <h1>Login</h1>
        {/* {error && <Alert variant="danger">{ }</Alert>} */}
        <Form onSubmit={handleLogin} >
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"

              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              password='password'
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form.Group>

          <Button className='my-4' variant="success" type="submit">
            Login
          </Button>

          <p className="text-success">{successMessage}</p>
          <p className="text-danger">{passError}</p>
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
        <p className="text-success">{successMessage}</p>
        <p className="text-danger">{passError}</p>
      </Col>
    </Row>
  );
};

export default Login; 