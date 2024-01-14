import CartItem from "./CartItem/CartItem";

const OrderList = ({ children, withStyle }) => {
  return <div className={`${withStyle}`}>{children}</div>;
};

export default OrderList;
