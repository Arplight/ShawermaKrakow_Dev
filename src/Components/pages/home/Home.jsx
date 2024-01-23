// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Slices
import {
  fetchImages,
  fetchProducts,
  fetchCart,
} from "../../redux/store/ApiStore";

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
  const dispatchCart = useDispatch();
  useEffect(() => {
    dispatchProducts(fetchProducts());
    dispatchImages(fetchImages());
    dispatchCart(fetchCart());
  }, [dispatchImages, dispatchProducts, dispatchCart]);
  const response = useSelector((state) => state.cart.cartItems);
  console.log("response", response);
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
