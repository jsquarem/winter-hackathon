import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import userService from '../../utils/userService';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function LoginPage({ handleSignUpOrLogin }) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      handleSignUpOrLogin();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <Container>
      <div className="col-12 col-md-4 offset-md-4 mb-5 pt-5">
        <h1 className="text-center mt-5">Log In</h1>
        <Card>
          <Card.Body>
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary text-white" type="submit">
                  Log in
                </Button>
              </div>
            </Form>
            {error ? <ErrorMessage error={error} /> : null}
          </Card.Body>
        </Card>
        <div>
          Don't have an account? <Link to="/signup">Sign up here!</Link>
        </div>
      </div>
    </Container>
  );
}
