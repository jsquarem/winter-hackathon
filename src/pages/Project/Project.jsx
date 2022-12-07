import React,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
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

    const formSubmitHandler = (event) =>{
        event.preventDefault()
        
    }
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
              value={project.addMedia} 
              onChange={handleChange}>
                <Link href="#">
                  <Button >+</Button>
                </Link>
              </div>
        </Form.Group> 
        <Form.Label>Subject Area</Form.Label>
        <InputGroup className="mb-3">
        <Form.Control 
            aria-label="Text input with dropdown button" 
            name="subjectArea"
            value={project.subjectArea} 
            onChange={handleChange}/>
              <DropdownButton
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-2"
              align="end"
              value={project.subjectArea} 
              onChange={handleChange}
            >
              <Dropdown.Item href="#">Algebra</Dropdown.Item>
              <Dropdown.Item href="#">Art</Dropdown.Item>
              <Dropdown.Item href="#">Biology</Dropdown.Item>
              <Dropdown.Item href="#">Chemistry</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">English</Dropdown.Item>
              <Dropdown.Item href="#">Foreign Languages</Dropdown.Item>
              <Dropdown.Item href="#">Geography</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Geometry</Dropdown.Item>
              <Dropdown.Item href="#">History</Dropdown.Item>
              <Dropdown.Item href="#">Information Technology</Dropdown.Item>
              <Dropdown.Item href="#">Math</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Music</Dropdown.Item>
              <Dropdown.Item href="#">Literature</Dropdown.Item>
              <Dropdown.Item href="#">Philosphy</Dropdown.Item>
              <Dropdown.Item href="#">Physical Education</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Physics</Dropdown.Item>
              <Dropdown.Item href="#">Science</Dropdown.Item>
              <Dropdown.Item href="#">Social Studies</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        <Button variant="success" type="submit">
            Publish Project 
        </Button>
        </Form>
          </Card.Body>
        </Card>
     </div>
    </Container>
    </>
  )
}