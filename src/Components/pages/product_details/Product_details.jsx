import { useDispatch } from "react-redux";
import ProductSummary from "./components/product_summary/ProductSummary";
import RelatedProducts from "./components/related_products/RelatedProducts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import { fetchProducts } from "../../redux/store/ApiStore";
import { setTargetPathName } from "../../redux/slices/CurrentProductSlice";

const Product_details = () => {
  const dispatchCurrent = useDispatch();
  const { pathName } = useParams();
  useEffect(() => {
    dispatchCurrent(fetchProducts());
    dispatchCurrent(setTargetPathName(pathName));
  }, [pathName]);

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
