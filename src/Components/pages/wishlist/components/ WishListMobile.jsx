import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "../../../common/buttons/add_button/AddButton";
import { removeWishListItem } from "../../../redux/slices/WishlistSlice";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { FadeLoader } from "react-spinners";
import { useState } from "react";

const WishListMobile = () => {
  const wishListItems = useSelector((state) => state.wishList.products);
  const dispatchRemoveWishListItem = useDispatch();
  // loadingState
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <ul className="grid md:hidden w-full gap-1 grid-cols-1 sm:grid-cols-2">
      {wishListItems &&
        [...wishListItems].reverse().map((item) => (
          <li
            className="flex flex-col gap-1 items-center justify-center border-[1px] border-[#12342f2c] p-1 max-w-[300px] m-auto "
            key={item.itemId}
          >
            <div className="border-b-[1px] border-b-[#12342f2c] relative min-w-[200px] min-h-[200px]">
              <Link to={`/Details/${item.itemTitle.replaceAll(" ", "-")}`}>
                <LazyLoad offset={200}>
                  <img
                    src={item.itemImage}
                    alt={item.itemTitle}
                    className="w-full h-full object-contain "
                    onLoad={() => setIsLoaded(true)}
                  />
                </LazyLoad>
              </Link>
              {!isLoaded && (
                <FadeLoader
                  color="#12342f"
                  cssOverride={{
                    position: "absolute",
                    top: "50%",
                    left: "48%",
                  }}
                />
              )}
            </div>
            <Link
              to={`/Details/${item.itemTitle.replaceAll(" ", "-")}`}
              className="leading-[normal]"
            >
              <b className="large-paragrapgh font-primary">{item.itemTitle}</b>
            </Link>

            <p className="large-paragrapgh font-primary ">
              {item.itemPrice.toFixed(2).toLocaleString()}
            </p>
            <AddButton
              withStyle={"m-auto"}
              productId={item.itemId}
              summaryQuantity={null}
              currentProductName={item.itemTitle}
            />
            <button
              className="remove-button"
              onClick={() =>
                dispatchRemoveWishListItem(removeWishListItem(item.itemId))
              }
            >
              <IoTrashBinOutline />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default WishListMobile;
