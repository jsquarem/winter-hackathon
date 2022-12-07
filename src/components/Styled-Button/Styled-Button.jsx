import React from 'react';
import './Styled-Button.css';
import { ArrowRight } from 'react-bootstrap-icons';

export default function StyledButton () {
  return (
    <div className="next-page">
      <button type="button" className="styled-button"></button>
      <ArrowRight className="arrow-right" size={20} />
      <p className="next">Next</p>
    </div>

  )
}