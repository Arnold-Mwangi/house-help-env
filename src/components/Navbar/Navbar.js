import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import logo from './assets/logo.png'
import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; {/* importing AiOutlineClose from react-icons/ai */ } 


function Navbar() {
    {/* state to determine if the menu is open or closed */ } 
  const [menuOpen, setMenuOpen] = useState(false);

  {/* state to determine if the sign up modal is open or closed */ } 
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [showLoginModal, setShowLoginModal] = useState(false);

   {/* function to toggle the menuOpen state when the menu button is clicked */ } 
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);  
  }

    {/* function to toggle the sign up modal state when the menu button is clicked */}
    const handleSignupModal = () => {
      setShowSignupModal(true);
    };

    const handleLoginClick = () => {
      setShowLoginModal(true);
    }
    const handleLoginClose = () => {
      setShowLoginModal(false);
    }

  return (
    <>
      <nav className="navbar">

        {/* company logo*/}
      <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>

         {/* Menu button */}
        <button className="menu-button" onClick={handleMenuClick}>
          {menuOpen ?  <AiOutlineClose /> : <AiOutlineMenu />}  {/* display close icon if menu is open : display menu icon if menu is closed*/} 
        </button> 
        {/* Menu items */}
        <ul className={`navbar-nav ${menuOpen ? 'active' : ''}`}>  {/* toggle active class depending on the menuOpen state */}
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
          </li>
          <li className="nav-item">
          <button className="signup-btn" onClick={handleSignupModal}>
            Sign up
            </button>
          </li>
        </ul>
        {showSignupModal && <Signup setShowModal={setShowSignupModal} />}
        {showLoginModal && <Login setShowModal={handleLoginClose} />}
      </nav>
    </>
  );
}

export default Navbar; {/* exporting the Navbar component */}
