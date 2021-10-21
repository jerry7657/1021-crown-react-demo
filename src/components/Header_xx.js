import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../assets/crown.svg'
import './Header_xx.scss'

const Header_xx = () => {
  return (
    <div>
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>
        <div className='options'>
          <Link to='/shop_xx' className='option'>
            Shop
          </Link>
          <Link to='/contact_xx' className='option'>
            Contact
          </Link>
          <Link to='/signin_xx' className='option'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_xx;
