import "./artistcard.scss";

import eth from '../../assets/eth.png'
import { TbCurrencyEthereum } from "react-icons/tb";

const ArtistCard = ({owner, ethimg}) => {
  return (
    <div className="artistcard">
      <img src={ethimg} alt="" />
      <img className="owner" src={owner} alt="" />
      <p>CryptoPunks</p>
      <div>
        <p>818.7k</p>
        <img className="icon" src={eth} alt="" />
      </div>
    </div>
  );
};

export default ArtistCard;
