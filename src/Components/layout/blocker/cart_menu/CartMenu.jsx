import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../redux/store/ApiStore";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import CartItem from "../../../common/cart/order_list/CartItem/CartItem";
import { cartTotal } from "../../../redux/slices/CartSlice";
import OrderList from "../../../common/cart/order_list/OrderList";
import OrderSummary from "./order_summary/OrderSummary";
import EmptyCart from "../../../common/cart/empty_cart/EmptyCart";
import { blockerSetter } from "../../../redux/slices/BlockerSlice";

const CartMenu = () => {
  const dispatchCart = useDispatch();
  const dispatchTotal = useDispatch();
  const dispatchBlocker = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.cartTotalItems);
  useEffect(() => {
    dispatchCart(fetchProducts());
    dispatchTotal(cartTotal());
  }, [dispatchCart, dispatchTotal]);

  function blockerHandler() {
    dispatchBlocker(blockerSetter(null));
  }

  return (
    <div
      className="cart-menu relative h-full bg-[#ffffff] ml-[auto] overflow-y-scroll p-1 max-w-[85%] flex flex-col gap-2 shadow-xl shadow-gray-800 "
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-button absolute top-0 left-[0px]"
        onClick={blockerHandler}
      >
        <IoClose />
      </button>
      <span></span>
      {cartItems.length > 0 ? (
        <>
          <h3 className="font-primary">
            Your cart {`( x${totalItems} Item )`}
          </h3>
          <OrderList withStyle={"w-full max-h-[50%] overflow-y-scroll"}>
            <ul className="h-full p-0 md:py-1 flex flex-col gap-1">
              {cartItems.map((item) => (
                <li
                  key={item.itemId}
                  className="w-full border-[1px] border-[#12342f2c]  h-max p-1"
                >
                  <CartItem
                    itemImage={item.itemImage}
                    itemTitle={item.itemTitle}
                    itemPrice={item.itemPrice}
                    itemTotalPrice={item.itemTotalPrice}
                    itemWeight={item.itemWeight}
                    itemId={item.itemId}
                    itemStockQuantity={item.itemStockQuantity}
                  />
                </li>
              ))}
            </ul>
          </OrderList>
          <OrderSummary />
          <Link
            to="/Cart"
            className="link-btn full-button font-secondary"
            onClick={blockerHandler}
          >
            View cart
            <IoIosArrowForward className="text-[20px] button-arrow" />
          </Link>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartMenu;
