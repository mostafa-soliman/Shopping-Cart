import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = props => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/home">
      Navbar
    </a> 
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link"  to="/home">
               Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/about">
               About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/contact">
               Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/card">
               ShoppingCard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/menus">
               Menus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/login">
               Login
            </NavLink>
          </li>
        </ul>
      </div>


    <span className="btn btn-primary">{props.productsCount}</span> 
</nav>
);
}
 
export default Navbar;
