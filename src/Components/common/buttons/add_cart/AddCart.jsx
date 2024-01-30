// Icons
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchCart, cartAdd, cartRemove } from "../../../redux/store/ApiStore";
import { toast } from "react-toastify";

const AddCart = ({ currentId, currentTitle }) => {
  // Toastifier
  const ToastAdd = () => {
    toast.success(`Added ${currentTitle} to cart`);
  };
  const ToastRemove = () => {
    toast.success("Cart updated successfully");
  };
  // state
  const { isFoundedInCart } = useCart(currentId);
  const [isAddedToCart, setIsAddedToCart] = useState(isFoundedInCart);

  // Dispatching
  const dispatchCart = useDispatch();

  // Cart Handlers
  async function addToCart() {
    const currentItemData = {
      id: currentId,
      quantity: 1,
    };
    try {
      await cartAdd(currentItemData);
      dispatchCart(fetchCart());
      setIsAddedToCart(true);
      ToastAdd();
    } catch (error) {
      console.error(error);
    }
  }
  async function removeFromCart() {
    try {
      await cartRemove(currentId);
      dispatchCart(fetchCart());
      setIsAddedToCart(false);
      ToastRemove();
    } catch (error) {
      console.error(error);
    }
  }

  // CART STATE SYNCING
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
  currentTitle: PropTypes.string,
  currentPrice: PropTypes.number,
};
