import React from 'react';
import {Badge} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='Navbar-Container'>
    <div className='Navbar-Wrapper'>
      <div className='Navbar-Left'>
        <div className='Navbar-Language'>EN</div>
        <div className='Navbar-SearchContainer'>
          <input className='Navbar-Input' placeholder="Search" /> 
          <Search style={{ color: "gray", fontSize: 16 }} /> 
        </div>
      </div>
      <div className='Navbar-Center'>
        <div className='Navbar-Logo'>QuickHome</div>
      </div>
      <div className='Navbar-Right'>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <div className='Navbar-MenuItem'>REGISTER</div>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className='Navbar-MenuItem'>SIGN IN</div>
        </Link>
        <div className='Navbar-MenuItem'>
        {/*  <Badge badgeContent={'0'} color="primary">
            
          </Badge> 
          */} 
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;

