import { Routes, Route} from "react-router-dom";
import Discover from "../pages/discover/Discover";
import Home from "../pages/home/Home";
import ProductPage from "../pages/productpage/ProductPage";


const CreateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="productpage" element={<ProductPage/>} />
      <Route path="discover" element={<Discover/>} />
      {/* <Route path="offer" element={<Offer />} />
      <Route path="productview" element={<ProductView />} /> */}
    </Routes>
  );
};

export default CreateRoutes;
