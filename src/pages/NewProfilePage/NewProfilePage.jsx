import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import userService from '../../utils/userService';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

export default function NewProfilePage({ user, handleUserUpdate }) {
  const [step, setStep] = useState(2);
  console.log(step, '<-step');
  const [error, setError] = useState({
    message: '',
    passwordError: false
  });
  const [success, setSuccess] = useState({
    message: ''
  });
  const [state, setState] = useState({
    userEmail: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    schoolEmail: '',
    phoneNumber: ''
  });
  const [schoolSearch, setSchoolSearch] = useState({
    query: ''
  });
  const [schoolState, setSchoolState] = useState({
    name: '',
    address1: '',
    address2: '',
    zipcode: '',
    state: '',
    phone: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const handleSchoolChange = (e) => {
    setSchoolState({
      ...schoolState,
      [e.target.name]: e.target.value
    });
  };

  const handleSearchChange = (e) => {
    setSchoolSearch({
      query: e.target.value
    });
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    console.log('in submit');
    try {
      console.log('in update1');
      const updateUserObject = {
        firstName: state.firstName,
        lastName: state.lastName,
        userEmail: user.email
      };
      const updatedUser = await userService.update(updateUserObject);
      setSuccess({
        message: 'Your name has been updated'
      });
      console.log('Name updated');
      handleUserUpdate(updatedUser);
    } catch (err) {
      console.log(err.message);
      setError({ message: err.message, passwordError: false });
    }
  };

  const handleSchoolSubmit = () => {};

  const handleSubmit = (e) => {
    setStep(2);
  };

  if (step == 1) {
    return (
      <Container>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4 mb-2">
            <h1 className="text-center mt-5">Profile Step 1</h1>
            <Form className="form" onSubmit={handleNameSubmit}>
              <div className="row">
                <div className="col-6 col-md-12">
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
                </div>
                <div className="col-6 col-md-12">
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
                </div>
              </div>
              <div className="row">
                <div className="d-grid col-12 mx-auto">
                  <Button variant="primary text-white" type="submit">
                    Update Name
                  </Button>
                </div>
              </div>
            </Form>
            {error.message ? (
              <ErrorMessage error={error.message} />
            ) : (
              <span>&nbsp;</span>
            )}
            {success.message ? (
              <SuccessMessage success={success.message} />
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4">
            <Form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <Form.Group className="mb-3" controlId="formSchoolEmail">
                    <Form.Label>School Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="youremail@school.edu"
                      name="schoolEmail"
                      value={state.schoolEmail}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPhon">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1 (555) 555-1234"
                      name="phoneNumber"
                      value={state.phoneNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Tell us about yourself"
                      name="bio"
                      value={state.bio}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="row">
                    <div className="d-grid col-12 mx-auto">
                      <Button variant="primary text-white" type="submit">
                        {'Next - Add Your School ->'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
  if (step == 2) {
    return (
      <Container>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5">Profile Step 2</h1>
            /Header Image/
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Form.Group className="mb-3" controlId="formSchoolSearch">
              <Form.Label>Find your school:</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="schoolSearch"
                value={schoolSearch.query}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Don't see your school?</h4>
            <h3>Add it below!</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Add New School</Accordion.Header>
                <Accordion.Body>
                  <Form className="form" onSubmit={handleSchoolSubmit}>
                    <div className="col-12">
                      <Form.Group className="mb-3" controlId="formSchoolName">
                        <Form.Label>School Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="name"
                          value={schoolState.name}
                          onChange={handleSchoolChange}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group
                        className="mb-3"
                        controlId="formSchoolAddress1"
                      >
                        <Form.Label>Street Address 1</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="address1"
                          value={schoolState.address1}
                          onChange={handleSchoolChange}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group
                        className="mb-3"
                        controlId="formSchoolAddress2"
                      >
                        <Form.Label>Street Address 2</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="address1"
                          value={schoolState.address2}
                          onChange={handleSchoolChange}
                        />
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formSchoolZipCode"
                        >
                          <Form.Label>Zipcode</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="zipcode"
                            value={schoolState.zipcode}
                            onChange={handleSchoolChange}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formSchoolState"
                        >
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="state"
                            value={schoolState.state}
                            onChange={handleSchoolChange}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-12">
                      <Form.Group className="mb-3" controlId="formSchoolPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="phone"
                          value={schoolState.phone}
                          onChange={handleSchoolChange}
                        />
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="d-grid col-12 mx-auto">
                        <Button variant="primary text-white" type="submit">
                          Add School
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    );
  }
}
