import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'
import { Form, Button } from 'react-bootstrap';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    // handle form submission logic here
  };

  return (
    <div className="registration-page">
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
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
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
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
