import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const TrackingPage = () => {
  const { t } = useTranslation();
  const orderData = useSelector((state) => state.orderTracking.orderInfo);
  return (
    <div>
      <HeroHeadings
        topHeading={t("orderTracking")}
        bottomHeading={t("orderSummary")}
        isCentered={true}
        withStyle={"mb-3"}
      />
      <div className="flex w-full justify-between md:max-w-[80%] m-auto ">
        <span className="flex flex-col gap-1 items-center">
          <IoCheckmarkDoneCircleSharp className="text-[#12342f] text-[40px] sm:text-[60px] md:text-[80px]" />
          <p className="small-paragrapgh font-primary">{t("orderPlaced")}</p>
        </span>
        <span className="flex flex-col gap-1 items-center">
          {orderData?.checkout_status === "processing" ||
          orderData?.checkout_status === "completed" ? (
            <IoCheckmarkDoneCircleSharp className="text-[#12342f] text-[40px] sm:text-[60px] md:text-[80px]" />
          ) : (
            <IoCheckmarkDoneCircleOutline className="text-[#12342f] text-[40px] sm:text-[60px] md:text-[80px]" />
          )}

          <p className="small-paragrapgh font-primary">{t("processing")}</p>
        </span>
        <span className="flex flex-col gap-1 items-center">
          {orderData?.checkout_status === "completed" ? (
            <IoCheckmarkDoneCircleSharp className="text-[#12342f] text-[40px] sm:text-[60px] md:text-[80px]" />
          ) : (
            <IoCheckmarkDoneCircleOutline className="text-[#12342f] text-[40px] sm:text-[60px] md:text-[80px]" />
          )}
          <p className="small-paragrapgh font-primary">{t("received")}</p>
        </span>
      </div>
      <div className="flex flex-col w-full mt-4 gap-1 md:max-w-[80%] m-auto">
        <span className="flex gap-1">
          <b className="large-paragrapgh font-primary text-nowrap">
            {t("orderId")}:
          </b>
          <p className="large-paragrapgh font-primary">
            {orderData && orderData.checkout_token}
          </p>
        </span>
        <span className="flex gap-1">
          <b className="large-paragrapgh font-primary text-nowrap">
            {t("clientName")}
          </b>
          <p className="large-paragrapgh font-primary">
            {orderData &&
              `${orderData.checkout_first_name} ${orderData.checkout_last_name}`}
          </p>
        </span>
        <span className="flex gap-1">
          <b className="large-paragrapgh font-primary text-nowrap">
            {t("clientEmail")}
          </b>
          <p className="large-paragrapgh font-primary">
            {orderData && orderData.checkout_email}
          </p>
        </span>
        <span className="flex gap-1">
          <b className="large-paragrapgh font-primary text-nowrap">
            {t("clientAddress")}
          </b>
          <p className="large-paragrapgh font-primary">
            {orderData && orderData.checkout_address}
          </p>
        </span>
        <span className="flex gap-1">
          <b className="large-paragrapgh font-primary text-nowrap">
            {t("totalCost")}
          </b>
          <p className="large-paragrapgh font-primary">
            zł {orderData && orderData.checkout_total_with_shipping}
          </p>
        </span>
      </div>
    </div>
  );
};

export default TrackingPage;
