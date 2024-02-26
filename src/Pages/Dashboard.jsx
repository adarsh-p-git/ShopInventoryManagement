import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import db from '../firebase/firebase';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function Dashboard() {
    const productsRef = collection(db, 'products');
    const [productsArray, setProductsArray] = useState(null);
    const [emptyStock, setEmptyStock] = useState([]);
    const [lowStock, setLowStock] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getDocs(productsRef);
                setProductsArray(productsData.docs.map(doc => doc.data())); 
            } catch (error) {
                console.log('Error Fetching Data', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (productsArray) {
            stockQty();
        }
    }, [productsArray]);

    const stockQty = () => {
        
        const emptyStockProducts = productsArray.filter(product => product.quantity == 0);
        const lowStockProducts = productsArray.filter(product => product.quantity > 0 && product.quantity <= 10);

        setEmptyStock(emptyStockProducts);
        setLowStock(lowStockProducts);
    };

    return (
        <div >
             <Header/>            <div style={{marginBottom:"130px"}} className="containerDashboard container p-5">
              
               <h1 className='text-dark m-2' style={{ textShadow: "1px 1px 1px white" }}>Dashboard</h1>
                <Row>
                    <Col className='m-2 '> 
                        <Card style={{ width: '18rem',backgroundColor:'lightgreen' }}>
                            <Card.Body>
                                <Card.Title className='text-dark'>Total Products</Card.Title>
                                <Card.Text>
                                    {productsArray ? productsArray.length : 0}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-2'> 
                        <Card className='bg-danger' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='text-dark'>Low Stock Products</Card.Title>
                                <Card.Text>
                                    {lowStock.length}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col className='m-2'> 
                        <Card className='bg-warning' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='text-dark'>Empty Stock Products</Card.Title>
                                <Card.Text>
                                    {emptyStock.length}
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-2'> 
                        <Card className='bg-info-subtle' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>View Inventory List</Card.Title>
                                <Card.Text>
                                   
                                </Card.Text>
                               <Link to='/inventory'> <Button variant="primary">Explore</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Dashboard;
