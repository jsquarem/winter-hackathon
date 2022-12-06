import React, { useState } from 'react';
import { useEffect } from 'react';
import * as productAPI from '../../utils/productAPI';

export default function HomePage() {
  const [productInfo, setProductInfo] = useState({});

  const getProductInfo = async () => {
    let url = 'jhgjhg';
    const productInformation = await productAPI.getProductbyURL(url);
    console.log(productInformation.result, '<-productInformation');

    setProductInfo(productInformation);
    return productInformation;
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <>
      <h1>I'm Home!</h1>
    </>
  );
}
