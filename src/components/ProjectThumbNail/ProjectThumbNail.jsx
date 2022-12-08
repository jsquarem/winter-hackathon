import React from 'react';
import './ProjectThumbNail.css';
import Card from 'react-bootstrap/Card';
import { ArrowRight } from 'react-bootstrap-icons';

export default function ProjectThumbNail({ project }) {
  return (
    <Card style={{ width: '90%' }}>
      <Card.Img variant="top" src={project.imageURL} />
      <Card.Body>
        <Card.Title>{project.projectTitle}</Card.Title>
        <Card.Text>{project.projectDescription}</Card.Text>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <h3>
              <ArrowRight />
            </h3>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
