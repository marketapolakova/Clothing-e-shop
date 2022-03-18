import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation/navigation.component';
import Homepage from './pages/homepage-component/homepage.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<h1>About</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
