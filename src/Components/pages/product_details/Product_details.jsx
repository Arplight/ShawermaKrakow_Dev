import { useDispatch } from "react-redux";
import useProducts from "../../hooks/useProducts";
import ProductSummary from "./components/product_summary/ProductSummary";
import RelatedProducts from "./components/related_products/RelatedProducts";
import { fetchProducts } from "../../redux/slices/productsApiSlice";
import { useEffect } from "react";
import { setCurrentProduct } from "../../redux/slices/CurrentProductSlice";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";

const Product_details = () => {
  const dispatchProducts = useDispatch();
  const dispatchCurrent = useDispatch();
  const products = useProducts();
  const { pathName } = useParams();
  useEffect(() => {
    dispatchProducts(fetchProducts());
  }, []);

  useEffect(() => {
    dispatchCurrent(
      setCurrentProduct({ productsData: products, targetPathName: pathName })
    );
  }, [products, pathName]);

  return (
    <div className="product-details">
      {/* BreadCrumbs */}
      <Breadcrumb />

      {/* Product summary */}
      <ProductSummary />

      {/* Related products */}
      <RelatedProducts />
    </div>
  );
};

export default Product_details;
