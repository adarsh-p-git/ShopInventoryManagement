import React, { useEffect, useState } from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import Add from '../Components/Add';
import db from '../firebase/firebase';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { collection, deleteDoc, getDoc, getDocs } from 'firebase/firestore';
import Header from '../Components/Header';

function InventoryList() {
  const [show, setShow] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [formData, setFormData] = useState({
    id: '', // Adding id field to track the product being edited
    name: '',
    description: '',
    price: '',
    quantity: ''
  });

  const handleClose = () => {
    setShow(false);
    // Reset form data
    setFormData({
      id: '', // Resetting id field
      name: '',
      description: '',
      price: '',
      quantity: ''
    });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const editProduct = async (productId) => {
    try {
      const productRef = doc(db, 'products', productId);
      const productSnapshot = await getDoc(productRef);
      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        // Update formData with the retrieved product data
        setFormData({
          id: productId,
          name: productData.name,
          description: productData.description,
          price: productData.price,
          quantity: productData.quantity
        });
        handleShow(); // Show modal with product data to edit
      } else {
        console.error("Product not found!");
      }
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };
  
  const addOrUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        // Update existing product
        const productId = formData.id;
        const productRef = doc(db, 'products', productId);
        await updateDoc(productRef, formData);
        console.log("Product edited successfully!");
      } else {
        // Add new product
        await addDoc(collection(db, 'products'), formData);
        console.log("Product added successfully!");
      }
      handleClose(); // Close the modal after adding/editing the product
      setRefreshData(prev => !prev);
    } catch (error) {
      console.error("Error adding/editing product:", error);
    }
  };

  const [productsArray, setProductsArray] = useState(null)
  const productsRef = collection(db, 'products');

  const deleteProducts = async (productId) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
      console.log("Product deleted Successfully!");
      setRefreshData(prev => !prev);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const clearProducts = async () => {
    const confirmed = window.confirm("Are you sure you want to delete all products?");
    if (confirmed) {
      try {
        const querySnapshot = await getDocs(productsRef);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        console.log("All products deleted successfully.");
        setRefreshData(prev => !prev);
      } catch (error) {
        console.error("Error deleting products:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getDocs(productsRef);
        setProductsArray(productsData);
      } catch (error) {
        console.log('Error Fetching Data', error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshData]);

  return (
    <div style={{marginBottom:"130px"}}  className="dashcontainer mx-auto text-center p-3">
      <Header/>
      <h1>Inventory List</h1>
      <Table className='table table-bordered table-hover  rounded  shadow mx-auto '>
        <thead className='table-info'>
          <tr >
            <th style={{ color: 'black' }}>Name of Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th colSpan={'2'}></th>
          </tr>
        </thead>
        <tbody className='table-stripped'>
          {productsArray && productsArray?.docs?.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.data().name}</td>
              <td>{doc.data().description}</td>
              <td>{doc.data().quantity}</td>
              <td>₹{doc.data().price}</td>
              <td onClick={() => editProduct(doc.id)}><i className="fa-regular fa-pen-to-square"></i></td>
              <td onClick={() => deleteProducts(doc.id)}><i className="fa-solid fa-trash"></i></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="buttonscontainer align-items-right justify-content-between">
        <Button variant="primary" onClick={handleShow}>
          Enter Product Details
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{formData.id ? "Edit Product" : "Add New Product"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={addOrUpdateProduct}>
              <Form.Group controlId="productName">
                <Form.Label>Name*</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter product name" required />
              </Form.Group>
              <Form.Group controlId="productDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Enter product description" />
              </Form.Group>
              <Form.Group controlId="productPrice">
                <Form.Label>Price*</Form.Label>
                <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter product price" required />
              </Form.Group>
              <Form.Group controlId="productQuantity">
                <Form.Label>Stock Quantity*</Form.Label>
                <Form.Control type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Enter product quantity" required />
              </Form.Group>
              <Button className='my-2 ' variant="secondary" onClick={handleClose}>Close</Button>
              <Button className='m-2' variant="primary" type="submit">{formData.id ? "Submit Edit" : "Add"}</Button>
            </Form>
          </Modal.Body>
        </Modal>
        <br />

        <Button className='my-3 btn btn-danger' onClick={clearProducts}>Clear All Products Data</Button>
      </div>

    </div>
  );
}

export default InventoryList;
