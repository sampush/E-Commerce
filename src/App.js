import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Profile from './Component/Profilee/Profile';
import Duties from './Component/Duties/Duties';
import New from './Component/New/New';
import Iconics from './Component/Iconics/Iconics';
import Collaboration from './Component/Collaboration/Collaboration';
import Men from './Component/Men/Men';

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <Profile/>
      <Duties/>
      <New/>
      <Iconics/>
      <Collaboration/>
      <Men/>
      <Routes>
        <Route path=''></Route>
      </Routes>
    </Router>
  );
}

export default App;
