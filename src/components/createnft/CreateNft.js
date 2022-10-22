import "./createnft.scss";
import cnicon from "../../assets/Icon Placeholder.png";

const CreateNft = () => {
  return (
    <div className="createnft">
      <img src={cnicon} alt="" />
      <p>Set up your wallet</p>
      <p className="text__details" >Once you’ve set up your wallet of choice,<br/> 
      connect it to OpenSea by clicking the wallet <br/> 
      icon in the top right corner.</p>
    </div>
  );
};

export default CreateNft;
