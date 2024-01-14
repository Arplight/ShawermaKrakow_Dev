import { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateItem } from "../../../redux/slices/CartSlice";

const QuantityButton = ({ itemQuantity, itemId }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const dispatchUpdateItem = useDispatch();

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
      dispatchUpdateItem(
        updateItem({ id: itemId, quantity: currentQuantity - 1 })
      );
    }
  };

  const handleIncrement = () => {
    if (currentQuantity < itemQuantity) {
      setCurrentQuantity(currentQuantity + 1);
      dispatchUpdateItem(
        updateItem({ id: itemId, quantity: currentQuantity + 1 })
      );
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
          currentQuantity === itemQuantity ? "button-disabled" : ""
        }`}
        onClick={handleIncrement}
      >
        <TiPlus />
      </button>
    </div>
  );
};

export default QuantityButton;

QuantityButton.propTypes = {
  itemQuantity: PropTypes.number,
  itemId: PropTypes.number,
};
