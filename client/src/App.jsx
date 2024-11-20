import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import Tokyo from './pages/Tokyo/Tokyo'
import Itineraries from './pages/Itineraries/Itineraries';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('accessToken')));

  useEffect(() => {
    const checkToken = () => {
      setIsLoggedIn(Boolean(localStorage.getItem('accessToken')));
    };
    checkToken();
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/tokyo" element={<Tokyo />} />
        <Route path="/itineraries" element={<Itineraries />} />
      </Routes>
    </Router>
  );
}

export default App;
