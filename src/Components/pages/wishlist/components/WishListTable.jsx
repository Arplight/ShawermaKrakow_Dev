import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeWishListItem } from "../../../redux/slices/WishlistSlice";
import AddButton from "../../../common/buttons/add_button/AddButton";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const WishListTable = () => {
  const wishListItems = useSelector((state) => state.wishList.products);
  const dispatchRemoveWishListItem = useDispatch();

  return (
    <table className="hidden md:table">
      <thead className="bg-[#e9e9e9]">
        <tr className="h-[20px]">
          {["IMAGE", "PRODUCT", "PRICE", "PURCHASE", "REMOVE"].map(
            (head, index) => (
              <th key={index} className="p-[10px]">
                <h4 className="font-primary">{head}</h4>
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {wishListItems.map((item) => (
          <tr key={item.itemId}>
            <td>
              <Link to={`/Details/${item.itemTitle.replaceAll(" ", "-")}`}>
                <LazyLoad offset={200} className="h-[100px]">
                  <img
                    src={item.itemImage}
                    alt={item.itemTitle}
                    className="w-full h-full object-contain"
                  />
                </LazyLoad>
              </Link>
            </td>
            <td className="text-center flex items-center justify-center">
              <b className="large-paragrapgh font-primary ">{item.itemTitle}</b>
            </td>
            <td className="text-center ">
              <p className="large-paragrapgh font-primary">
                ${item.itemPrice.toFixed(2).toLocaleString()}
              </p>
            </td>
            <td>
              <AddButton
                summaryQuantity={null}
                productId={item.itemId}
                withStyle={"m-auto"}
                currentProductName={item.itemTitle}
              />
            </td>
            <td className="flex items-center justify-center">
              <button
                className="remove-button"
                onClick={() =>
                  dispatchRemoveWishListItem(removeWishListItem(item.itemId))
                }
              >
                <IoTrashBinOutline />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WishListTable;
