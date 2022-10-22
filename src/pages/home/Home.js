import CreateNft from "../../components/createnft/CreateNft";
import Hero from "../../components/hero/Hero";
import "./home.scss";

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
    </div>
  );
};

export default Home;
