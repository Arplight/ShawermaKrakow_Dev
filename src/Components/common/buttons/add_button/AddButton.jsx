import { useDispatch } from "react-redux";
import { addCartItem } from "../../../redux/slices/CartSlice";
import PropTypes from "prop-types";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";

const AddButton = ({
  summaryQuantity,
  productId,
  withStyle,
  currentProductName,
}) => {
  const dispatchAddCartItem = useDispatch();
  const { isFoundedInCart } = useCart(productId);
  const ToastAdd = () => {
    toast.success(`Added ${currentProductName} to cart`);
  };

  function addingHandler() {
    dispatchAddCartItem(
      addCartItem({
        itemId: productId,
        itemQuantity: summaryQuantity ? summaryQuantity : 1,
      })
    );
    ToastAdd();
  }
  return (
    <button
      className={`main-button font-secondary ${withStyle} ${
        isFoundedInCart && "button-disabled"
      }`}
      onClick={addingHandler}
      disabled={isFoundedInCart}
    >
      Add to cart
    </button>
  );
};

export default AddButton;
AddButton.propTypes = {
  summaryQuantity: PropTypes.number,
  productId: PropTypes.number.isRequired,
  withStyle: PropTypes.string,
  currentProductName: PropTypes.string,
};
