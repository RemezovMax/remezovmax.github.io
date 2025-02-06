import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Calculation from './pages/Calculation';
import Profile from './pages/Profile';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
  }, []);
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/conditions">Conditions</Link></li>
            <li><Link to="/calculation">Calculation</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/calculation" element={<Calculation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;