import { useLocation } from "react-router-dom";
import Stars from "../../../../../public/Template icons/Stars_light.svg";
import { useTranslation } from "react-i18next";

const Breadcrumb = () => {
  const currentPath = useLocation().pathname.slice(1);
  const currentPage = currentPath.split("/");
  const { t } = useTranslation();
  return (
    <section className="breadcrumb">
      <div className="container m-auto ">
        <div className="title">
          <img src={Stars} alt="stars-left" />
          <h2 className="font-secondary">
            {t(currentPage[currentPage.length - 1])}
          </h2>
          <img src={Stars} alt="stars-right" />
        </div>

        <p className="small-paragrapgh font-secondary">Home/{currentPath}</p>
      </div>
    </section>
  );
};

export default Breadcrumb;
