import { useDispatch } from "react-redux";
import { addCartItem } from "../../../redux/slices/CartSlice";
import PropTypes from "prop-types";
import useCart from "../../../hooks/useCart";
const AddButton = ({ summaryQuantity, productId, withStyle }) => {
  const dispatchAddCartItem = useDispatch();
  const { isFoundedInCart } = useCart(productId);

  return (
    <button
      className={`main-button font-secondary ${withStyle} ${
        isFoundedInCart && "button-disabled"
      }`}
      onClick={() =>
        dispatchAddCartItem(
          addCartItem({
            itemId: productId,
            itemQuantity: summaryQuantity ? summaryQuantity : 1,
          })
        )
      }
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
};
