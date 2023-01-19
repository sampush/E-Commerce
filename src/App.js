import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Homepage from './Pges/Homepage';
import Collection from './Pges/Collection';
import Brand from './Pges/Brand';
import Contact from './Pges/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
    
      <Routes>
        {<Route path='/' element={<Homepage />}/>}
        {<Route path='/collection' element={<Collection/>}/>}
        {<Route path='/Brand' element={<Brand/>}/>}
        {<Route path='/Contact' element={<Contact/>}/>}
      </Routes>
    </Router>
  );
}

export default App;
