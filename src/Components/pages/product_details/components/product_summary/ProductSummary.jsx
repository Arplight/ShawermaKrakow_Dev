import { useDispatch, useSelector } from "react-redux";
import QuantityButton from "../../../../common/buttons/quantity_button/QuantityButton";
import MainSection from "../../../../common/sections/main_section/MainSection";
import { addCartItem } from "../../../../redux/slices/CartSlice";
import { useState } from "react";
import useIsAdded from "../../../../hooks/useIsAdded";

const ProductSummary = () => {
  const [summaryQuantity, setSummaryQuantity] = useState(1);
  const currentProduct = useSelector((state) => state.currentProduct.data);
  const dispatchAddCartItem = useDispatch();
  const { isAdded } = useIsAdded(currentProduct && currentProduct.id);
  return (
    <>
      <MainSection
        withBackground={false}
        withStyle={"flex flex-col md:flex-row gap-x-10 gap-y-5 "}
      >
        {/* Gallery */}
        {currentProduct && (
          <>
            <span className="w-full md:w-1/2 flex max-h-[500px]">
              {
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="object-contain"
                />
              }
            </span>
            <span
              className="w-full md:w-1/2 flex flex-col gap-2"
              key={currentProduct.id}
            >
              <h2 className="font-primary">{currentProduct.name}</h2>
              <p className="small-paragrapgh font-primary text-justify ">
                {currentProduct.description}
              </p>
              <ul className="flex flex-col gap-1">
                <li className="flex  w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">Price:</p>
                  <b className="small-paragrapgh font-primary ">
                    $
                    {currentProduct.price_before_discount
                      .toFixed(2)
                      .toLocaleString()}
                  </b>
                </li>
                <li className="flex  w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">Weight:</p>
                  <b className="small-paragrapgh font-primary ">
                    {currentProduct.weight.toFixed(2).toLocaleString()} g
                  </b>
                </li>
                <li className="flex w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    Category:
                  </p>
                  <b className="small-paragrapgh font-primary">
                    {currentProduct.category}
                  </b>
                </li>
                <li className="flex w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    Availability:
                  </p>
                  <b
                    className={`small-paragrapgh ${
                      currentProduct.availability
                        ? "text-[#4f8a10]"
                        : "text-[#ff0000d8]"
                    }`}
                  >
                    {currentProduct.availability ? "In stock" : "Out of stock"}
                  </b>
                </li>
                <li className="flex w-full items-end gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    Quantity:
                  </p>
                  <span>
                    <QuantityButton
                      itemStockQuantity={currentProduct.quantity}
                      itemId={currentProduct.id}
                      itemSummaryQuantity={setSummaryQuantity}
                    />
                  </span>
                </li>
              </ul>
              <button
                className={`main-button font-secondary ${
                  isAdded && "button-disabled"
                }`}
                onClick={() =>
                  dispatchAddCartItem(
                    addCartItem({
                      itemId: currentProduct.id,
                      itemQuantity: summaryQuantity,
                    })
                  )
                }
                disabled={isAdded}
              >
                Add to cart
              </button>
            </span>
          </>
        )}
      </MainSection>
    </>
  );
};

export default ProductSummary;
