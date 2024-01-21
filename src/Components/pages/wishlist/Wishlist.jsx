import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import MainSection from "../../common/sections/main_section/MainSection";
import { fetchProducts } from "../../redux/store/ApiStore";
import WishListMobile from "./components/ WishListMobile";
import WishListTable from "./components/WishListTable";
import { useEffect } from "react";
import WishListEmpty from "./components/WishListEmpty";

const Wishlist = () => {
  const wishListItems = useSelector((state) => state.wishList.products);

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
