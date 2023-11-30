import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { register } from "../untils/api";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await register({ username, password });

      if (response && response.error === false) {
        console.log('Registration successful');
        alert('Registration successful');

        // Redirect to the home page after successful registration
        navigate('/home');
      } else {
        console.error(
          'Failed to register. Please make sure that the username or password is not already registered.'
        );
        alert('Failed to register. Please check your input.');
      }
    } catch (error) {
      console.error('Failed to register:', error.message);
    }
  };

  return (
    <>
      <h1>Register on Note App</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
