import { useEffect, useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../../redux/slices/CartSlice";
import useIsAdded from "../../../hooks/useIsAdded";

const QuantityButton = ({ itemStockQuantity, itemId, itemSummaryQuantity }) => {
  const { isAdded, itemQuantity } = useIsAdded(itemId);
  const [currentQuantity, setCurrentQuantity] = useState(
    itemQuantity ? itemQuantity : 1
  );
  const dispatchUpdateItem = useDispatch();
  useEffect(() => {
    if (itemSummaryQuantity && !isAdded) {
      itemSummaryQuantity(currentQuantity);
    }
  }, [currentQuantity, itemSummaryQuantity, isAdded]);

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
      if (isAdded) {
        dispatchUpdateItem(
          updateCartItem({ id: itemId, quantity: currentQuantity - 1 })
        );
      }
    }
  };

  const handleIncrement = () => {
    if (currentQuantity < itemStockQuantity) {
      setCurrentQuantity(currentQuantity + 1);
      if (isAdded) {
        dispatchUpdateItem(
          updateCartItem({ id: itemId, quantity: currentQuantity + 1 })
        );
      }
    }
  };

  return (
    <div className="quantity-button">
      <button
        className={`minus border-r-[1px] border-[#12342f] ${
          currentQuantity === 1 ? "button-disabled" : ""
        }`}
        onClick={handleDecrement}
        disabled={currentQuantity === 1}
      >
        <TiMinus />
      </button>
      <span>{currentQuantity}</span>
      <button
        className={`plus border-l-[1px] border-[#12342f] ${
          currentQuantity === itemStockQuantity ? "button-disabled" : ""
        }`}
        onClick={handleIncrement}
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
