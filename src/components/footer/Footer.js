import "./footer.scss";
import panda from "../../assets/Panda logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__one" >
        <div className="logo__footer">
          <img src={panda} alt="" />
          <p>Panda NFT</p>
        </div>
        <p className="fone__text" >
          The world’s first and largest digital marketplace
          <br />
          for crypto collectibles and non-fungible tokens
          <br />
          (NFTs). Buy, sell, and discover exclusive digital
          <br />
          items.
        </p>
        <p className="reserved" >2022 All Rights Reserved</p>
      </div>

      <div className="footer__two" >
        <h4>Resources</h4>
        <ul>
          <li>Help Center</li>
          <li>Platform Status</li>
          <li>Partners</li>
          <li>Gas-Free Marketplace</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer__three">
        <h4>Company</h4>
        <ul>
          <li>Our Team</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="footer__four" >
        <h4>Contact</h4>
        <p>
          2715 Ash Dr. San Jose,
          <br />
          South Dakota 83475
        </p>
      </div>
    </div>
  );
};

export default Footer;
