import { useDispatch } from "react-redux";
import EmptyCart from "../../../common/cart/empty_cart/EmptyCart";
import OrderList from "../../../common/cart/order_list/OrderList";
import OrderSummary from "./order_summary/OrderSummary";
import { useEffect } from "react";
import { fetchProducts } from "../../../redux/store/ApiStore";

const CartMenu = () => {
  const dispatchProducts = useDispatch();
  useEffect(() => {
    dispatchProducts(fetchProducts());
  }, [dispatchProducts]);
  return <div className="cart-menu"> Cart</div>;
};

export default CartMenu;
