import React from "react";
// import { Link } from 'react-router-dom'
import {  NavLink } from "react-router-dom";
//navbar ma current page kayu 6 tene diffrent color aapva maate === NavLink
//NavLink j page active hsse te page prr
//          className="active"
//add krseee etle pachi css thi color change thaai
// <NavLink to="/" end>Home</NavLink>
// vachhe "end" lakhwaa nu jenaa thi Home always active nai reiiiiiiiii

//==================================================================================

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
           <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/" end>
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/user/krutik1234">UserId</NavLink>
            {/* /user/:id */}
          </li>
          <li>
            <NavLink to="/user/1234/krutikbundela">UserId And UserName</NavLink>
            {/* /user/:id/:name */}
          </li>

          <li>
            <NavLink to="/pricing" state={{ shirt: 5000 }}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth">Authenticated</NavLink>
          </li>
        </ul>
      </nav>

      {/* <hr /><hr />
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <NavLink to="/" end>Home</NavLink>

            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav> */}
    </header>
  );
};

export default Navbar;
