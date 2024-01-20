import { IoTrashBinOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const WishListTable = () => {
  const wishListItems = useSelector((state) => state.wishList.products);
  console.log(wishListItems);
  return (
    <table>
      <thead className="bg-[#e9e9e9]">
        <tr className="h-[20px]">
          {["IMAGE", "PRODUCT", "PRICE", "PURCHASE", "REMOVE"].map(
            (head, index) => (
              <th key={index} className="p-1">
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
              <img
                src={item.itemImage}
                alt={item.itemTitle}
                className="w-full h-full object-contain"
              />
            </td>
            <td className="text-center  leading-[50%]">
              <b className="large-paragrapgh font-primary ">{item.itemTitle}</b>
            </td>
            <td className="text-center">
              <p className="large-paragrapgh font-primary">{item.itemPrice}</p>
            </td>
            <td>
              <button className="main-button font-secondary m-auto">
                Add To Cart
              </button>
            </td>
            <td>
              <button className="remove-button m-auto">
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
