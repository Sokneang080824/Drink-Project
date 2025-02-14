import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBell, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="text-white bg-black">
      {/* Top Section: Logo, Search, Login, Sign-up */}
      <section className='container-fluid se-header'>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end py-3">

            {/* Search Bar */}
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input
                type="search"
                className="form-control focus-ring-none shadow-none"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            {/* Login and Sign-up Buttons */}
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-outline-light">Sign-up</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Navigation Menu */}
      <section className="container-fluid border-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            {/* Logo */}
            <Link to="/" style={{width:'100px', height:'70px'}} className="overflow-hidden d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none fs-2 me-auto">
              <img className='w-100 h-100' src="/logo.png" alt="" />
            </Link>

            {/* Toggle Button for smaller screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Collapsible Navigation Menu */}
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li className="nav-item">
                  <Link to="/menu" className="nav-link px-5 text-white position-relative">
                    Menu <FontAwesomeIcon icon={faCaretDown} className="ps-2" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/delivery" className="nav-link px-5 text-white">Delivery</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About_Us" className="nav-link px-5 text-white">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link px-5 text-white">Contact</Link>
                </li>
              </ul>

              {/* Cart and Notification Icons */}
              <div className="col-md-2 text-end">
                <Link to="/cart" className="px-3 fs-5 text-white">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <Link to="/notifications" className="px-3 fs-5 text-white">
                  <FontAwesomeIcon icon={faBell} />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;