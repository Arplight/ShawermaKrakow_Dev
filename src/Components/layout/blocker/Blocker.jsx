import { useEffect } from "react";
import CartMenu from "./cart_menu/CartMenu";
import OrderSummary from "./cart_menu/order_summary/OrderSummary";
import ProductEnquiry from "./product_enquiry/ProductEnquiry";
import Search from "./search/Search";
import Video from "./video/Video";

// State
import { useSelector } from "react-redux";
import { blockerSetter } from "../../redux/slices/BlockerSlice";
import { useDispatch } from "react-redux";

const Blocker = () => {
  const blockerState = useSelector((state) => state.blocker.currentBlock);
  const dispatch = useDispatch();
  useEffect(() => {
    if (blockerState !== null) {
      document.body.classList.add("block-scroll");
    } else {
      document.body.classList.remove("block-scroll");
    }
  }, [blockerState]);

  return (
    <div
      onClick={() => dispatch(blockerSetter(null))}
      className={`blocker ${blockerState !== null ? "show-blocker" : ""}`}
    ></div>
  );
};

export default Blocker;
