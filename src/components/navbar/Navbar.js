import "./navbar.scss";
import panda from "../../assets/Panda logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={panda} alt="" />
        <p>Panda NFT</p>
      </div>
      <div className="nav__links">
        <NavLink className='li' >Home</NavLink>
        <NavLink className='li' >Discover</NavLink>
        <NavLink className='li' >Docs</NavLink>
        <NavLink className='li' >Blog</NavLink>
        <NavLink className='li' >About Us</NavLink>
        <NavLink className='li' >Contact Us</NavLink>
      </div>
      <button type="">Connect Wallet</button>
    </div>
  );
};

export default Navbar;
