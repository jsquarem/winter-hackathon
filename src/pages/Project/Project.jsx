import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './project.css'
import { Link } from 'react-router-dom';

export default function Project({handleSignUpOrLogin}) {
    const [project, setProject] = useState({
        wishList: '',
        projectTitle:'',
        projectDescription:'',
        addMedia: '',
        subjectArea:'',
    })

    function handleChange(e) {
      setProject({
          ...project,
          [e.target.name]: e.target.value
        });
      }

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <Container>
      <div className="col-12 col-md-4 offset-md-4 mb-5 pt-5">
        <h1 className="text-center mt-5">Projects</h1>
        <Card>
          <Card.Body>
        <Form onSubmit={formSubmitHandler}> 
        <Form.Group className="mb-4" controlId="formWishList">
            <Form.Label>My Wishlist </Form.Label>
            <div 
              className='addMedia' 
              value={project.wishList}> 
              <Link href="#">
                <Button >+</Button>
                </Link>
              </div>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formProjectTitle">
            <Form.Label>Project Title</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Project Title" 
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
                placeholder="Project Description" 
                name="projectDescription"
                value={project.projectDescription} 
                onChange={handleChange}
                rows={4}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddMedia">
            <Form.Label>Add Media</Form.Label>
            <div 
              className='addMedia'
              name="addMedia"
              value={project.addMedia} 
              onChange={handleChange}>
                <Link href="#">
                  <Button >+</Button>
                </Link>
              </div>
        </Form.Group> 
        <Form.Label>Subject Area</Form.Label>
        <Form.Select
            aria-label="Default select example"
            name="subjectArea"
            value={project.subjectArea} 
            onChange={handleChange}
            >
          <option ></option>
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
        <br/>
        <Button variant="success" type="submit">
            Publish Project 
        </Button>
        </Form>
          </Card.Body>
        </Card>
     </div>
    </Container>
    </>
  );
}
