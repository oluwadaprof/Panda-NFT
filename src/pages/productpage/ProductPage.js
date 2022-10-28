import { useState } from "react";
import "./productpage.scss";
import seagull from "../../assets/seagull.png";
import fire from "../../assets/fire.png";
import owner2 from "../../assets/owner2.png";
import owner3 from "../../assets/owner3.png";
import OfferCard from "../../components/offercard/OfferCard";
import jenny from "../../assets/jenny.png";
import jane from "../../assets/jane.png";
import darlene from "../../assets/darlene.png";
import mason from "../../assets/mason.png";
import PriceChart from "../../components/chart/Chart";
import Nftcard from '../../components/nftcard/Nftcard'

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("descriptions");
  return (
    <div className="productpage">
      <div className="profile">
        <div className="img__container">
          <img className="profile__img" src={seagull} alt="nft" />
          <div className="timer">
            <img className="img__icon" src={fire} alt="" />
            <p>05 : 12 : 07 : 45</p>
          </div>
        </div>
        <div className="profile__details">
          <h1>#1119 Seagull</h1>
          <p className="details__text">
            The Birdhouse is a collection of 6000 birds, each with it's own
            unique <br />
            traits & personality. See them all at TheBirdHouse.app
          </p>
          <div className="price__details">
            <div className="first">
              <p className="header">Price Bid</p>
              <p className="price">10.89ETH</p>
            </div>
            <div className="last">
              <p className="header">Last Bid</p>
              <p className="price">10.89ETH</p>
            </div>
          </div>
          <div className="owner__container">
            <div className="owner__card">
              <img className="owner__image1" src={owner2} alt="owner card" />
              <div>
                <h3 className="">Creator</h3>
                <p>Salvador Dali</p>
              </div>
            </div>
            <div className="owner__card2">
              <img className="owner__image2" src={owner3} alt="owner card2" />
              <div>
                <h3>Owner</h3>
                <p>Salvador Dali</p>
              </div>
            </div>
          </div>
          <div className="grouped__btn">
            <button className="btn1">Purchase Now</button>
            <button className="btn2">Place a bid</button>
          </div>
        </div>
      </div>
      <div className="nft__description">
        <div className="header__btn">
          <button
            onClick={() => setActiveTab("descriptions")}
            className={activeTab === "descriptions" ? "btn2" : "btn__nostyle"}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("offers")}
            className={activeTab === "offers" ? "btn2" : "btn__nostyle"}
          >
            Offers
          </button>
          <button
            onClick={() => setActiveTab("price")}
            className={activeTab === "price" ? "btn2" : "btn__nostyle"}
          >
            Price History
          </button>
        </div>
        {activeTab === "descriptions" && (
          <div className="description">
            <p className="description__one">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia <br />
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.
            </p>
            <div className="wallet">
              <p className="wallet__header">Contact Address</p>
              <p className="wallet__details">0x49cf...a28b</p>
            </div>
            <div className="wallet">
              <p className="wallet__header">Token ID</p>
              <p className="wallet__details">4133</p>
            </div>
            <div className="wallet">
              <p className="wallet__header">Token Standard</p>
              <p className="wallet__details">ERC-721</p>
            </div>
            <div className="wallet">
              <p className="wallet__header">Blockchain</p>
              <p className="wallet__details">Ethereum</p>
            </div>
          </div>
        )}
        {activeTab === "offers" && (
          <div className="offers">
            <div>
              <OfferCard user__img={jane} />
              <OfferCard user__img={darlene} />
              <OfferCard user__img={jane} />
              <OfferCard user__img={darlene} />
            </div>
            <div>
              <OfferCard user__img={mason} />
              <OfferCard user__img={jenny} />
              <OfferCard user__img={mason} />
              <OfferCard user__img={jenny} />
            </div>
          </div>
        )}
        {activeTab === "price" && (
          <div className="price__history">
            <PriceChart />
          </div>
        )}
      </div>
      {/* <section>
      <div className="anotherNft__header">
          <h2>Featured Artist</h2>
          <button>View More</button>
        </div>
        <div className="anotherNft__content">
          <Nftcard/>
        </div>
      </section> */}
    </div>
  );
};

export default ProductPage;
