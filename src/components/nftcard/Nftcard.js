import "./nftcard.scss";
import nft1 from "../../assets/nft 1.png";
import fire from "../../assets/fire.png";
import owner1 from "../../assets/owner2.png";

const Nftcard = () => {
  return (
    <div className="card">
      <div className="card__img">
        <img className="img__nft" src={nft1} alt="" />
        <div className="timer">
          <img className="img__icon" src={fire} alt="" />
          <p>05 : 12 : 07 : 45</p>
        </div>
        <div className="card__content">
          <div className="card__title">
            <p>"Hamlet Contemplates ...</p>
            <button>BSc</button>
          </div>
          <div className="author">
            <img src={owner1} alt="" />
            <div className="author__text" >
              <div className="text__headers" >
                <p>Creator</p>
                <p>Current Bid</p>
              </div>
              <div className="text__details">
                <p>Salvador Dahli</p>
                <p>4.89ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftcard;
