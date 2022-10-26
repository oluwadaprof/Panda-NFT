import "./discover.scss";
import { RiSearchLine } from "react-icons/ri";
import Nftcard from "../../components/nftcard/Nftcard";
import nft1 from "../../assets/nft 1.png";
import owner1 from "../../assets/owner2.png";
import nft2 from "../../assets/nft2.png";
import owner3 from "../../assets/owner3.png";
import nft3 from "../../assets/nft3.png";
import owner4 from "../../assets/owner4.png";

const Discover = () => {
  return (
    <div className="discover">
      <h5>Explore Collectibles</h5>
      <div className="search__container">
        <input placeholder="Type Your Keywords..." type="" name="" value="" />
        <div className="icon__container">
          <RiSearchLine className="icon" />
        </div>
      </div>
      <section>
        <div className="explore__header">
          <select>
            <option>Name</option>
            <option>Price</option>
            <option>Alphabet</option>
            <option>Popularity</option>
          </select>
          <div>
            <button>Music</button>
            <button>Art</button>
            <button>Sports</button>
            <button>Virtual</button>
            <button>Videos</button>
            <button>More</button>
          </div>
        </div>
        <div className="explore__content">
          <Nftcard creatorsImg={owner1} nftImg={nft1} />
          <Nftcard creatorsImg={owner3} nftImg={nft2} />
          <Nftcard creatorsImg={owner4} nftImg={nft3} />
          <Nftcard creatorsImg={owner1} nftImg={nft1} />
          <Nftcard creatorsImg={owner3} nftImg={nft2} />
          <Nftcard creatorsImg={owner4} nftImg={nft3} />
        </div>
        <button className="explore__btn">View More</button>
      </section>
    </div>
  );
};

export default Discover;
