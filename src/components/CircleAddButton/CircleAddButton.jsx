import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './CircleAddButton.css';

export default function CircleAddButton({ handleClick }) {
  const handleButtonClick = () => {};

  return (
    <div className="addMedia" onClick={handleClick}>
      <Button variant="outline-secondary">+</Button>
    </div>
  );
}
