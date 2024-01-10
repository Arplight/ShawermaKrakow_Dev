import { useDispatch } from "react-redux";
import useProducts from "../../hooks/useProducts";
import ProductGallery from "./components/product_gallery/ProductGallery";
import ProductInfo from "./components/product_info/ProductInfo";
import ProductTabs from "./components/product_tabs/ProductTabs";
import RelatedProducts from "./components/related_products/RelatedProducts";
import { fetchProducts } from "../../redux/slices/productsApiSlice";
import { useEffect } from "react";
import { setCurrentProduct } from "../../redux/slices/CurrentProductSlice";
import { useParams } from "react-router-dom";
const Product_details = () => {
  const dispatchProducts = useDispatch();
  const dispatchCurrent = useDispatch();
  const products = useProducts();
  const { id } = useParams();
  useEffect(() => {
    dispatchProducts(fetchProducts());
  }, []);

  useEffect(() => {
    dispatchCurrent(
      setCurrentProduct({ productsData: products, targetId: Number(id) })
    );
  }, [products]);

  return (
    <div className="product-details">
      <ProductGallery />
      <ProductInfo />
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
};

export default Product_details;
