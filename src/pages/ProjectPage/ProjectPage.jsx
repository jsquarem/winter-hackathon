import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './ProjectPage.css';
import { useNavigate } from 'react-router-dom';
import CircleAddButton from '../../components/CircleAddButton/CircleAddButton';
// import { useForm } from 'react-hook-form';
import WishListForm from '../../components/WishListForm/WishListForm';
import WishListItem from '../../components/WishListItem/WishListItem';
import ProjectOverview from '../../components/ProjectOverView/ProjectOverview';
import projectService from '../../utils/projectService';
import StyledButton from '../../components/StyledButton/StyledButton';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

export default function ProjectPage({ user, handleProject }) {
  const [projectImage, setProjectImage] = useState(false);
  const [projectProp, setProjectProp] = useState(null);
  const [projectStep, setProjectStep] = useState(1);
  const [addWishListState, setAddWishListState] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [project, setProject] = useState({
    wishList: [],
    projectTitle: '',
    projectDescription: '',
    imageURL:
      'https://catcollection7-11.s3.us-east-2.amazonaws.com/classroom3-888x500.png',
    subjectArea: ''
  });
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const projectObject = {
      ...project,
      wishList: wishList
    };
    const userEmail = user.email;
    const projectDocument = await projectService.create({
      projectObject,
      userEmail
    });
    console.log(projectDocument, '<-projectDocument');
    const profileID = navigate('/loading');
  };

  const handleClick = (e) => {
    console.log("i'm clicked!");
    e.preventDefault();
    setAddWishListState(!addWishListState);
  };

  const addWishListItem = async (wishListItem) => {
    console.log('in addWishListItem');
    setWishList([...wishList, wishListItem]);
    setProject({
      ...project,
      wishList: wishList
    });
  };

  const handleProjectNextStep = () => {
    console.log(project, '<-project in next step');
    const projectObject = {
      ...project,
      wishList: wishList
    };
    setProjectProp(projectObject);
    setProjectStep(2);
  };

  const handleImageAdd = () => {
    console.log('clicked');
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setProjectImage(true);
  };
  if (projectStep == 1) {
    return (
      <Container>
        <BreadCrumb step={3} />
        <div className="col-12 col-md-4 offset-md-4 mb-3 pt-5">
          <h5>
            My Wishlist ({wishList.length} item
            {wishList.length > 1 || wishList.length == 0 ? 's' : ''})
          </h5>
          <div className="row">
            <div className="col-12">
              {wishList.length > 0 ? (
                <WishListItem wishListItem={wishList[0]} />
              ) : addWishListState ? (
                <WishListForm
                  addWishListItem={addWishListItem}
                  setAddWishListState={setAddWishListState}
                />
              ) : (
                <>
                  <CircleAddButton handleClick={handleClick} />
                  <p className="ms-2">Add a project </p>
                </>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3 project-card rounded">
              <Form onSubmit={formSubmitHandler}>
                <Form.Group
                  className="mb-4"
                  controlId="formWishList"
                ></Form.Group>
                <Form.Group className="mb-4" controlId="formProjectTitle">
                  <Form.Label>Project Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What's your project called?"
                    name="projectTitle"
                    value={project.projectTitle}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formProjectDescription">
                  <Form.Label>Project Description</Form.Label>

                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Share about your project."
                    name="projectDescription"
                    value={project.projectDescription}
                    onChange={handleChange}
                    rows={4}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input
              style={{ display: 'none' }}
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
            {projectImage ? (
              <img src="https://catcollection7-11.s3.us-east-2.amazonaws.com/classroom3-888x500.png" />
            ) : (
              <>
                <CircleAddButton handleClick={handleImageAdd} />
                <p>Add Project Photo</p>
              </>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-end">
            <button
              type="submit"
              className="next-button"
              onClick={handleProjectNextStep}
            >
              <StyledButton />
            </button>
          </div>
        </div>
      </Container>
    );
  }
  if (projectStep == 2) {
    return (
      <ProjectOverview
        project={projectProp}
        formSubmitHandler={formSubmitHandler}
        user={user}
      />
    );
  }
}
