import { Routes, Route} from "react-router-dom";
import Discover from "../pages/discover/Discover";
import Home from "../pages/home/Home";
import ProductPage from "../pages/productpage/ProductPage";
import DocsPage from "../pages/docs/DocsPage";
import Blog from '../pages/blog/Blog'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'


const CreateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="productpage" element={<ProductPage/>} />
      <Route path="discover" element={<Discover/>} />
      <Route path="docs" element={<DocsPage/>} />
      <Route path="blog" element={<Blog/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
  );
};

export default CreateRoutes;
