import { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import PropTypes from "prop-types";

const QuantityButton = ({ quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  return (
    <div className="quantity-button">
      <button
        className={`minus border-r-[1px] border-[#12342f] ${
          currentQuantity === 1 ? "button-disabled" : ""
        }`}
        onClick={() => {
          if (currentQuantity > 1) {
            setCurrentQuantity(currentQuantity - 1);
          }
        }}
        disabled={currentQuantity === 1}
      >
        <TiMinus />
      </button>
      <span>{currentQuantity}</span>
      <button
        className={`plus border-l-[1px] border-[#12342f] ${
          currentQuantity === quantity ? "button-disabled" : ""
        }`}
        onClick={() => {
          7;
          if (currentQuantity < quantity) {
            setCurrentQuantity(currentQuantity + 1);
          }
        }}
      >
        <TiPlus />
      </button>
    </div>
  );
};

export default QuantityButton;

QuantityButton.propTypes = {
  quantity: PropTypes.number,
};
