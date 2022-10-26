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
        <NavLink to='/'  className='li' >Home</NavLink>
        <NavLink to='discover'  className='li' >Discover</NavLink>
        <NavLink to='docs'  className='li' >Docs</NavLink>
        <NavLink to='blog' className='li' >Blog</NavLink>
        <NavLink to='about'  className='li' >About Us</NavLink>
        <NavLink to='contact'  className='li' >Contact Us</NavLink>
      </div>
      <button type="">Connect Wallet</button>
    </div>
  );
};

export default Navbar;
