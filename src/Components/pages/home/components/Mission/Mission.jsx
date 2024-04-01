import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import { IoIosArrowForward } from "react-icons/io";
import useImages from "../../../../hooks/useImages";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const Images = useImages();
  const { t } = useTranslation();
  return (
    <MainSection
      withBackground={false}
      withStyle={"flex flex-col md:flex-row gap-x-10 gap-y-5 "}
    >
      <span className="w-full md:w-1/2 flex flex-col gap-3">
        <HeroHeadings
          topHeading={t("aboutUs")}
          bottomHeading={t("missionDrivenFlavorFocused")}
          isCentered={false}
        />
        <p className="small-paragrapgh font-primary text-justify w-full lg:w-4/5">
          {t("drivenByMission")}
        </p>
        <Link
          to={"/About-Us"}
          className="link-btn font-primary arrow-button pl-[0px]"
        >
          {t("ourStory")}
          <IoIosArrowForward className="text-[20px] button-arrow " />
        </Link>
      </span>
      <span className="w-full md:w-1/2 flex">
        {Images && (
          <div className="relative ml-auto  h-max w-3/5 md:w-auto">
            <LazyLoad offset={200}>
              <img src={Images[5].url} alt="Mission" className="ml-auto " />
            </LazyLoad>
            <LazyLoad offset={200}>
              <img
                src={Images[4].url}
                alt="Mission-2"
                className="absolute top-2  right-[55%] h-4/5 "
              />
            </LazyLoad>
          </div>
        )}
      </span>
    </MainSection>
  );
};

export default Mission;
