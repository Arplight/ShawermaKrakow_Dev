// Hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Slices
import { fetchImages } from "../../redux/slices/imagesApiSlice";
import { fetchProducts } from "../../redux/slices/productsApiSlice";

// Components
import Slider from "./components/Slider/Slider";
import Reasons from "./components/Reasons/Reasons";
import Products from "./components/Products/Products";
import Quality from "./components/Quality/Quality";
import Mission from "./components/Mission/Mission";
import Clients from "./components/Clients/Clients";
import Instagram from "./components/Instagram/Instagram";

const Home = () => {
  const dispatchProducts = useDispatch();
  const dispatchImages = useDispatch();
  useEffect(() => {
    dispatchProducts(fetchProducts());
    dispatchImages(fetchImages());
  }, [dispatchImages, dispatchProducts]);
  return (
    <div className="home">
      {/* Slider */}
      <Slider />

      {/* Reasons */}
      <Reasons />

      {/* Products */}
      <Products />

      {/* Quality  */}
      <Quality />

      {/* Mission  */}
      <Mission />

      {/* Clients */}
      <Clients />

      {/* Instagram */}
      <Instagram />
    </div>
  );
};

export default Home;
