import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../common/cart/empty_cart/EmptyCart";
import OrderList from "../../common/cart/order_list/OrderList";
import OrderSummary from "./components/order_summary/OrderSummary";
import { fetchCart } from "../../redux/store/ApiStore";
import { useEffect } from "react";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import CartItem from "../../common/cart/order_list/CartItem/CartItem";
import MainSection from "../../common/sections/main_section/MainSection";
import { cartTotal } from "../../redux/slices/CartSlice";
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import Seo from "../../Seo/Seo";

const Cart = () => {
  const dispatchCart = useDispatch();
  const dispatchTotal = useDispatch();
  const dispatchCartList = useDispatch();
  const dispatchSpinner = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatchCartList(fetchCart());
    dispatchTotal(cartTotal());
  }, [dispatchCart, dispatchTotal, dispatchCartList]);

  // PreLoading Spinner
  useEffect(() => {
    if (cartItems) {
      dispatchSpinner(loadingHandler(false));
    } else {
      dispatchSpinner(loadingHandler(true));
    }
  }, [dispatchSpinner, cartItems]);
  return (
    <div className="cart">
      {/* Seo */}
      <Seo currentPage={"Cart"} currentPath={"Cart"} />
      {/* Breadcrumb */}
      <Breadcrumb />
      {/* OrderList */}
      {cartItems.length > 0 ? (
        <MainSection
          withBackground={false}
          withStyle={"flex flex-col md:flex-row gap-5 flex-col-reverse"}
        >
          <OrderList
            withStyle={"w-full lg:w-3/5 max-h-[500px] overflow-y-scroll "}
          >
            <ul className="h-full p-0 lg:p-2 flex flex-col gap-2">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="w-full border-[1px] border-[#12342f2c]  h-max p-1"
                >
                  <CartItem
                    itemImage={item.image}
                    itemTitle={item.name}
                    itemPrice={item.price}
                    itemTotalPrice={item.subtotal}
                    itemWeight={item.weight}
                    itemId={item.id}
                    itemStockQuantity={item.stockQuantity}
                  />
                </li>
              ))}
            </ul>
          </OrderList>

          {/* Order Summary */}
          <OrderSummary withStyle={"w-full lg:w-2/5"} />
        </MainSection>
      ) : (
        <MainSection withBackground={false}>
          <EmptyCart />
        </MainSection>
      )}
    </div>
  );
};

export default Cart;
