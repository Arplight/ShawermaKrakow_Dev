import QuantityButton from "../../../buttons/quantity_button/QuantityButton";
import PropTypes from "prop-types";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/slices/CartSlice";

const CartItem = ({
  itemImage,
  itemTitle,
  itemPrice,
  itemStockQuantity,
  itemTotalPrice,
  itemWeight,
  itemId,
}) => {
  const dispatchRemoveItem = useDispatch();
  return (
    <div className="flex gap-1 items-center relative">
      {/* Remove Button */}
      <button
        className="remove-button"
        onClick={() => dispatchRemoveItem(removeItem(itemId))}
      >
        <IoTrashBinOutline />
      </button>
      <span className="h-[200px] w-2/5 overflow-hidden ">
        <img
          src={itemImage}
          alt={itemTitle}
          className="w-full h-full object-contain  object-center "
        />
      </span>
      <span className="flex flex-col gap-0.5 w-3/5">
        <h3 className="font-primary">{itemTitle}</h3>
        <p className="small-paragrapgh font-primary">
          {itemWeight.toFixed(2).toLocaleString()} g
        </p>
        <b className="small-paragrapgh font-primary">
          ${itemPrice.toFixed(2).toLocaleString()}
        </b>
        <QuantityButton itemQuantity={itemStockQuantity} itemId={itemId} />
        <b className="small-paragrapgh font-primary">
          Total: ${itemTotalPrice.toFixed(2).toLocaleString()}
        </b>
      </span>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  itemImage: PropTypes.string,
  itemTitle: PropTypes.string,
  itemPrice: PropTypes.number,
  itemStockQuantity: PropTypes.number,
  itemTotalPrice: PropTypes.number,
  itemWeight: PropTypes.number,
  itemId: PropTypes.number,
};
