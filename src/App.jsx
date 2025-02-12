import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DemoBookingPage from './components/DemoBookingPage'; 
import BlogPage from './components/BlogPage';
import Navbar from './components/Navbar'; // Import Navbar
import BlogDetails from "./components/BlogDetails";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar outside of the Routes so it's always displayed */}
      <Routes>
        <Route path="/" element={<DemoBookingPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        {/* You can add a default route for a landing page or a 404 page */}
        <Route path="*" element={<h1>Welcome to Quicklenda</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
