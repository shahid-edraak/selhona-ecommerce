import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Search from "../../assets/Search.png";
import { IoMenu } from "react-icons/io5";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const handleNavbarToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };
  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
    setNavbarOpen(false);
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
          <Link className="Navbar_links" to={"/services"}>
            Services
          </Link>
          <Link className="Navbar_links" to={"/project"}>
            Project
          </Link>
          <Link className="Navbar_links" to={"/contact"}>
            Contact
          </Link>
        </ul>

        <img
          src={Search}
          alt="search_logo"
          className="search-icon"
          onClick={handleSearchToggle}
        />

        {isSearchOpen && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        )}
      </div>

      <div className="mobile_menu">
        <IoMenu className="menu_class" onClick={handleNavbarToggle} />
        <div className="mobile_menu_div">
          {isNavbarOpen && (
            <ul>
              <Link className="Navbar_links" to={"/"}>
                Home
              </Link>

              <Link className="Navbar_links" to={"/pages"}>
                Pages
              </Link>
              <Link className="Navbar_links" to={"/services"}>
                Services
              </Link>
              <Link className="Navbar_links" to={"/project"}>
                Project
              </Link>
              <Link className="Navbar_links" to={"/contact"}>
                Contact
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
