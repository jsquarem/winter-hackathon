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
    
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
          src="https://images.unsplash.com/photo-1633993218507-3ef60c867cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-2">
              <Button variant="primary" size="lg">
              Create Project
              </Button>{' '}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
          src="https://images.unsplash.com/photo-1633993212869-92345c1cff23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=400"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Create Project
            </Button>{' '}
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
          src="https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          <div className="mb-2">
            <Button href="/project" variant="primary" size="lg">
              Create Project
            </Button>{' '}
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}
