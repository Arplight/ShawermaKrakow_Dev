// Icons
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchCart, cartAdd, cartRemove } from "../../../redux/store/ApiStore";
import { toast } from "react-toastify";
import { PuffLoader } from "react-spinners";

const AddCart = ({ currentId, currentTitle }) => {
  const [isPending, setIsPending] = useState(false);
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
      setIsPending(false);
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
      setIsPending(false);
    } catch (error) {
      console.error(error);
    }
  }
  function addingHandler() {
    if (isAddedToCart) {
      removeFromCart();
    } else {
      addToCart();
    }
    setIsPending(true);
  }

  // CART STATE SYNCING  (STATE UPDATER)
  useEffect(() => {
    setIsAddedToCart(isFoundedInCart);
  }, [isFoundedInCart]);

  return (
    <span>
      {isPending ? (
        <PuffLoader color="#12342f" size={20} />
      ) : isAddedToCart ? (
        <PiShoppingCartFill onClick={addingHandler} />
      ) : (
        <PiShoppingCart onClick={addingHandler} />
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
