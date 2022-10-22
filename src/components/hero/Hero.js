import Nftcard from "../nftcard/Nftcard";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="first__hero">
        <h1>Discover a New Era <br/> 
        of Crypto Currency</h1>
        <p> Panda NFT is the primier marketplace for NFT, which are digital items you <br/>
         can truly own. Digital items have existed for a long time, but never  <br/> this</p>
         <button type="">Get Started</button>
      </div>
      <div className="first__hero">
        <Nftcard/>
      </div>
    </div>
  );
};

export default Hero;
