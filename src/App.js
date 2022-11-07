import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';

import Homepage from './Pges/Homepage';
import Collection from './Pges/Collection';
import Brand from './Pges/Brand'

function App() {
  return (
    <Router>
      <Navbar/>
    
      <Routes>
        {<Route path='/' element={<Homepage />}/>}
        {<Route path='/collection' element={<Collection/>}/>}
        {<Route path='/Brand' element={<Brand/>}/>}
      </Routes>
    </Router>
  );
}

export default App;
