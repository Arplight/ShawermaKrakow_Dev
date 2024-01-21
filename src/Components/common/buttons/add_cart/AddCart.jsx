// Icons
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import { addCartItem, removeCartItem } from "../../../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const AddCart = ({ currentId }) => {
  // state
  const { isFoundedInCart } = useCart(currentId);
  const [isAddedToCart, setIsAddedToCart] = useState(isFoundedInCart);

  // Dispatching
  const dispatchAddCartItem = useDispatch();
  const dispatchRemoveCartItem = useDispatch();

  // Cart Handlers
  function addToCart() {
    dispatchAddCartItem(addCartItem({ itemId: currentId, itemQuantity: 1 }));
    setIsAddedToCart(true);
  }
  function removeFromCart() {
    dispatchRemoveCartItem(removeCartItem(currentId));
    setIsAddedToCart(false);
  }

  // cartStateUpdater
  useEffect(() => {
    setIsAddedToCart(isFoundedInCart);
  }, [isFoundedInCart]);
  return (
    <span>
      {isAddedToCart ? (
        <PiShoppingCartFill onClick={removeFromCart} />
      ) : (
        <PiShoppingCart onClick={addToCart} />
      )}
    </span>
  );
};

export default AddCart;
AddCart.propTypes = {
  currentId: PropTypes.number.isRequired,
};
