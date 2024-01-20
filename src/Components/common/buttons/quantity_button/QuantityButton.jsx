import { useEffect, useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../../redux/slices/CartSlice";
import useCart from "../../../hooks/useCart";

const QuantityButton = ({ itemStockQuantity, itemId, itemSummaryQuantity }) => {
  const { isFoundedInCart, itemGlobalQuantity } = useCart(itemId);
  const [localQuantity, setLocalQuantity] = useState(itemGlobalQuantity || 1);
  const dispatchUpdateItem = useDispatch();
  const currentQuantity = isFoundedInCart ? itemGlobalQuantity : localQuantity;

  useEffect(() => {
    if (itemSummaryQuantity && !isFoundedInCart) {
      itemSummaryQuantity(localQuantity);
    }
  }, [localQuantity, itemSummaryQuantity, isFoundedInCart]);

  const updateQuantity = (newQuantity) => {
    setLocalQuantity(newQuantity);
    if (isFoundedInCart) {
      dispatchUpdateItem(
        updateCartItem({
          id: itemId,
          quantity: newQuantity,
        })
      );
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      updateQuantity(currentQuantity - 1);
    }
  };

  const handleIncrement = () => {
    if (currentQuantity < itemStockQuantity) {
      updateQuantity(currentQuantity + 1);
    }
  };

  const isMinQuantity = currentQuantity === 1;
  const isMaxQuantity = currentQuantity === itemStockQuantity;

  return (
    <div className="quantity-button">
      <button
        className={`minus border-r-[1px] border-[#12342f] ${
          isMinQuantity ? "button-disabled" : ""
        }`}
        onClick={handleDecrement}
        disabled={isMinQuantity}
      >
        <TiMinus />
      </button>
      <span>{currentQuantity}</span>
      <button
        className={`plus border-l-[1px] border-[#12342f] ${
          isMaxQuantity ? "button-disabled" : ""
        }`}
        onClick={handleIncrement}
        disabled={isMaxQuantity}
      >
        <TiPlus />
      </button>
    </div>
  );
};

QuantityButton.propTypes = {
  itemStockQuantity: PropTypes.number,
  itemId: PropTypes.number,
  itemSummaryQuantity: PropTypes.func,
};

export default QuantityButton;
