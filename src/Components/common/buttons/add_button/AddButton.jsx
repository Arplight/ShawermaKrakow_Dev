import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";
import { cartAdd, fetchCart } from "../../../redux/store/ApiStore";

const AddButton = ({
  summaryQuantity,
  productId,
  withStyle,
  currentProductName,
}) => {
  const { isFoundedInCart } = useCart(productId);
  const ToastAdd = () => {
    toast.success(`Added ${currentProductName} to cart`);
  };
  // Dispatching
  const dispatchCart = useDispatch();
  async function addToCart() {
    const currentItemData = {
      id: productId,
      quantity: summaryQuantity,
    };
    try {
      await cartAdd(currentItemData);
      dispatchCart(fetchCart());
      ToastAdd();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button
      className={`main-button font-secondary ${withStyle} ${
        isFoundedInCart && "button-disabled"
      }`}
      onClick={addToCart}
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
