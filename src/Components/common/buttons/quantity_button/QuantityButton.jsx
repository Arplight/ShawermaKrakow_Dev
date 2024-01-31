import { useEffect, useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import useCart from "../../../hooks/useCart";
import { cartUpdate, fetchCart } from "../../../redux/store/ApiStore";
import { PuffLoader } from "react-spinners";

const QuantityButton = ({ itemStockQuantity, itemId, itemSummaryQuantity }) => {
  const { isFoundedInCart, itemGlobalQuantity } = useCart(itemId);
  const [isPending, setIsPending] = useState(false);
  const [localQuantity, setLocalQuantity] = useState(itemGlobalQuantity || 1);
  const [currentQuantity, setCurrentQuantity] = useState(
    isFoundedInCart ? itemGlobalQuantity : localQuantity
  );
  const dispatchCart = useDispatch();

  useEffect(() => {
    if (itemSummaryQuantity && !isFoundedInCart) {
      itemSummaryQuantity(currentQuantity);
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
      setIsPending(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= itemStockQuantity) {
      setIsPending(true);
      setCurrentQuantity(newQuantity);
      isFoundedInCart && updateCart(newQuantity);
    }
  };
  // SYNCING STATE
  useEffect(() => {
    itemGlobalQuantity && setCurrentQuantity(itemGlobalQuantity);
    isFoundedInCart && setIsPending(false);
  }, [itemGlobalQuantity, isFoundedInCart]);

  const isMinQuantity = currentQuantity === 1;
  const isMaxQuantity = currentQuantity === itemStockQuantity;
  return (
    <div
      className={`quantity-button ${
        isPending && isFoundedInCart && "button-disabled"
      }`}
    >
      <button
        className={`minus border-r-[1px] border-[#12342f] ${
          isMinQuantity ? "button-disabled" : ""
        } `}
        onClick={() => handleQuantityChange(currentQuantity - 1)}
        disabled={
          isMinQuantity || (isFoundedInCart ? isPending && true : false)
        }
      >
        <TiMinus />
      </button>
      <span>
        {isFoundedInCart && isPending ? (
          <PuffLoader color="#12342f" size={18} />
        ) : (
          currentQuantity
        )}
      </span>
      <button
        className={`plus border-l-[1px] border-[#12342f] ${
          isMaxQuantity ? "button-disabled" : ""
        }`}
        onClick={() => handleQuantityChange(currentQuantity + 1)}
        disabled={
          isMaxQuantity || (isFoundedInCart ? isPending && true : false)
        }
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
