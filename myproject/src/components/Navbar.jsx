import React from 'react';
import { Link } from 'react-router-dom';

import CartWidget from '../components/CartWidget';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>Carpishop</h1>

      <ul className='menu'>
        <Link to={'./'}>
          <li className='menu-link'>Productos</li>
        </Link>

        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
