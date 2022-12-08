import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import userService from '../../utils/userService';
import teacherService from '../../utils/teacherService';
import schoolService from '../../utils/schoolService';
import StyledButton from '../../components/StyledButton/StyledButton';
import './NewProfilePage.css';

export default function NewProfilePage({
  user,
  handleUserUpdate,
  handleTeacherProfileUpdate
}) {
  const [step, setStep] = useState(1);
  console.log(step, '<-step');
  const [error, setError] = useState({
    message: '',
    passwordError: false
  });
  const [success, setSuccess] = useState({
    message: ''
  });
  const [userState, setUserState] = useState({
    userEmail: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    teacherProfile: ''
  });
  const [schoolSearch, setSchoolSearch] = useState({
    query: ''
  });
  const [schoolState, setSchoolState] = useState({
    name: '',
    address1: '',
    address2: '',
    city: '',
    zipcode: '',
    state: '',
    phone: ''
  });
  const [teacherProfileState, setTeacherProfileState] = useState({
    schoolEmail: '',
    phone: '',
    bio: '',
    school: '',
    userEmail: user.email
  });
  const [openSchoolForm, setOpenSchoolForm] = useState(false);
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };

  const handleTeacherProfileChange = (e) => {
    setTeacherProfileState({
      ...teacherProfileState,
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
        firstName: userState.firstName,
        lastName: userState.lastName,
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

  const handleSchoolSubmit = async (e) => {
    e.preventDefault();
    const school = await schoolService.create(schoolState);
    console.log(school, '<-school');
    const schoolID = school._id;
    setTeacherProfileState({
      ...teacherProfileState,
      school: schoolID
    });
    setOpenSchoolForm(false);
  };

  const handleSubmit = (e) => {
    setStep(2);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    console.log(teacherProfileState, '<-teacherProfileState');
    const teacherProfile = await teacherService.create(teacherProfileState);
    handleTeacherProfileUpdate(teacherProfile);
    navigate(`/profile`);
    console.log(teacherProfile, '<-teacherProfile');
  };

  if (step == 1) {
    return (
      <Container>
        <div className="row mt-5">
          <div className="col-12 profile-card rounded mt-5 p-3">
            <div className="row">
              <div className="col-12 col-md-4 offset-md-4">
                <Form className="form" onSubmit={handleNameSubmit}>
                  <div className="row">
                    <div className="col-6 col-md-12">
                      <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={userState.firstName}
                          onChange={handleUserChange}
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
                          value={userState.lastName}
                          onChange={handleUserChange}
                          required
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-grid col-6 offset-6">
                      <Button variant="secondary text-white" type="submit">
                        Update Name
                      </Button>
                    </div>
                  </div>
                </Form>
                <div className="col-12 text-center">
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
            </div>
            <div className="row">
              <div className="col-12 col-md-4 offset-md-4">
                <Form className="form">
                  <div className="row">
                    <div className="col-12">
                      <Form.Group className="mb-3" controlId="formSchoolEmail">
                        <Form.Label>
                          School Email<sup>*</sup>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="youremail@school.edu"
                          name="schoolEmail"
                          value={teacherProfileState.schoolEmail}
                          onChange={handleTeacherProfileChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPhon">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="1 (555) 555-1234"
                          name="phone"
                          value={teacherProfileState.phone}
                          onChange={handleTeacherProfileChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Tell us about yourself"
                          name="bio"
                          value={teacherProfileState.bio}
                          onChange={handleTeacherProfileChange}
                        />
                        <div className="col-12">* denotes required fields</div>
                      </Form.Group>
                      {/* <div className="row">
                        <div className="d-grid col-12 mx-auto">
                          <Button variant="secondary text-white" type="submit">
                            {'Next - Add Your School ->'}
                          </Button>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-end">
            <button
              type="submit"
              className="next-button"
              onClick={handleSubmit}
            >
              <StyledButton />
            </button>
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
            <div className="col-6 offset-3 rounded">
              <img
                className="rounded profile-2-image"
                src="https://catcollection7-11.s3.us-east-2.amazonaws.com/profile-step-2-image.jpg"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 rounded profile-card pt-5 p-3">
            <div className="row">
              <div className="col-12 mt-2">
                <Form.Group className="mb-3" controlId="formSchoolSearch">
                  <h6>Find your school:</h6>
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
            <div className="col-12">
              <h4>My School:</h4>
              {teacherProfileState.school ? (
                <>
                  <h5>{schoolState.name}</h5>
                  <p>
                    {schoolState.address1} {schoolState.address2}
                    <br />
                    {schoolState.city}, {schoolState.state} {schoolState.zip}{' '}
                    <br />
                    {schoolState.phone}
                  </p>
                </>
              ) : (
                <p>
                  Search for your school above or add if if you don't find it!
                </p>
              )}
            </div>
            <div className="row">
              <div className="col-12 mt-5">
                <h4 className="text-center">Don't see your school?</h4>
                <h3 className="text-center">Add it below!</h3>
                <div className="col-12 text-center">
                  <Button
                    onClick={() => setOpenSchoolForm(!openSchoolForm)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openSchoolForm}
                  >
                    Add New School
                  </Button>
                </div>
                <Collapse in={openSchoolForm}>
                  <Form className="form" onSubmit={handleSchoolSubmit}>
                    <div className="col-12">
                      <Form.Group className="mb-3" controlId="formSchoolName">
                        <Form.Label>
                          School Name<sup>*</sup>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="name"
                          value={schoolState.name}
                          onChange={handleSchoolChange}
                          required
                        />
                      </Form.Group>
                    </div>
                    <div className="col-12">
                      <Form.Group
                        className="mb-3"
                        controlId="formSchoolAddress1"
                      >
                        <Form.Label>
                          Street Address 1<sup>*</sup>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="address1"
                          value={schoolState.address1}
                          onChange={handleSchoolChange}
                          required
                        />
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formSchoolAddress2"
                        >
                          <Form.Label>Street Address 2</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="address2"
                            value={schoolState.address2}
                            onChange={handleSchoolChange}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group className="mb-3" controlId="formCity">
                          <Form.Label>
                            City<sup>*</sup>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="city"
                            value={schoolState.city}
                            onChange={handleSchoolChange}
                            required
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formSchoolState"
                        >
                          <Form.Label>
                            State<sup>*</sup>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="state"
                            value={schoolState.state}
                            onChange={handleSchoolChange}
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="formSchoolZipCode"
                        >
                          <Form.Label>
                            Zipcode<sup>*</sup>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            name="zipcode"
                            value={schoolState.zipcode}
                            onChange={handleSchoolChange}
                            required
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-12">
                      <Form.Group className="mb-3" controlId="formSchoolPhone">
                        <Form.Label>
                          Phone Number<sup>*</sup>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="phone"
                          value={schoolState.phone}
                          onChange={handleSchoolChange}
                          required
                        />
                      </Form.Group>
                      <p>* denotes required field</p>
                    </div>
                    <div className="row">
                      <div className="d-grid col-12 mx-auto">
                        <Button variant="primary text-white" type="submit">
                          Add School
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-end">
            <button
              type="submit"
              className="next-button"
              onClick={handleProfileSubmit}
            >
              <StyledButton />
            </button>
          </div>
        </div>
      </Container>
    );
  }
}
