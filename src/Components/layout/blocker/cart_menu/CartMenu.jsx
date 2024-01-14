import { useDispatch } from "react-redux";
import EmptyCart from "../../../common/cart/empty_cart/EmptyCart";
import OrderList from "../../../common/cart/order_list/OrderList";
import OrderSummary from "./order_summary/OrderSummary";
import { useEffect } from "react";
import { fetchProducts } from "../../../redux/store/ApiStore";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const CartMenu = () => {
  const dispatchCart = useDispatch();
  useEffect(() => {
    dispatchCart(fetchProducts());
  }, [dispatchCart]);
  return (
    <div className="cart-menu">
      <Link to="/Cart" className="link-btn main-button font-secondary">
        View cart
        <IoIosArrowForward className="text-[20px] button-arrow" />
      </Link>
    </div>
  );
};

export default CartMenu;
