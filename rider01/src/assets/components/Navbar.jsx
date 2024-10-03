import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import skull from '../images/skull.png'; // Import the logo

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar h-24 mt-7 bg-slate-950 rounded-md lg:rounded-lg md:rounded-md m-2 flex items-center justify-between px-4'>
        <img src={skull} alt="Skull Logo" className='h-44 w-44 ml-0 mt-4' />

        <div className='flex flex-grow justify-center space-x-24 text-white text-lg'>
          {/* Use the correct paths that match your routing */}
          <Link to="/App" className='hover:text-gray-400 font-arsenal'>HOME</Link>
          <Link to="/gallery" className='hover:text-gray-400 font-arsenal'>RIDE_GALLERY</Link> {/* Corrected path to "/gallery" */}
          <Link to="/review" className='hover:text-gray-400 font-arsenal'>RIDE_REVIEWS</Link>
        </div>
      </div>
    );
  }
}
