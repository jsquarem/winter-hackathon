import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';

export default function HomePage() {
  // const [productInfo, setProductInfo] = useState({});

  // const getProductInfo = async () => {
  //   let url = 'jhgjhg';
  //   const productInformation = await productAPI.getProductbyURL(url);
  //   console.log(productInformation.result, '<-productInformation');

  //   setProductInfo(productInformation);
  //   return productInformation;
  // };

  // useEffect(() => {
  //   getProductInfo();
  // }, []);

  return (
    <div className="mt-5">
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="text">
        <h1>Equip the future.</h1>
        <h2>Help Teachers.</h2>
        <h2>Help Students.</h2>
      </div>
      <div className="circle3"></div>
      <div className="mb-2">
        <Button href="/getstarted" variant="info" size="lg">
          Learn More
        </Button>
        {/* <Button href="/project" className="link" variant="link" size="lg">
          Create a Project
        </Button> */}
        <div className="circle4"></div>
      </div>
    </div>
  );
}
