import React from 'react';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

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
    <div>
        
            <h1>Equip the future</h1>
            <h2>Help Teachers.</h2>
            <h2>Help Students.</h2>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Browse Projects
            </Button>{' '}
          </div>
            <div className="mb-2">
              <Button variant="link" size="lg">
              Create a Project
              </Button>{' '}
            </div>
    </div>
  );
}
