import { useState } from "react";
import "./navbar.scss";
import panda from "../../assets/Panda logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="navbar">
      <div className="logo">
        <img src={panda} alt="" />
        <p>Panda NFT</p>
      </div>
      <div className="nav__links">
        <NavLink
          onClick={() => setActiveNav("home")}
          to="/"
          className={activeNav === "home" ? "active" : "li"}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setActiveNav("discover")}
          to="discover"
          className={activeNav === "discover" ? "active" : "li"}
        >
          Discover
        </NavLink>
        <NavLink
          onClick={() => setActiveNav("docs")}
          to="docs"
          className={activeNav === "docs" ? "active" : "li"}
        >
          Docs
        </NavLink>
        <NavLink
          onClick={() => setActiveNav("blog")}
          to="blog"
          className={activeNav === "blog" ? "active" : "li"}
        >
          Blog
        </NavLink>
        <NavLink
          onClick={() => setActiveNav("about")}
          to="about"
          className={activeNav === "about" ? "active" : "li"}
        >
          About Us
        </NavLink>
        <NavLink
          onClick={() => setActiveNav("contact")}
          to="contact"
          className={activeNav === "contact" ? "active" : "li"}
        >
          Contact Us
        </NavLink>
      </div>
      <button type="">Connect Wallet</button>
    </div>
  );
};

export default Navbar;
