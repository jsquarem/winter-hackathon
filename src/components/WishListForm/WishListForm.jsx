import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as productAPI from '../../utils/productAPI';
import { ArrowRight } from 'react-bootstrap-icons';

import './WishListForm.css';

export default function WishListForm({ addWishListItem, setAddWishListState }) {
  const [amazonURL, setAmazonURL] = useState({
    url: ''
  });

  const handleChange = (e) => {
    setAmazonURL({ ...amazonURL, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(amazonURL);
    const response = await productAPI.getProductbyURL(amazonURL);
    addWishListItem(response);
    console.log(response);
    setAddWishListState(false);
  };
  return (
    <div className="row">
      <div className="col-12 rounded wishlist-card pt-2">
        <Form className="form">
          <Form.Label>Enter Amazon URL</Form.Label>
          <InputGroup className="mb-3 bg-white rounded">
            <Form.Control
              placeholder=""
              onChange={handleChange}
              value={amazonURL.url}
              name="url"
            />
            <Button variant="outline-dark" onClick={handleSubmit}>
              <ArrowRight className="fw-bold" />
            </Button>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
}
