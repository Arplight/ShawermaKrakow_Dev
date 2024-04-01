import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";
import { cartAdd, fetchCart } from "../../../redux/store/ApiStore";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

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
  const [isPending, setIsPending] = useState(false);
  // Dispatching
  const dispatchCart = useDispatch();
  const { t } = useTranslation();
  async function addToCart() {
    const currentItemData = {
      id: productId,
      quantity: summaryQuantity ? summaryQuantity : 1,
    };
    try {
      await cartAdd(currentItemData);
      dispatchCart(fetchCart());
      ToastAdd();
      setIsPending(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button
      className={`main-button font-secondary relative ${withStyle} ${
        isFoundedInCart && "button-disabled"
      } ${isPending && "hover:bg-[#12342f]"}`}
      onClick={() => {
        addToCart();
        setIsPending(true);
      }}
      disabled={isFoundedInCart || isPending}
    >
      {isPending && (
        <PuffLoader
          color="#ffffff"
          size={20}
          className=""
          cssOverride={{ position: "absolute" }}
        />
      )}
      <span className={`${isPending && "invisible"}`}>
        {isFoundedInCart ? t("addedToCart") : t("addToCart")}
      </span>
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
