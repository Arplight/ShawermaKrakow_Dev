import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCart = (itemId = null) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const foundItem = cartItems.find((item) => item.itemId === itemId);

  const [isFoundedInCart, setisFoundedInCart] = useState(!!foundItem);
  const [itemGlobalQuantity, setItemGlobalQuantity] = useState(
    foundItem?.itemOrderQuantity || null
  );

  useEffect(() => {
    setisFoundedInCart(cartItems.some((item) => item.itemId === itemId));
    setItemGlobalQuantity(foundItem ? foundItem.itemOrderQuantity : null);
  }, [cartItems, itemId, foundItem]);

  return { isFoundedInCart, itemGlobalQuantity };
};

export default useCart;
