import React from 'react'
import Button from 'react-bootstrap/Button'
import './GetStarted.css'

function GetStarted() {
  return (
      <div>

          <h1>Connect to donors.</h1>
          <h3>Engage with your community.</h3>
          <h3>Empower Education.</h3>
          <h3>Connect students and classrooms to</h3>
          <h3>the essential supplies they need.</h3>
          <div className="mb-2">
              <Button variant="primary" size="lg">
                  Get Started
              </Button>{' '}
          </div>
          <h2>How it works.</h2>

          <div>
              <ol>
                  <li>Request Items</li> Create a project with a wish list for your students.
                  <li>Get Funded</li> Donors purchase the items on your wish list.
                  <li>Receive the items</li> Items will be shipped directly to your school.
              </ol>
          </div>
      </div>
  )
}

export default GetStarted