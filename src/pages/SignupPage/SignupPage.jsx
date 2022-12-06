import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SignUpPage({ handleSignUpOrLogin }) {
  const [error, setError] = useState({
    message: '',
    passwordError: false
  });

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const navigate = useNavigate();

  const isPasswordMatch = (passwordOne, passwordConf) => {
    return passwordOne === passwordConf;
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    console.log(state, '<-state');
    e.preventDefault();
    if (!isPasswordMatch(state.password, state.passwordConfirm))
      return setError({
        message: 'Passwords Must Match!',
        passwordError: true
      });
    setError({ message: '', passwordError: false });

    try {
      console.log(state, '<-state in submit')
      await userService.signup(state);
      handleSignUpOrLogin();
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setError({ message: err.message, passwordError: false });
    }
  };

  return (
    <Container>
      <div className="col-12 col-md-4 offset-md-4 mb-5 pt-5">
        <h1 className="text-center mt-5">Sign Up</h1>
        <Card>
          <Card.Body>
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  error={error.passwordError}
                  placeholder="Password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  error={error.passwordError}
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                  value={state.passwordConfirm}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary text-white" type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
            {error.message ? <ErrorMessage error={error.message} /> : null}
          </Card.Body>
        </Card>
        <div>
          Already have an account? <Link to="/login">Login here!</Link>
        </div>
      </div>
    </Container>
  );
}
