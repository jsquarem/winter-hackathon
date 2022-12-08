import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as productAPI from '../../utils/productAPI';

import './WishListItem.css';

export default function WishListItem({ wishListItem }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="rounded wish-list-card p-2">
          <div className="row">
            <div className="col-6">
              <img
                src={wishListItem.result[0].main_image}
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-6">
              <h6>{wishListItem.result[0].title.substring(0, 40)}...</h6>
              <p>{wishListItem.result[0].description.substring(0, 80)}...</p>
              <p className="text-end">
                ${wishListItem.result[0].price.current_price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
