import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
import { Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth();

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const [passError, setPassError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleRegister = (event) => {
    event.preventDefault();




    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        // Signed in 
        const loggedInUser = userCredential.user;
        setPassError('')
        setName('')
        setEmail('')
        setPassword('')
        setPhotoURL('')
        setSuccessMessage("User has been created successfully")
        console.log(loggedInUser)
        // ...
      })
      .catch((error) => {
        console.error(error)
        setPassError(error.message)
        setSuccessMessage('')


      });

  };

  return (
    <div className="registration-page">
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            password='password'
            onChange={(event) => setPassword(event.target.value)}
            required
            pattern="(?=.{6,}"
          />
          <Form.Text className="text-danger">
            {passError}
          </Form.Text>
        </Form.Group>


        <Form.Group controlId="formPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            photoURL='photoURL'
            placeholder="Enter photo URL"
            value={photoURL}
            onChange={(event) => setPhotoURL(event.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>

        <Form.Text className="text-success">
          {successMessage}
        </Form.Text>
      </Form>

      <div className="login-link">
        Already have an account? <Link to="/login"><span className="text-success">Log in</span></Link>
      </div>
    </div>
  );
};

export default Registration;
