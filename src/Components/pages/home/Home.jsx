// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Slices
import { fetchImages, fetchProducts } from "../../redux/store/ApiStore";
// Reducer
import { loadingHandler } from "../../redux/slices/SpinnerSlice";

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
  const dispatchSpinner = useDispatch();
  const products = useSelector((state) => state.productsApi.data);
  const images = useSelector((state) => state.imagesApi.data);
  useEffect(() => {
    dispatchProducts(fetchProducts());
    dispatchImages(fetchImages());
  }, [dispatchImages, dispatchProducts, dispatchCart]);
  // PreLoading Spinner
  useEffect(() => {
    if (products && images) {
      dispatchSpinner(loadingHandler(false));
    } else {
      dispatchSpinner(loadingHandler(true));
    }
  }, [dispatchSpinner, products, images]);
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
