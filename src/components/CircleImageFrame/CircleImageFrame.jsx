import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './CircleAddButton.css';

export default function CircleAddButton({ url }) {
  return (
    <div className="addMedia">
      <Link to={url}>
        <Button variant="outline-secondary">+</Button>
      </Link>
    </div>
  );
}
