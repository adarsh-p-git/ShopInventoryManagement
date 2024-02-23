
import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useHistory, useNavigate } from 'react-router-dom'; // Import useHistory hook

function Register() {
  const [email, setEmail] = useState('');
  const [storeName, setStoreName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // Redirect to another page after successful registration
          navigate('/login'); // Redirect to Inventory page using useNavigate
        }).catch((error) => {
          // Registration failed
          setError(error.message);
        });
      }
      catch(error)
      {
        console.error('Error registering user',error)
      }

    }

    return (
      <div>
        <div className="registercontainer container-lg text-center rounded" style={{ margin: '100px auto' }}>
          <img className='rounded' style={{ maxHeight: '200px' }} src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/alaminxyz.gif" alt="" />
          <div className="fields container mt-4">
            <Form onSubmit={handleRegister}>
              <Form.Group className='mt-2' as={Col} xs={12} md={{ span: 6, offset: 3 }} controlId="formBasicEmail">
                <Form.Label>Register Here</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group className='mt-2'  as={Col} xs={12} md={{ span: 6, offset: 3 }} controlId="formBasicStoreName">
                <Form.Control type="text" placeholder="Enter store name" value={storeName} onChange={(e) => setStoreName(e.target.value)} required />
              </Form.Group>
              <Form.Group className='mt-2'  as={Col} xs={12} md={{ span: 6, offset: 3 }} controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              {error && <p className="text-danger">{error}</p>}
              <Button className="mt-2" variant="primary" type="submit">Submit</Button>
              <br />
              <Link className='text-muted mt-3' to='/login'><u>Already have an account? Sign In</u></Link>
              <br />
          <Link className='text-muted mt-3' to='/'><u>Home</u></Link>
            </Form>
          </div> 
        </div>
      </div>
    );
  }

  export default Register;
