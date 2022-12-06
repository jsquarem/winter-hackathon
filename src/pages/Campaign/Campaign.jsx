import React,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Campaign() {
    const [campaign, setCampaign] = useState({
        campaignBio: '',
        addItem: '',
    })

    function handleChange(e) {
        setCampaign({
          ...campaign,
          [e.target.campaignBio]: e.target.value
        });
      }

    const formSubmitHandler = (event) =>{
        event.preventDefault()
        
    }
  return (
    <>
    <Container>
      <div className="col-12 col-md-4 offset-md-4 mb-5 pt-5">
        <h1 className="text-center mt-5">Start Campaign</h1>
        <Card>
          <Card.Body>
        <Form onSubmit={formSubmitHandler}> 
        <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Campaign Bio</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Explanation" 
                name="campaignBio"
                value={campaign.campaignBio} 
                onChange={handleChange}
                />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Add Items</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Add Items" 
                value={campaign.addItem} 
                onChange={handleChange}
                />
        </Form.Group>
        <Button variant="primary" type="submit">
            Launch Campaign
        </Button>
        </Form>
          </Card.Body>
        </Card>
     </div>
    </Container>
    </>
  )
}