import { useTranslation } from "react-i18next";
import HeroHeadings from "../../../../common/hero_headings/HeroHeadings";
import MainSection from "../../../../common/sections/main_section/MainSection";
import useImages from "../../../../hooks/useImages";

const AboutUs = () => {
  const Images = useImages();
  const { t } = useTranslation();
  return (
    <MainSection
      withBackground={false}
      withStyle={"flex flex-col md:flex-row gap-x-10 gap-y-5 flex-col-reverse"}
    >
      <span className="w-full md:w-1/2 flex">
        {Images && (
          <img src={Images[6].url} alt="Mission" className="object-contain" />
        )}
      </span>
      <span className="w-full md:w-1/2 flex flex-col gap-3">
        <HeroHeadings
          topHeading={t("aboutUs")}
          bottomHeading={t("missionDrivenFlavorFocused")}
          isCentered={false}
          withStyle={"w-full lg:w-4/5"}
        />
        <p className="small-paragrapgh font-primary text-justify w-full lg:w-4/5">
          {t("drivenByMission")}
        </p>
      </span>
    </MainSection>
  );
};

export default AboutUs;
