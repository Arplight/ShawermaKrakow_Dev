import { useDispatch, useSelector } from "react-redux";
import ProductSummary from "./components/product_summary/ProductSummary";
import RelatedProducts from "./components/related_products/RelatedProducts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import { fetchProducts } from "../../redux/store/ApiStore";
import { setTargetPathName } from "../../redux/slices/CurrentProductSlice";
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import Seo from "../../Seo/Seo";

const Product_details = () => {
  const dispatchCurrent = useDispatch();
  const dispatchProducts = useDispatch();
  const dispatchSpinner = useDispatch();
  const { pathName } = useParams();
  const productsState = useSelector((state) => state.productsApi.data);
  useEffect(() => {
    dispatchProducts(fetchProducts());
    dispatchCurrent(setTargetPathName(pathName));
  }, [pathName, dispatchCurrent, dispatchProducts]);
  useEffect(() => {
    if (productsState) {
      dispatchSpinner(loadingHandler(false));
    } else {
      dispatchSpinner(loadingHandler(true));
    }
  }, [productsState, dispatchSpinner]);
  return (
    <div className="product-details">
      {/* Seo */}
      <Seo currentPage={"Details"} currentPath={`Details/${pathName}`} />
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
