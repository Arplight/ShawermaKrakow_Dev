import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCart = (itemId = null) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const foundItem = cartItems.find((item) => item.id === itemId);
  const [isFoundedInCart, setisFoundedInCart] = useState(!!foundItem);
  const [itemGlobalQuantity, setItemGlobalQuantity] = useState(
    foundItem?.quantity || null
  );

  useEffect(() => {
    setisFoundedInCart(cartItems.some((item) => item.id === itemId));
    setItemGlobalQuantity(foundItem ? foundItem.quantity : null);
  }, [cartItems, itemId, foundItem]);

  return { isFoundedInCart, itemGlobalQuantity };
};

export default useCart;
