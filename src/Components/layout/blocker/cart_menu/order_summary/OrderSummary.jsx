import { useSelector } from "react-redux";

const OrderSummary = () => {
  const totalCost = useSelector((state) => state.cart.cartTotalCost);
  return (
    <div className="flex border-y-[1px] border-y-[#12342f2c] py-1 ">
      <b className="large-paragrapgh font-primary">Total: &nbsp;${totalCost}</b>
    </div>
  );
};

export default OrderSummary;
