import { Link } from "react-router-dom";
import { FaHeartCircleExclamation } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const WishListEmpty = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      <FaHeartCircleExclamation className="text-[100px] fill-[#12342f]" />
      <h2 className="font-primary">{t("wishlistEmpty")}</h2>
      <Link to="/Products" className="link-btn main-button font-secondary">
        {t("startShopping")}
        <IoIosArrowForward className="text-[20px] button-arrow" />
      </Link>
    </div>
  );
};

export default WishListEmpty;
