import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import MainSection from "../../common/sections/main_section/MainSection";
import { fetchProducts } from "../../redux/store/ApiStore";
import WishListMobile from "./components/ WishListMobile";
import WishListTable from "./components/WishListTable";
import { useEffect } from "react";
import WishListEmpty from "./components/WishListEmpty";
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import Seo from "../../Seo/Seo";

const Wishlist = () => {
  const wishListItems = useSelector((state) => state.wishList.products);
  const dispatchWishList = useDispatch();
  const dispatchSpinner = useDispatch();
  useEffect(() => {
    dispatchWishList(fetchProducts());
  }, [dispatchWishList]);
  useEffect(() => {
    if (wishListItems) {
      dispatchSpinner(loadingHandler(false));
    } else {
      dispatchSpinner(loadingHandler(true));
    }
  }, [wishListItems, dispatchSpinner]);
  return (
    <div>
      {/* Seo */}
      <Seo currentPage={"Wishlist"} currentPath={"Wishlist"} />
      {/* BreadCrumbs */}
      <Breadcrumb />

      {/* WishList */}
      <MainSection withBackground={false} withStyle="">
        {wishListItems.length > 0 ? (
          <>
            <WishListTable />
            <WishListMobile />
          </>
        ) : (
          <WishListEmpty />
        )}
      </MainSection>
    </div>
  );
};

export default Wishlist;
