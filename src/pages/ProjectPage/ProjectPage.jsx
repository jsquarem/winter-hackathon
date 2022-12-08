import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './project.css';
import { Link } from 'react-router-dom';
import CircleAddButton from '../../components/CircleAddButton/CircleAddButton';
// import { useForm } from 'react-hook-form';
import WishListForm from '../../components/WishListForm/WishListForm';
import WishListItem from '../../components/WishListItem/WishListItem';
import projectService from '../../utils/projectService';

export default function ProjectPage({ user, handleProject }) {
  const [addWishListState, setAddWishListState] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [project, setProject] = useState({
    wishList: [],
    projectTitle: '',
    projectDescription: '',
    imageURL: '',
    subjectArea: ''
  });

  // const { register } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);
    const res = await fetch('http://localhost:3000/upload-file', {
      method: 'POST',
      body: formData
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status:$ {res.status}`));
  };

  function handleChange(e) {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setProject({
      ...project,
      wishList: wishList
    });
    const projectObject = {
      ...project,
      wishList: wishList
    };
    const projectDocument = await projectService.create(projectObject);
    console.log(projectDocument, '<-projectDocument');
  };

  const handleClick = (e) => {
    console.log("i'm clicked!");
    e.preventDefault();
    setAddWishListState(!addWishListState);
  };

  const addWishListItem = async (wishListItem) => {
    console.log('in addWishListItem');
    setWishList([...wishList, wishListItem]);
    console.log(wishList);
  };

  return (
    <>
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
                <Form.Label>Subject Area</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="subjectArea"
                  value={project.subjectArea}
                  onChange={handleChange}
                >
                  <option></option>
                  <option value="1">Algebra</option>
                  <option value="2">Art</option>
                  <option value="3">Biology</option>
                  <option value="4">Chemistry</option>
                  <option value="5">Drama</option>
                  <option value="6">English</option>
                  <option value="7">Foreign Languages</option>
                  <option value="8">Geography</option>
                  <option value="9">Geometry</option>
                  <option value="10">History</option>
                  <option value="11">Information Technology</option>
                  <option value="12">Math</option>
                  <option value="13">Music</option>
                  <option value="14">Literature</option>
                  <option value="15">Philosphy</option>
                  <option value="16">Physical Education</option>
                  <option value="16">Physics</option>
                  <option value="16">Social Studies</option>
                </Form.Select>
                <br />

                {/* <Button variant="success" type="submit">
            Publish Project 
          </Button> */}
              </Form>
              <div className="row">
                <div className="d-grid col-2 mx-auto end">
                  <Button
                    variant="success text-white"
                    onClick={formSubmitHandler}
                  >
                    {'Next'}
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
