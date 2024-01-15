import QuantityButton from "../../../buttons/quantity_button/QuantityButton";
import PropTypes from "prop-types";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../../../redux/slices/CartSlice";
import { Link } from "react-router-dom";

const CartItem = ({
  itemImage,
  itemTitle,
  itemPrice,
  itemStockQuantity,
  itemTotalPrice,
  itemWeight,
  itemId,
}) => {
  const dispatchRemoveCartItem = useDispatch();
  return (
    <div className="flex gap-1 items-center relative">
      {/* Remove Button */}
      <button
        className="remove-button"
        onClick={() => dispatchRemoveCartItem(removeCartItem(itemId))}
      >
        <IoTrashBinOutline />
      </button>
      <span className="h-[200px] w-2/5 overflow-hidden ">
        <Link to={`/Details/${itemTitle.replaceAll(" ", "-")}`}>
          <img
            src={itemImage}
            alt={itemTitle}
            className="w-full h-full object-contain  object-center "
          />
        </Link>
      </span>
      <span className="flex flex-col gap-0.5 w-3/5">
        <h3 className="font-primary">{itemTitle}</h3>
        <p className="small-paragrapgh font-primary">
          {itemWeight.toFixed(2).toLocaleString()} g
        </p>
        <b className="small-paragrapgh font-primary">
          ${itemPrice.toFixed(2).toLocaleString()}
        </b>
        <QuantityButton itemStockQuantity={itemStockQuantity} itemId={itemId} />
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
