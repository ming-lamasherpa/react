// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import BlogSection from './pages/BlogSection';
import DropYourCV from './pages/DropYourCV';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/career" element={<DropYourCV />} />
      </Routes>
    </>
  );
}

export default App;

