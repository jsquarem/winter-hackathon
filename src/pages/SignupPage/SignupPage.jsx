import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StyledButton from '../../components/StyledButton/StyledButton';
import './SignupPage.css';

export default function SignupPage({ handleSignUpOrLogin }) {
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
      console.log(state, '<-state in submit');
      await userService.signup(state);
      handleSignUpOrLogin();
      navigate('/profile/new');
    } catch (err) {
      console.log(err.message);
      setError({ message: err.message, passwordError: false });
    }
  };

  return (
    <Container>
      <div className="col-12 col-md-4 offset-md-4 mb-5 pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-center mb-4">Join Our Community</h2>
            <img
              src="https://catcollection7-11.s3.us-east-2.amazonaws.com/signup-image.png"
              style={{ width: '60%' }}
            />
          </div>
        </div>
        <h2 className="text-center mt-3">Let's get started!</h2>
        <Form className="form" onSubmit={handleSubmit}>
          <Card className="sign-up-card">
            <Card.Body>
              <div className="row">
                <div className="col-6">
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>What's your name?</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={state.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>&nbsp;</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={state.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
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
              {error.message ? <ErrorMessage error={error.message} /> : null}
            </Card.Body>
          </Card>
          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-end">
              <button type="submit" className="next-button">
                <StyledButton />
              </button>
            </div>
          </div>
        </Form>

        {/* <div>
          Already have an account? <Link to="/login">Login here!</Link>
        </div> */}
      </div>
    </Container>
  );
}
