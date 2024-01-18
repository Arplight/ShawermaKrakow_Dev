import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useIsAdded = (itemId = "") => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const foundItem = cartItems.find((item) => item.itemId === itemId);
  const [isAdded, setIsAdded] = useState(
    cartItems.some((item) => item.itemId === itemId)
  );
  const [itemQuantity, setItemQuantity] = useState(
    foundItem ? foundItem.itemOrderQuantity : 1
  );

  useEffect(() => {
    if (cartItems) {
      setIsAdded(!!foundItem);
      foundItem && setItemQuantity(foundItem.itemOrderQuantity);
    }
  }, [cartItems, itemId, foundItem]);

  return { isAdded, itemQuantity };
};

export default useIsAdded;
