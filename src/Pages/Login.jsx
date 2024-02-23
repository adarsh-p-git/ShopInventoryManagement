import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")
  const auth = getAuth();
  const navigate=useNavigate();
  const handleLogin=async(e)=>
  { e.preventDefault();
    const auth = getAuth();
    try{
      await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("login success")
    navigate('/dashboard')
    
  })
  .catch((error) => {
    setError(error.message);
  });
    } 
    catch(error)
    {
      console.log("error loggin in:",error)
    }

  }

  return (
    <div className="logincontainer container-lg text-center rounded" style={{ margin: '100px auto' }}>
      <img style={{ maxHeight: '200px' }} src="https://cdn.dribbble.com/users/3821672/screenshots/7172846/media/bdcf195a8ceaf94cd2e55ee274095c91.gif" alt="" />
      <div className="fields container mt-4">
        <Form onSubmit={handleLogin}>
          <Form.Group as={Col} xs={12} md={{ span: 6, offset: 3 }} controlId="formBasicEmail">
            <Form.Label>Login Here</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={{ span: 6, offset: 3 }} controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          

          <Button className="mt-2" variant="primary" type="submit" >
            Login
          </Button>
          <br />
          <Link className='text-muted mt-3' to='/register'><u>Don't have an account? Sign Up now</u></Link>
          <br />
          <Link className='text-muted mt-3' to='/'><u>Home</u></Link>

        </Form>
      </div>
    </div>
  );
}

export default Login;
