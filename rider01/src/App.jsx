import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Gallery from './assets/components/gallery';
import Review from './assets/components/review';
import coverimage from "./assets/images/coverimage.jpg";
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <img src={coverimage} className=' h-3/4 '/>
        <Routes>
          <Route path="/App" element={<App />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
