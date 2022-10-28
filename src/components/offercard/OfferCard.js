import "./offercard.scss";
import check from "../../assets/Check.png";

const OfferCard = ({user__img}) => {
  return (
    <div className="offer__card">
      <div className="offer__img">
        <img className="jane" src={user__img} alt="" />
        <img className="check" src={check} alt="" />
      </div>
      <div className="offer__details">
        <div className="offer__header">
          <p>
            Mason Woodward <span>place a bid</span>
          </p>
          <p>4.98ETH</p>
        </div>
        <div className="offer__bottom">
          <p>8 hours ago</p>
          <p>=$12.576</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
