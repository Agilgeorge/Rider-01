import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import skull from '../images/skull.png';
import { BrowserRouter } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar h-24 mt-7 bg-slate-950 rounded-md lg:rounded-lg md:rounded-md m-2 flex items-center justify-between px-4'>
        <img src={skull} alt="Skull Logo" className='h-44 w-44 ml-0 mt-4' /> 

        <div className='flex flex-grow justify-center space-x-24 text-white text-lg'>
          <Link to="/App" className='hover:text-gray-200 transition duration-300 ease-in-out'>Home</Link>
          <Link to="/Gallery" className='hover:text-gray-200 transition duration-300 ease-in-out'>Ride Gallery</Link>
          <Link to="/Review" className='hover:text-gray-200 transition duration-300 ease-in-out'>Ride Reviews</Link>
        </div>
      </div>
    );
  }
}





