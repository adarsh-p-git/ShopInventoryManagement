
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import InventoryList from './Pages/InventoryList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import "./bootstrap.min.css"
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/inventory" element={<InventoryList/>}/>
        <Route path="/dashboard" element={<Dashboard/>} ></Route>
      </Routes>
      <Footer className="footer fixed-bottom mt-5"/>
    </div>
  );
}

export default App;
