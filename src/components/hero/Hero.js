import Nftcard from "../nftcard/Nftcard";
import "./hero.scss";
import halfcard from '../../assets/half card.png'
import binance from '../../assets/binance.png'
import coinbase from '../../assets/coinbase.png'
import metamask from '../../assets/metamask.png'
import tokyocrypto from '../../assets/tokyocrypto.png'
import trustwallet from '../../assets/trust wallet.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__main" >
      <div className="first__hero">
        <h1>Discover a New Era <br/> 
        of Crypto Currency</h1>
        <p> Panda NFT is the primier marketplace for NFT, which are digital items you <br/>
         can truly own. Digital items have existed for a long time, but never  <br/> this</p>
         <button type="">Get Started</button>
      </div>
      <div className="second__hero">
        <Nftcard/>
        <img className="halfcard" src={halfcard} alt=""/>
      </div>
      </div>
      
      <div className="sponsors" >
        <img src={binance} alt=""/>
        <img src={trustwallet} alt=""/>
        <img src={tokyocrypto} alt=""/>
        <img src={coinbase} alt=""/>
        <img src={metamask} alt=""/>
      </div>
    </div>
  );
};

export default Hero;
