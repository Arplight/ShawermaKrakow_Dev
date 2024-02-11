import Seo from "../../Seo/Seo";
import CheckoutForm from "./components/checkout_form/CheckoutForm";
import CheckoutSummary from "./components/checkout_summary/CheckoutSummary";
import { useDispatch } from "react-redux";
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import { useEffect } from "react";

const Checkout = () => {
  const dispatchLoader = useDispatch();
  useEffect(() => {
    dispatchLoader(loadingHandler(false));
  }, [dispatchLoader]);
  return (
    <div className="container m-auto flex flex-col md:flex-row">
      {/* Seo */}
      <Seo currentPage={"Checkout"} currentPath={"Checkout"} />
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
};

export default Checkout;
