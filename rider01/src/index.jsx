import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to use createRoot
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import App from './App';
import './index.css';
import Gallery from './assets/components/gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <App/>
  </Router>
);


