import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useIsAdded = (itemId = "") => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const foundItem = cartItems.find((item) => item.itemId === itemId);

  const [isAdded, setIsAdded] = useState(!!foundItem);
  const [itemGlobalQuantity, setItemGlobalQuantity] = useState(
    foundItem?.itemOrderQuantity || null
  );

  useEffect(() => {
    setIsAdded(cartItems.some((item) => item.itemId === itemId));
    setItemGlobalQuantity(foundItem ? foundItem.itemOrderQuantity : null);
  }, [cartItems, itemId, foundItem]);

  return { isAdded, itemGlobalQuantity };
};

export default useIsAdded;
