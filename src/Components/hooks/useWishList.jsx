import { useSelector } from "react-redux";
const useWishList = (itemId = null) => {
  const wishListItems = useSelector((state) => state.wishList.products);
  const isFoundedInWishList = wishListItems.some(
    (item) => item.itemId === itemId
  );
  return { isFoundedInWishList };
};

export default useWishList;
