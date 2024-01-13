import { useDispatch } from "react-redux";
import EmptyCart from "../../common/cart/empty_cart/EmptyCart";
import OrderList from "../../common/cart/order_list/OrderList";
import OrderSummary from "./components/order_summary/OrderSummary";
import { fetchProducts } from "../../redux/store/ApiStore";
import { useEffect } from "react";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";

const Cart = () => {
  const dispatchCart = useDispatch();
  useEffect(() => {
    dispatchCart(fetchProducts());
  }, [dispatchCart]);

  return (
    <div className="cart">
      <Breadcrumb />
    </div>
  );
};

export default Cart;
