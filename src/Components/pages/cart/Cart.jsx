import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../common/cart/empty_cart/EmptyCart";
import OrderList from "../../common/cart/order_list/OrderList";
import OrderSummary from "./components/order_summary/OrderSummary";
import { fetchCart, fetchProducts } from "../../redux/store/ApiStore";
import { useEffect } from "react";
import Breadcrumb from "../../common/sections/breadcrumb/Breadcrumb";
import CartItem from "../../common/cart/order_list/CartItem/CartItem";
import MainSection from "../../common/sections/main_section/MainSection";
import { cartTotal } from "../../redux/slices/CartSlice";

const Cart = () => {
  const dispatchCart = useDispatch();
  const dispatchTotal = useDispatch();
  const dispatchCartList = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // dispatchCart(fetchProducts());
    dispatchCartList(fetchCart());
    dispatchTotal(cartTotal());
  }, [dispatchCart, dispatchTotal, dispatchCartList]);

  return (
    <div className="cart">
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
