import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as productAPI from '../../utils/productAPI';

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
      <div className="col-12">
        <Form className="form">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Amazon URL"
              onChange={handleChange}
              value={amazonURL.url}
              name="url"
            />
            <Button variant="outline-secondary" onClick={handleSubmit}>
              Button
            </Button>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
}
