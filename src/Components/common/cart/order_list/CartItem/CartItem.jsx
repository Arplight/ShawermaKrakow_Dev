import QuantityButton from "../../../buttons/quantity_button/QuantityButton";
import PropTypes from "prop-types";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { blockerSetter } from "../../../../redux/slices/BlockerSlice";
import { cartRemove, fetchCart } from "../../../../redux/store/ApiStore";
import { toast } from "react-toastify";

const CartItem = ({
  itemImage,
  itemTitle,
  itemPrice,
  itemStockQuantity,
  itemTotalPrice,
  itemWeight,
  itemId,
}) => {
  const dispatchBlocker = useDispatch();
  const dispatchCart = useDispatch();
  // Toastifier
  const ToastRemove = () => {
    toast.success("Cart updated successfully");
  };
  // Remove Handler
  async function removeFromCart() {
    try {
      await cartRemove(itemId);
      dispatchCart(fetchCart());
      ToastRemove();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex gap-1 items-center relative">
      {/* Remove Button */}
      <button
        className="remove-button absolute left-0 top-0"
        onClick={removeFromCart}
      >
        <IoTrashBinOutline />
      </button>
      <span className="h-[200px] w-2/5 overflow-hidden ">
        <Link
          to={`/Details/${itemTitle && itemTitle.replaceAll(" ", "-")}`}
          onClick={() => dispatchBlocker(blockerSetter(null))}
        >
          <LazyLoad offset={100} className="w-full h-full ">
            <img
              src={itemImage}
              alt={itemTitle}
              className="w-full h-full object-contain  object-center "
            />
          </LazyLoad>
        </Link>
      </span>
      <span className="flex flex-col gap-0.5 w-3/5">
        <h3 className="font-primary">{itemTitle}</h3>
        <p className="small-paragrapgh font-primary">
          {itemWeight && itemWeight.toFixed(2).toLocaleString()} g
        </p>
        <b className="small-paragrapgh font-primary">
          ${itemPrice && itemPrice.toFixed(2).toLocaleString()}
        </b>
        <QuantityButton itemStockQuantity={itemStockQuantity} itemId={itemId} />
        <b className="small-paragrapgh font-primary">
          Total: ${itemTotalPrice && itemTotalPrice.toFixed(2).toLocaleString()}
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
