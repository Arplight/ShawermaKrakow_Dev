import { useSelector } from "react-redux";

const OrderSummary = () => {
  const totalCost = useSelector((state) => state.cart.cartTotalCost);
  return (
    <div className="flex border-y-[1px] border-y-[#12342f2c] py-1 ">
      <b className="large-paragrapgh font-primary">
        Total: &nbsp;zł {totalCost.toFixed(2).toLocaleString()}
      </b>
    </div>
  );
};

export default OrderSummary;
