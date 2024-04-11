import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  // Reading state values
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalCost = useSelector((state) => state.cart.cartTotalCost);
  const shippingPrice = useSelector((state) => state.shipping.shippingPrice);
  return (
    <div className="w-full  md:w-1/2 bg-[#f5f5f5] pl-0 md:pl-2 py-4 border-x-[#d6d6d6] border-x-[1px]">
      <ul>
        {cartItems &&
          cartItems.map((item) => (
            <li key={item.id} className="flex gap-1">
              <span className="flex  gap-1.5 py-1 items-center min-w-[200px] w-1/2">
                <div className="w-[70px] h-[70px] px-[4px] relative rounded-sm border-[1px] border-[#d6d6d6] flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute text-[16px] text-[#ffffff] bg-[#666] w-[22px] h-[22px] rounded text-center leading-[22px] top-[-5px] right-[-5px]">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <b className={"font-primary small-paragrapgh"}>{item.name}</b>
                  <p className={"font-primary small-paragrapgh"}>
                    {item.weight?.toFixed(2).toLocaleString()} g
                  </p>
                </div>
              </span>
              <span className="flex items-center">
                <p className={"font-primary small-paragrapgh "}>
                  {`zł ${item.subtotal?.toFixed(2).toLocaleString()}`}
                </p>
              </span>
            </li>
          ))}
      </ul>
      <ul className="mt-2">
        {[
          { label: "Subtotal", value: cartTotalCost },
          {
            label: "Shipping",
            value: shippingPrice,
            withMessage:
              shippingPrice === 0 ? "Please select a country" : false,
          },
          {
            label: "Total",
            value: cartTotalCost + shippingPrice,
            isLarge: true,
          },
        ].map((price, index) => (
          <li key={index} className="mb-0.5 w-full flex gap-1">
            <b
              className={`font-primary  min-w-[200px] w-1/2 ${
                price.isLarge ? "text-[22px]" : "small-paragrapgh"
              }`}
            >
              {`${price.label} :`}
            </b>
            <p
              className={`font-primary  ${
                price.isLarge ? "text-[22px]" : "small-paragrapgh"
              }`}
            >
              {`${
                price.withMessage
                  ? price.withMessage
                  : "zł " + price?.value?.toFixed(2)
              }`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutSummary;
