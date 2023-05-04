import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
import { Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    console.log(name)
    // handle form submission logic here

  };

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });




  return (
    <div className="registration-page">
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
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
            email='email'
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
            Password must be at least 6 characters long .
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
      </Form>

      <div className="login-link">
        Already have an account? <Link to="/login"><span className="text-success">Log in</span></Link>
      </div>
    </div>
  );
};

export default Registration;
