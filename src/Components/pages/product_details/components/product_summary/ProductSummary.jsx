import { useSelector } from "react-redux";
import QuantityButton from "../../../../common/buttons/quantity_button/QuantityButton";
import MainSection from "../../../../common/sections/main_section/MainSection";
import { useState } from "react";
import AddButton from "../../../../common/buttons/add_button/AddButton";
import AddWishList from "../../../../common/buttons/add_wishlist/AddWishList";
// Loader
import { BeatLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const ProductSummary = () => {
  const [summaryQuantity, setSummaryQuantity] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentProduct = useSelector((state) => state.currentProduct.data);
  const { t } = useTranslation();
  return (
    <div className="min-h-[50vh] relative">
      {!isLoaded && (
        <BeatLoader
          color="#12342f"
          cssOverride={{
            position: "absolute",
            top: "40%",
            right: "calc(50% - 30px)",
            zIndex: "100",
          }}
        />
      )}
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
                  onLoad={() => setIsLoaded(true)}
                />
              }
            </span>
            <span
              className="w-full md:w-1/2 flex flex-col gap-2"
              key={currentProduct.id}
            >
              <div className="flex w-max gap-1 items-center summary-title">
                <h2 className="font-primary">{currentProduct.name}</h2>
                <AddWishList currentId={currentProduct.id} />
              </div>
              <p className="small-paragrapgh font-primary text-justify ">
                {currentProduct.description}
              </p>
              <ul className="flex flex-col gap-1">
                <li className="flex  w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    {t("price")}:
                  </p>
                  <b className="small-paragrapgh font-primary ">
                    zł{" "}
                    {currentProduct.price_before_discount
                      .toFixed(2)
                      .toLocaleString()}
                  </b>
                </li>
                <li className="flex  w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    {t("weight")}:
                  </p>
                  <b className="small-paragrapgh font-primary ">
                    {currentProduct.weight.toFixed(2).toLocaleString()} g
                  </b>
                </li>
                <li className="flex w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    {t("category")}:
                  </p>
                  <b className="small-paragrapgh font-primary">
                    {currentProduct.category}
                  </b>
                </li>
                <li className="flex w-full gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    {t("availability")}:
                  </p>
                  <b
                    className={`small-paragrapgh ${
                      currentProduct.availability
                        ? "text-[#4f8a10]"
                        : "text-[#ff0000d8]"
                    }`}
                  >
                    {currentProduct.availability
                      ? t("inStock")
                      : t("outOfStock")}
                  </b>
                </li>
                <li className="flex w-full items-end gap-3 lg:gap-0">
                  <p className="small-paragrapgh font-primary w-1/4">
                    {t("quantity")}{" "}
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

              <AddButton
                summaryQuantity={summaryQuantity}
                productId={currentProduct.id}
                currentProductName={currentProduct.name}
              />
            </span>
          </>
        )}
      </MainSection>
    </div>
  );
};

export default ProductSummary;
