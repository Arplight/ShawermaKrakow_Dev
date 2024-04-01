import { useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const OrderSummary = ({ withStyle }) => {
  const subTotal = useSelector((state) => state.cart.cartTotalCost);
  const totalItems = useSelector((state) => state.cart.cartTotalItems);
  const { t } = useTranslation();
  return (
    <div className={`${withStyle} flex flex-col gap-1 p-0 lg:p-2`}>
      <h3 className="font-primary">
        {t("orderSummary")}
        {`( x${totalItems} ${t("item")} )`}
      </h3>

      <b className="large-paragrapgh font-primary">
        {t("subtotal")}: zł{" "}
        {isNaN(subTotal) ? "N/A" : subTotal.toFixed(2).toLocaleString()}
      </b>

      <p className="small-paragrapgh font-primary italic w-full lg:w-4/5">
        {t("shippingTaxesDiscounts")}
      </p>
      <Link to="/Checkout" className="link-btn main-button font-secondary">
        {t("proceedToCheckout")}
        <IoIosArrowForward className="text-[20px] button-arrow" />
      </Link>
    </div>
  );
};

export default OrderSummary;
OrderSummary.propTypes = {
  withStyle: PropTypes.string,
};
