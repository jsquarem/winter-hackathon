import React, { useState } from 'react';
import { useEffect } from 'react';
import * as productAPI from '../../utils/productAPI';

export default function HomePage() {
  // [productInfo, setProductInfo] = useState({});

  const getProductInfo = async () => {
    let url = 'jhgjhg';
    const productInformation = await productAPI.getProductbyURL(url);
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return <h1>I'm Home!</h1>;
}
