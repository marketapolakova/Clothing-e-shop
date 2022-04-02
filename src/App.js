import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation/navigation.component';
import Homepage from './pages/homepage-component/homepage.component';
import SignIn from './pages/authentication/authentication';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<Shop/>} />
          <Route path="auth" element={<SignIn/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
