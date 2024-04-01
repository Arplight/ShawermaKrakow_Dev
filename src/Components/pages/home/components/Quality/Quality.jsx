import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import QualityBadge from "../../../../common/quality_badge/QualityBadge";
import MainSection from "../../../../common/sections/main_section/MainSection";
import useImages from "../../../../hooks/useImages";
import { IoIosArrowForward } from "react-icons/io";
import { qualityData } from "../../../../../Data/quality/Quality";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";

const Quality = () => {
  const Images = useImages();
  const { t } = useTranslation();
  return (
    <MainSection
      withBackground={true}
      withStyle={"flex flex-col md:flex-row gap-x-10 gap-y-5 flex-col-reverse"}
    >
      <span className="w-full md:w-1/2">
        {Images && (
          <LazyLoad offset={200}>
            <img src={Images[3].url} alt="quality" />
          </LazyLoad>
        )}
      </span>
      <span className="w-full md:w-1/2 flex flex-col gap-3">
        <HeroHeadings
          topHeading={t("checkUsOut")}
          bottomHeading={t("qualityOfSteaksAndRoasts")}
          isCentered={false}
        />
        <p className="small-paragrapgh font-primary text-justify w-full lg:w-4/5">
          {t("discoverTopQuality")}
        </p>
        <ul className="flex flex-col gap-2">
          {qualityData.map((badge, index) => (
            <li key={index}>
              <QualityBadge
                BadgeIcon={badge.badgeIcon}
                BadgeLabel={t(badge.badgeLabel)}
              />
            </li>
          ))}
        </ul>
        <Link to={"/Service"} className="link-btn main-button font-secondary">
          {t("learnMore")}
          <IoIosArrowForward className="text-[20px] button-arrow" />
        </Link>
      </span>
    </MainSection>
  );
};

export default Quality;
