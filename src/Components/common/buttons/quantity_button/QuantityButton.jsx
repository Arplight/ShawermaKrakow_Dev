import { useEffect, useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import useCart from "../../../hooks/useCart";
import { cartUpdate, fetchCart } from "../../../redux/store/ApiStore";
const QuantityButton = ({ itemStockQuantity, itemId, itemSummaryQuantity }) => {
  const { isFoundedInCart, itemGlobalQuantity } = useCart(itemId);
  const [localQuantity, setLocalQuantity] = useState(itemGlobalQuantity || 1);
  const [currentQuantity, setCurrentQuantity] = useState(
    isFoundedInCart ? itemGlobalQuantity : localQuantity
  );
  const dispatchCart = useDispatch();
  useEffect(() => {
    if (itemSummaryQuantity && !isFoundedInCart) {
      itemSummaryQuantity(currentQuantity);
      console.log(currentQuantity);
    }
  }, [currentQuantity, itemSummaryQuantity, isFoundedInCart]);
  const updateCart = async (newQuantity) => {
    const currentItemData = {
      id: itemId,
      quantity: newQuantity,
    };
    try {
      await cartUpdate(currentItemData);
      setLocalQuantity(newQuantity);
      dispatchCart(fetchCart());
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= itemStockQuantity) {
      setCurrentQuantity(newQuantity);
      isFoundedInCart && updateCart(newQuantity);
    }
  };
  // SYNCING STATE
  useEffect(() => {
    itemGlobalQuantity && setCurrentQuantity(itemGlobalQuantity);
  }, [itemGlobalQuantity]);

  const isMinQuantity = currentQuantity === 1;
  const isMaxQuantity = currentQuantity === itemStockQuantity;
  return (
    <div className="quantity-button">
      <button
        className={`minus border-r-[1px] border-[#12342f] ${
          isMinQuantity ? "button-disabled" : ""
        }`}
        onClick={() => handleQuantityChange(currentQuantity - 1)}
        disabled={isMinQuantity}
      >
        <TiMinus />
      </button>
      <span>{currentQuantity}</span>
      <button
        className={`plus border-l-[1px] border-[#12342f] ${
          isMaxQuantity ? "button-disabled" : ""
        }`}
        onClick={() => handleQuantityChange(currentQuantity + 1)}
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
