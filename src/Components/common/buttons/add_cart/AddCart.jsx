// Icons
import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import { addCartItem, removeCartItem } from "../../../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchCart, postCart } from "../../../redux/store/ApiStore";
import { toast } from "react-toastify";
const AddCart = ({ currentId, currentImage, currentTitle, currentPrice }) => {
  const currentItemData = {
    id: currentId,
    name: currentTitle,
    description: "description for product",
    availability: 1,
    top_product: 1,
    weight: 1,
    price_before_discount: currentPrice,
    quantity: 1,
    image: currentImage,
  };
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
  const dispatchAddCartItem = useDispatch();
  const dispatchRemoveCartItem = useDispatch();
  const dispatchCart = useDispatch();
  // Cart Handlers
  async function addToCart() {
    try {
      await postCart(currentItemData);
      dispatchAddCartItem(addCartItem({ itemId: currentId, itemQuantity: 1 }));
      dispatchCart(fetchCart());
      ToastAdd();
      setIsAddedToCart(true);
    } catch (error) {
      console.error(error);
    }
  }
  function removeFromCart() {
    dispatchRemoveCartItem(removeCartItem(currentId));
    setIsAddedToCart(false);
    ToastRemove();
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
  currentImage: PropTypes.string,
  currentTitle: PropTypes.string,
  currentPrice: PropTypes.number,
};
