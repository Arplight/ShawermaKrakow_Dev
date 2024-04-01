import { TbError404 } from "react-icons/tb";
import MainSection from "../../common/sections/main_section/MainSection";
import { Link } from "react-router-dom";
// Hooks
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// Reducers
import { loadingHandler } from "../../redux/slices/SpinnerSlice";
import Seo from "../../Seo/Seo";
import { useTranslation } from "react-i18next";

const Error = () => {
  const dispatchSpinner = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatchSpinner(loadingHandler(false));
  }, [dispatchSpinner]);
  return (
    <div>
      {/* Seo */}
      <Seo currentPage={"Error"} currentPath={"Error"} />
      <MainSection
        withBackground={false}
        withStyle={
          "flex flex-col items-center justify-center gap-1 text-center"
        }
      >
        <TbError404 className="text-[#12342f] text-[150px]" />
        <h2 className="font-primary">{t("notFound")}</h2>
        <h3 className="font-primary">{t("pageNotFound")}</h3>
        <Link to="/" className="link-btn main-button font-secondary">
          {t("goHome")}
        </Link>
      </MainSection>
    </div>
  );
};

export default Error;
