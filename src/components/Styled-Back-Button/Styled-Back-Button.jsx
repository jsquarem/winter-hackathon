import React from 'react';
import './Styled-Back-Button.css';
import { ArrowLeft } from 'react-bootstrap-icons';

export default function StyledBackButton () {
  return (
    <div className="next-page">
      <button type="button" className="styled-button"></button>
      <ArrowLeft className="arrow-right" size={20} />
      <p className="next">Back</p>
    </div>
  )
}