import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../common/cards/product_card/ProductCard";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import MainSection from "../../common/sections/main_section/MainSection";
import { fetchProducts } from "../../redux/store/ApiStore";
import WishListItemMobile from "./components/WishListItemMobile";
import WishListTable from "./components/WishListTable";
import { useEffect } from "react";

const Wishlist = () => {
  const dispatchWishList = useDispatch();
  useEffect(() => {
    dispatchWishList(fetchProducts());
  }, [dispatchWishList]);
  return (
    <div>
      {/* BreadCrumbs */}
      <Breadcrumb />

      {/* WishList */}
      <MainSection withBackground={false} withStyle="">
        <WishListTable />
      </MainSection>
    </div>
  );
};

export default Wishlist;
