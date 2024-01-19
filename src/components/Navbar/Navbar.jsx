import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Search from "../../assets/Search.png";
import { IoMenu } from "react-icons/io5";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="navbar">
      <div className="img_logo">
        <img src={logo} alt="Logo" />
        <h2>SELHONO</h2>
      </div>
      <div className="navbar-content">
        <ul>
          <Link className="Navbar_links" to={"/"}>
            Home
          </Link>

          <Link className="Navbar_links" to={"/pages"}>
            Pages
          </Link>
          <li>Services</li>
          <li>Project</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <img src={Search} alt="search_logo" />
      </div>
      <div className="mobile_menu">
        <IoMenu className="menu_class" onClick={handleNavbarToggle} />
        <div className="mobile_menu_div">
          {isNavbarOpen && (
            <ul>
              <li>Home</li>
              <li>Pages</li>
              <li>Services</li>
              <li>Project</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
