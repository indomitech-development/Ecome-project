import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '../../../node_modules/@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Navbar = () => {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="images/en.png" width="20" height="20"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mt-2">
       <span>USD</span>
       <KeyboardArrowDownIcon />
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/product/1">Men</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link" to="/product/2">Women</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link" to="/product/3">Children</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link" to="/">Accessories</Link>
         
        </li>
      <div className=' text-center' style={{width:'350px'}} >
      <li className="nav-item ">
        <Link className="nav-link" to="/product/1">Store</Link>
        </li>
      </div>
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Link className="nav-link" to="/product/1">HomePage</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link" to="/product/1">About</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link" to="/product/1">Contact</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link" to="/product/1">Stores</Link>
        </li>
        <li className="nav-item mt-2">
        <SearchOutlinedIcon />
        </li>
        <li className="nav-item ms-2 mt-2">
        <PersonOutlineOutlinedIcon />
        </li>
        <li className="nav-item ms-2 mt-2">
        <FavoriteBorderOutlinedIcon />
        </li>
        <li className="nav-item ms-2 mt-2 position-relative">
        <ShoppingCartOutlinedIcon />
        <span className='bg-primary  w-75 h-75 position-absolute rounded-circle d-flex justify-content-center align-item-center text-white ' style={{top:'-10px',right:'-10px'}}>0</span>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
