import React,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import './project.css'

export default function Project() {
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
          [e.target.projectTitle]: e.target.value
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
              <a href="#">
                <Button >+</Button>
                </a>
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
                value={project.projectDescription} 
                onChange={handleChange}
                rowS={4}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddMedia">
            <Form.Label>Add Media</Form.Label>
            <div 
              className='addMedia'
              value={project.addMedia} 
              onChange={handleChange}>
                <a href="#">
                  <Button >+</Button>
                </a>
              </div>
        </Form.Group> 
        <Form.Label>Subject Area</Form.Label>
        <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />
              <DropdownButton
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-2"
              align="end"
              value={project.subjectArea} 
              onChange={handleChange}
            >
              <Dropdown.Item href="#">Elementray school</Dropdown.Item>
              <Dropdown.Item href="#">Middle school</Dropdown.Item>
              <Dropdown.Item href="#">High School</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
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