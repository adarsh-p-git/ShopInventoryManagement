import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landingpagecontainer mt-5 m-3 p-4">
      <Row>
        <Col sm={6}>
          <div className="imgContainer container-lg">
            <img style={{maxHeight:'500px'}} src="https://flowhub.imgix.net/inventory-illustration.gif" className='img-fluid' alt="Inventory Illustration" />
          </div>
        </Col>
        <Col sm={6}>
          <div className="intro-container p-2 mt-5">
            <h2 className="text-warning">Welcome to ShopMaster!</h2>
            <p className='font-weight-bold text-secondary'>Streamline Your Inventory Management Effortlessly</p>
            <p className='text-justify text-wrap text-muted'>Are you tired of dealing with the hassle of manual inventory management? Say goodbye to the chaos and inefficiency with ShopMaster – your all-in-one solution for seamless inventory control.</p>
            <Link to='/register'><Button className='btn btn-success mx-2'>Sign Up</Button></Link>
            <Link to='/login'><Button className='btn btn-secondary'> Login</Button></Link>
          </div>
        </Col>
      </Row>
      <Container className="p-4">
        <h3 className="text-primary">What is ShopMaster?</h3>
        <p className="text-muted">ShopMaster is a cutting-edge inventory management platform designed to simplify the way you handle your shop's products. Whether you're a small boutique or a large retail chain, ShopMaster empowers you to take control of your inventory like never before.</p>
        <h3 className="text-primary">Why Choose ShopMaster?</h3>
        <ul className="list-unstyled text-muted">
          {/* <li><strong>Efficiency:</strong> Say goodbye to time-consuming manual inventory tracking. With ShopMaster, you can automate inventory updates, saving you valuable time and resources.</li> */}
          <li><strong>Accuracy:</strong> Eliminate the risk of stockouts or overstocking. ShopMaster provides real-time insights into your inventory levels, allowing you to make informed decisions and avoid costly mistakes.</li>
          <li><strong>Organization:</strong> Keep your products organized and easily accessible. With ShopMaster's intuitive interface, you can categorize, label, and manage your inventory with ease.</li>
          {/* <li><strong>Integration:</strong> Seamlessly integrate ShopMaster with your existing systems. Whether you're using an eCommerce platform, POS system, or accounting software, ShopMaster ensures smooth communication across all channels.</li> */}
        </ul>
        {/* <h3 className="text-primary">Key Features</h3>
        <ul className="list-unstyled text-muted">
          <li><strong>Inventory Tracking:</strong> Monitor your stock levels in real-time and receive alerts for low inventory.</li>
          <li><strong>Order Management:</strong> Streamline your order fulfillment process and keep track of incoming and outgoing orders.</li>
          <li><strong>Reporting and Analytics:</strong> Gain valuable insights into your sales trends, best-selling products, and overall performance.</li>
          <li><strong>Multi-Channel Selling:</strong> Expand your reach by selling across multiple channels, all managed from one centralized platform.</li>
        </ul> */}
        <p className="text-primary"><strong>Get Started Today</strong></p>
        <p className="text-muted">Ready to take control of your inventory and boost your productivity? Sign up for ShopMaster now and revolutionize the way you manage your products.</p>
        <Link to='/register'><Button variant="primary" className='btn btn-success'>Sign Up</Button></Link>
        <br />
        <br />
        <p className="text-danger"><strong>Still Have Questions?</strong></p>
        <p className="text-muted">Our dedicated support team is here to help. Contact us anytime for assistance or to learn more about how ShopMaster can transform your business.</p>
        <Button variant="outline-primary">Contact Us</Button>
        <p className="text-muted">Unlock the power of efficient inventory management with ShopMaster.</p>
      </Container>
    </div>
  );
}

export default LandingPage;
