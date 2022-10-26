import CreateNft from "../../components/createnft/CreateNft";
import Hero from "../../components/hero/Hero";
import Nftcard from "../../components/nftcard/Nftcard";
import "./home.scss";
import nft1 from "../../assets/nft 1.png";
import owner1 from "../../assets/owner2.png";
import nft2 from "../../assets/nft2.png";
import owner3 from "../../assets/owner3.png";
import nft3 from "../../assets/nft3.png";
import owner4 from "../../assets/owner4.png";
import ArtistCard from "../../components/featuredartistcard/ArtistCard";
import artistImg1 from "../../assets/cryptopunk.png";
import artistImg1owner from "../../assets/cryptopunkowner.png";
import artistImg2 from "../../assets/doodles.png";
import artistImg2owner from "../../assets/doodlesowner.png";
import artistImg3 from "../../assets/boredape.png";
import artistImg3owner from "../../assets/boredapeowner.png";
import artistImg4 from "../../assets/capsulehouse.png";
import artistImg4owner from "../../assets/capsulehouseowner.png";

const Home = () => {
  return (
    <div className="home">
      <section>
        <Hero />
      </section>
      <section>
        <h2>
          Create And Sell Your <br /> NFTs
        </h2>
        <div className="card__container">
          <CreateNft />
          <CreateNft />
          <CreateNft />
        </div>
      </section>
      <section>
        <div className="auction__header">
          <h2>Live Auctions</h2>
          <button>View More</button>
        </div>
        <div className="auction__content">
          <Nftcard creatorsImg={owner1} nftImg={nft1} />
          <Nftcard creatorsImg={owner3} nftImg={nft2} />
          <Nftcard creatorsImg={owner4} nftImg={nft3} />
        </div>
      </section>
      <section>
        <div className="featured__header">
          <h2>Featured Artist</h2>
          <button>View More</button>
        </div>
        <div className="featured__content">
          <ArtistCard ethimg={artistImg1} owner={artistImg1owner} />
          <ArtistCard ethimg={artistImg2} owner={artistImg2owner} />
          <ArtistCard ethimg={artistImg3} owner={artistImg3owner} />
          <ArtistCard ethimg={artistImg4} owner={artistImg4owner} />
        </div>
      </section>
      <section>
        <div className="hotnft__header">
          <h2>Hot NFTs</h2>
          <div>
            <button>Music</button>
            <button>Art</button>
            <button>Sports</button>
            <button>Virtual</button>
            <button>Videos</button>
            <button>More</button>
          </div>
        </div>
        <div className="hotnft__content">
          <Nftcard creatorsImg={owner1} nftImg={nft1} />
          <Nftcard creatorsImg={owner3} nftImg={nft2} />
          <Nftcard creatorsImg={owner4} nftImg={nft3} />
          <Nftcard creatorsImg={owner1} nftImg={nft1} />
          <Nftcard creatorsImg={owner3} nftImg={nft2} />
          <Nftcard creatorsImg={owner4} nftImg={nft3} />
        </div>
        <button className="hotnft__btn">View More</button>
      </section>

      <section  >
        <div className="community">
          <h2>Create Your Own NFT!</h2>
          <p className="community__text" >We have a large scale group to support each other in this game, Join us to get the news as soon <br/>
          as possible and follow our latest announcements!</p>
          <button className="community__btn">Join Community Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
