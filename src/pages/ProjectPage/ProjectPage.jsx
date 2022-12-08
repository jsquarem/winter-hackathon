import React, { useState } from 'react';
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

export default function ProjectPage({ user, handleProject }) {
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
  if (projectStep == 1) {
    return (
      <Container>
        <div className="col-12 col-md-4 offset-md-4 mb-5 pt-5">
          <h1 className="text-center mt-5">Projects</h1>
          <Card>
            <Card.Body>
              <h5>My Wishlist </h5>
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
                    <CircleAddButton handleClick={handleClick} />
                  )}
                </div>
              </div>
              <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-4" controlId="formWishList">
                  <p>Add a project </p>
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formAddMedia">
                  <Form.Label>Add Media</Form.Label>
                  <div
                    className="imageURL"
                    name="imageURL"
                    value={project.imageURL}
                    onChange={handleChange}
                  >
                    <CircleAddButton url="url" />

                    <br />
                  </div>
                </Form.Group>
                <br />

                {/* <Button variant="success" type="submit">
            Publish Project 
          </Button> */}
              </Form>
              <div className="row">
                <div className="d-grid col-2 mx-auto end">
                  <Button
                    variant="success text-white"
                    onClick={handleProjectNextStep}
                  >
                    {'Next'}
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
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
