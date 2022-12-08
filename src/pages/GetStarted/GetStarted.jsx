import React from 'react';
import Button from 'react-bootstrap/Button';
import './GetStarted.css';

function GetStarted() {
  return (
    <div>
      <div className="circle5"></div>
      <div className="circle6"></div>

      <div className="text2">
        <h1>Connect to donors.</h1>
        <h2>Engage with your community.</h2>
        <h2>Empower Education.</h2>
        <h2>Connect students and classrooms to</h2>
        <h2>the essential supplies they need.</h2>
      </div>
      <div className="center">
        <div className="circle7"></div>
        <div className="mb-23">
          <Button href="/signup" variant="info" size="lg">
            Get Started
          </Button>{' '}
        </div>
      </div>
      <h2>How it works.</h2>

      <div>
        <ol>
          <li>Request Items</li>{' '}
          <p>Create a project with a wish list for your students.</p>
          <li>Get Funded</li> Donors purchase the items on your wish list.
          <li>Receive the items</li> Items will be shipped directly to your
          school.
        </ol>
      </div>
    </div>
  );
}

export default GetStarted;
