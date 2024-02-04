import Seo from "../../Seo/Seo";
import CheckoutForm from "./components/checkout_form/CheckoutForm";
import CheckoutSummary from "./components/checkout_summary/CheckoutSummary";

const Checkout = () => {
  return (
    <div className="checkout">
      {/* Seo */}
      <Seo currentPage={"Checkout"} currentPath={"Checkout"} />
    </div>
  );
};

export default Checkout;
